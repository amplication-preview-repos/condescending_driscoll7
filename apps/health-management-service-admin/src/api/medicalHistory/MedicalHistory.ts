import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type MedicalHistory = {
  condition: string | null;
  createdAt: Date;
  description: string | null;
  doctor?: Doctor | null;
  endDate: Date | null;
  id: string;
  patient?: Patient | null;
  startDate: Date | null;
  updatedAt: Date;
};
