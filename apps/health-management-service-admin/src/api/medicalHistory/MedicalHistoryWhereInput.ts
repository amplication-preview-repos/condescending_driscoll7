import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalHistoryWhereInput = {
  condition?: StringNullableFilter;
  description?: StringNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
