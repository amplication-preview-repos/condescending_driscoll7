import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  notes: string | null;
  patient?: Patient | null;
  time: Date | null;
  updatedAt: Date;
};
