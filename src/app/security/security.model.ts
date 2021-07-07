export interface UserData {
  email: string;
  password: string;
}

export interface ResponseAuthentication {
  token: string;
  expirationDate: Date;
}

export interface UserDto {
  id: string;
  email: string;
}
