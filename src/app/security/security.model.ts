export interface UserData {
  email: string;
  password: string;
}

export interface ResponseAuthentication {
  token: string;
  expirationDate: Date;
}
