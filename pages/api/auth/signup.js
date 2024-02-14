import bcrypt from 'bcryptjs';
import validator from 'validator';

import { confirmEmailTemplate } from '@/emailTemplates/confirmEmailTemplate';
import User from '@/models/User';
import connectDb from '@/utils/connectDb';
import sendMail from '@/utils/sendMail';
import { createActivationToken } from '@/utils/tokens';

export default async function signUpHandler(req, res) {
  try {
    await connectDb();
    const { first_name, last_name, email, phone, password } = req.body;

    if (!first_name || !last_name || !email || !phone || !password) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Incorrect Email' });
    }
    if (!validator.isMobilePhone(phone)) {
      return res.status(400).json({ message: 'Incorrect Phone number.' });
    }

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return res.status(400).json({ message: 'Email address already exists.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be atleast 6 characters.' });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name: `${first_name + ' ' + last_name}`,
      email,
      phone,
      password: cryptedPassword,
    });

    await newUser.save();

    const activation_token = createActivationToken({
      id: newUser._id.toString(),
    });

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/activate-email/${activation_token}`;

    await sendMail({
      to: newUser.email,
      user_name: newUser.name,
      email_link: url,
      subject: 'Activate your account',
      template: confirmEmailTemplate,
    });

    res.status(201).json({
      message: 'Register success! Please activate your account to start.',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
