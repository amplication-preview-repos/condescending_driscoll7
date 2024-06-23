import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MedicationWhereInput = {
  dosage?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  prescriptionDate?: DateTimeNullableFilter;
};
