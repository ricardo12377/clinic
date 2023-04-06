export interface Consult {
  id: string;
  title: string;
  obs?: string;
  client: string;
  doctorId: string;
}

export interface Data {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}
