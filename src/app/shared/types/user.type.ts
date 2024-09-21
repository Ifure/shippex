export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  token: string;
}

export interface RegisterUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
}
