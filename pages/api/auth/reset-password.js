import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '@/models/User';
import connectDb from '@/utils/connectDb';

const RESET_TOKEN_SECRET = process.env.RESET_TOKEN_SECRET;

export default async function resetPasswordHandler(req, res) {
  try {
    await connectDb();

    const { token, password } = req.body;

    const userToken = jwt.verify(token, RESET_TOKEN_SECRET);

    const user = await User.findById(userToken.id);

    if (!user) {
      return res.status(400).json({ message: 'This account no longer exist.' });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    await User.findByIdAndUpdate(user.id, { password: cryptedPassword });

    res.status(200).json({
      message: 'Your account password has beeen successfully updated.',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
