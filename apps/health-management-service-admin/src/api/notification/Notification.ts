import { Patient } from "../patient/Patient";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  patient?: Patient | null;
  time: Date | null;
  updatedAt: Date;
};
