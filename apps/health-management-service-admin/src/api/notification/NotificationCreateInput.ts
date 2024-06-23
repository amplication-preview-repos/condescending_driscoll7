import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  patient?: PatientWhereUniqueInput | null;
  time?: Date | null;
};
