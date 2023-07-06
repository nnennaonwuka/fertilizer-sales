/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';


export class SelfDepositDto {
    @IsString()
    public transaction_id: string;

    @IsString()
    public date_logged: Date;

    @IsString()
    public tg_id: string;

    @IsString()
    public depositor_name: string;

    @IsString()
    public deposit_date: Date;

    @IsString()
    public amount: string;

    @IsString()
    public latitude: string;

    @IsString()
    public longitude: string;

    @IsString()
    public bank_name: string;

    @IsString()
    public bank_lga: string;

    @IsString()
    public bank_community: string;

    @IsString()
    public bank_ward: string;

    @IsString()
    public pos_receipt_id: string;

    @IsString()
    public payment_status: string

    @IsString()
    public staff_id: string;

    @IsString()
    public imei: string;

    @IsString()
    public app_version: string;

    @IsString()
    public created_at: string;

    @IsString()
    public updated_at: string;
}