import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryListRelationFilter } from "../medicalHistory/MedicalHistoryListRelationFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  medicalHistories?: MedicalHistoryListRelationFilter;
  name?: StringNullableFilter;
  specialty?: StringNullableFilter;
  typeField?: "Option1";
};
