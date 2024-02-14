import axios from 'axios';

import { API_BREAKPOINTS } from '@/common/constants';

const instance = axios.create();

instance.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  },
);

export const postRegister = async ({ first_name, last_name, email, phone, password, confirmPassword, accept }) => {
  try {
    const { data } = await instance.post(API_BREAKPOINTS.signUp, {
      first_name,
      last_name,
      email,
      phone,
      password,
      confirmPassword,
      accept,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const postForgotPassword = async ({ email }) => {
  try {
    const { data } = await instance.post(API_BREAKPOINTS.forgotPassword, {
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const postResetPassword = async ({ password, token }) => {
  try {
    const { data } = await instance.post(API_BREAKPOINTS.resetPassword, {
      password,
      token,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const postActivateEmail = async ({ token }) => {
  try {
    const { data } = await instance.put(API_BREAKPOINTS.activateEmail, { token });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
