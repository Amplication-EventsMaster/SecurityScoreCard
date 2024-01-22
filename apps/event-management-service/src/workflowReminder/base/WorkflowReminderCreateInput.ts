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
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  IsBoolean,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumWorkflowReminderMethod } from "./EnumWorkflowReminderMethod";
import { WorkflowStepWhereUniqueInput } from "../../workflowStep/base/WorkflowStepWhereUniqueInput";

@InputType()
class WorkflowReminderCreateInput {
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
  booking?: BookingWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    enum: EnumWorkflowReminderMethod,
  })
  @IsEnum(EnumWorkflowReminderMethod)
  @Field(() => EnumWorkflowReminderMethod)
  method!: "EMAIL" | "SMS";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceId?: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  scheduled!: boolean;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  scheduledDate!: Date;

  @ApiProperty({
    required: true,
    type: () => WorkflowStepWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowStepWhereUniqueInput)
  @Field(() => WorkflowStepWhereUniqueInput)
  workflowStep!: WorkflowStepWhereUniqueInput;
}

export { WorkflowReminderCreateInput as WorkflowReminderCreateInput };