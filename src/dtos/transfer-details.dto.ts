/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class TransferDetailsDto {
    @IsString()
    public transaction_id: string;

    @IsString()
    public date_logged: Date;

    @IsString()
    public tg_id: string;

    @IsString()
    public amount: string;

    @IsString()
    public sender_name: string;

    @IsString()
    public transfer_date: Date;

    @IsString()
    public narration: string;

    @IsString()
    public payment_status: string;

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