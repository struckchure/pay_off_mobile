export interface LoginProps {
  email: string;
  password: string;
}

export interface UserInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  isActive: boolean;
  username: string;
  bvn: string | null;
}

export interface AuthResponse extends UserInterface {
  tokens: Tokens;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ErrorResponse {
  detail: string;
}
