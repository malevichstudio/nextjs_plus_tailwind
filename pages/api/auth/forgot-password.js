import { resetPasswordEmail } from '@/emailTemplates/resetPassword';
import User from '@/models/User';
import connectDb from '@/utils/connectDb';
import sendMail from '@/utils/sendMail';
import { createResetToken } from '@/utils/tokens';

export default async function forgotPasswordHandler(req, res) {
  try {
    await connectDb();

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'This email does not exist.' });
    }

    const userId = createResetToken({
      id: user._id.toString(),
    });

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password/${userId}`;

    await sendMail({
      to: email,
      user_name: user.name,
      email_link: url,
      subject: 'Reset your password',
      template: resetPasswordEmail,
    });

    res.status(200).json({
      message: 'An email has been sent to you, use it to reset your password.',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
