export interface Adress {
  street: string;
  house: number;
}

export interface User {
  username: string;
  age: number;
  coutry: string;
  adress: Adress;
  admin: boolean;
}