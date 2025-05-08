import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const RegisterSchema = Yup.object({
  firstName: Yup.string().required().min(6),
  lastName: Yup.string().required().min(6),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});
