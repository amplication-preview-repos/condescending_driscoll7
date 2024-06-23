import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { MedicalHistoryCreateNestedManyWithoutDoctorsInput } from "./MedicalHistoryCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  contactInformation?: string | null;
  medicalHistories?: MedicalHistoryCreateNestedManyWithoutDoctorsInput;
  name?: string | null;
  specialty?: string | null;
  typeField?: "Option1" | null;
};
