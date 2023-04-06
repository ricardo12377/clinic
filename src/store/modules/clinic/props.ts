export interface Consult {
  id: string;
  title: string;
  obs?: string;
  client: string;
  doctorId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface GetConsultsStatus {
  error: unknown;
  status: string;
}

export interface GetUsersStatus {
  error: unknown;
  status: string;
}

export interface UserSlice {
  user: User;
  consults: Consult[];
  getConsultsStatus: GetConsultsStatus;
  getUsersStatus: GetUsersStatus;
  users: User[];
}
