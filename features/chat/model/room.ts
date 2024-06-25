export interface Room {
  id: number;
  title: string;
  domain: string;
  lastMessage: string;
  date: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  status: boolean;
}
