import { Appointment } from "../appointment/Appointment";
import { MedicalHistory } from "../medicalHistory/MedicalHistory";
import { Medication } from "../medication/Medication";
import { Notification } from "../notification/Notification";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  dob: Date | null;
  email: string | null;
  id: string;
  medicalHistories?: Array<MedicalHistory>;
  medications?: Array<Medication>;
  name: string | null;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
