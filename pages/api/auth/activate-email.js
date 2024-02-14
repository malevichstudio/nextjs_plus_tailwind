import jwt from 'jsonwebtoken';

import User from '@/models/User';
import connectDb from '@/utils/connectDb';

const ACTIVATION_TOKEN_SECRET = process.env.ACTIVATION_TOKEN_SECRET;

export default async function activateEmailHandler(req, res) {
  try {
    await connectDb();

    const { token } = req.body;

    const userToken = jwt.verify(token, ACTIVATION_TOKEN_SECRET);

    const user = await User.findById(userToken.id);

    if (!user) {
      return res.status(400).json({ message: 'This account no longer exist.' });
    }

    if (user.emailVerified == true) {
      return res.status(400).json({ message: 'Email address already verified.' });
    }

    await User.findByIdAndUpdate(user.id, { emailVerified: true });

    res.status(200).json({
      message: 'Your account has beeen successfully verified.',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
