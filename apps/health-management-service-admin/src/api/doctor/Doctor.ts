import { Appointment } from "../appointment/Appointment";
import { MedicalHistory } from "../medicalHistory/MedicalHistory";

export type Doctor = {
  appointments?: Array<Appointment>;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  medicalHistories?: Array<MedicalHistory>;
  name: string | null;
  specialty: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
