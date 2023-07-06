/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class PaymentTransactionDto {
    @IsString()
    public transaction_id: string;
    
    @IsString()
    public receipt_id: string;

    @IsString()
    public tg_id: string;

    @IsString()
    public amount: string;

    @IsString()
    public payment_method: string;

    @IsString()
    public payer_id: string;

    @IsString()
    public receiver_id: string;

    @IsString()
    public comment: string;

    @IsNumber()
    public member_verified_flag: number;

    @IsString()
    public npk_bags: string;

    @IsString()
    public urea_bags: string;

    @IsNumber()
    public cash_deposit_flag: number;

    @IsString()
    public scan_date: Date;

    @IsString()
    public transaction_status: string;

    @IsString()
    public date: Date;

    @IsString()
    public staff_id: string;

    @IsString()
    public imei: string;

    @IsString()
    public app_version: string;

    @IsString()
    public created_at: Date;

    @IsString()
    public updated_at: Date;
}