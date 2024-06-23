import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { MedicalHistoryCreateNestedManyWithoutPatientsInput } from "./MedicalHistoryCreateNestedManyWithoutPatientsInput";
import { MedicationCreateNestedManyWithoutPatientsInput } from "./MedicationCreateNestedManyWithoutPatientsInput";
import { NotificationCreateNestedManyWithoutPatientsInput } from "./NotificationCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dob?: Date | null;
  email?: string | null;
  medicalHistories?: MedicalHistoryCreateNestedManyWithoutPatientsInput;
  medications?: MedicationCreateNestedManyWithoutPatientsInput;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutPatientsInput;
};
