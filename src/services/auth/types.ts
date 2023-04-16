import { USER_TYPES } from "../../constants";

export interface LoginProps {
  username: string;
  password: string;
}

export interface UserInterface {
  id: string;
  email: string;
  user_type: string;
  username: string;
}

export interface AuthResponse extends UserInterface {
  tokens: Tokens;
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface RegisterProps {
  username: string;
  email: string;
  password: string;
  user_type: USER_TYPES;
}

export interface ErrorResponse {
  detail: string;
}
