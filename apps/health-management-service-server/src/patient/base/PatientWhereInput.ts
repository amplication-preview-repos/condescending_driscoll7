/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentListRelationFilter } from "../../appointment/base/AppointmentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryListRelationFilter } from "../../medicalHistory/base/MedicalHistoryListRelationFilter";
import { MedicationListRelationFilter } from "../../medication/base/MedicationListRelationFilter";
import { NotificationListRelationFilter } from "../../notification/base/NotificationListRelationFilter";

@InputType()
class PatientWhereInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AppointmentListRelationFilter)
  @IsOptional()
  @Field(() => AppointmentListRelationFilter, {
    nullable: true,
  })
  appointments?: AppointmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dob?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => MedicalHistoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicalHistoryListRelationFilter)
  @IsOptional()
  @Field(() => MedicalHistoryListRelationFilter, {
    nullable: true,
  })
  medicalHistories?: MedicalHistoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MedicationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MedicationListRelationFilter)
  @IsOptional()
  @Field(() => MedicationListRelationFilter, {
    nullable: true,
  })
  medications?: MedicationListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => NotificationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NotificationListRelationFilter)
  @IsOptional()
  @Field(() => NotificationListRelationFilter, {
    nullable: true,
  })
  notifications?: NotificationListRelationFilter;
}

export { PatientWhereInput as PatientWhereInput };
