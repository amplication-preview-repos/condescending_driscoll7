import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryListRelationFilter } from "../medicalHistory/MedicalHistoryListRelationFilter";
import { MedicationListRelationFilter } from "../medication/MedicationListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type PatientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  medicalHistories?: MedicalHistoryListRelationFilter;
  medications?: MedicationListRelationFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
};
