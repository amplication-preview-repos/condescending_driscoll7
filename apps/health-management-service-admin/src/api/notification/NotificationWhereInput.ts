import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  time?: DateTimeNullableFilter;
};
