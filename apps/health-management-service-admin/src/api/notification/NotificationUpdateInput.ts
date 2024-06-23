import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  patient?: PatientWhereUniqueInput | null;
  time?: Date | null;
};
