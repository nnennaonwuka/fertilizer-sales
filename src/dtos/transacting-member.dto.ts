/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class TransactingMemberDto {
  @IsString()
  public unique_member_id: string;

  @IsString()
  public transaction_id: string;

  @IsString()
  public staff_id: string;

  @IsString()
  public imei: string;

  @IsString()
  public app_version: string;
}
