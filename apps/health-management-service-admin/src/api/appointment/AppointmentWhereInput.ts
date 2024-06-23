import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AppointmentWhereInput = {
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
