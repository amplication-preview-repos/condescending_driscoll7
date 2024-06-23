import { Patient } from "../patient/Patient";

export type Medication = {
  createdAt: Date;
  dosage: number | null;
  id: string;
  name: string | null;
  patient?: Patient | null;
  prescriptionDate: Date | null;
  updatedAt: Date;
};
