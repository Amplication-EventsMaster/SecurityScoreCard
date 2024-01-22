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
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { IntFilter } from "../../util/IntFilter";
import { EnumWorkflowReminderMethod } from "./EnumWorkflowReminderMethod";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { WorkflowStepWhereUniqueInput } from "../../workflowStep/base/WorkflowStepWhereUniqueInput";

@InputType()
class WorkflowReminderWhereInput {
  @ApiProperty({
    required: false,
    type: () => BookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookingWhereUniqueInput)
  @IsOptional()
  @Field(() => BookingWhereUniqueInput, {
    nullable: true,
  })
  booking?: BookingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowReminderMethod,
  })
  @IsEnum(EnumWorkflowReminderMethod)
  @IsOptional()
  @Field(() => EnumWorkflowReminderMethod, {
    nullable: true,
  })
  method?: "EMAIL" | "SMS";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  referenceId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  scheduled?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  scheduledDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => WorkflowStepWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowStepWhereUniqueInput, {
    nullable: true,
  })
  workflowStep?: WorkflowStepWhereUniqueInput;
}

export { WorkflowReminderWhereInput as WorkflowReminderWhereInput };
