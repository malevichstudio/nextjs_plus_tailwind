import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    default: 'https://www.pngitem.com/pimgs/m/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png',
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
