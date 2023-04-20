import * as Yup from "yup";

import { USER_TYPES } from "../../constants";

export const LoginSchema = Yup.object({
  username: Yup.string().required().min(6),
  password: Yup.string().required().min(6),
});

export const RegisterSchema = Yup.object({
  username: Yup.string().required().min(6),
  password: Yup.string().required().min(6),
  email: Yup.string().required().email(),
  user_type: Yup.string().required().oneOf(Object.values(USER_TYPES)),
});
