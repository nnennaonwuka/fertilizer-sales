/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {transfer_details, PAYMENT_STATUS} from '../interfaces/transfer-details.interface';

@Entity()
export class TransferDetails implements transfer_details {
    @PrimaryColumn()
    transaction_id: string;

    @Column()
    date_logged: Date;

    @Column()
    tg_id: string;

    @Column()
    amount: string;

    @Column()
    sender_name: string;

    @Column()
    transfer_date: Date;

    @Column()
    narration: string;

    @Column({ type: 'enum', enum: PAYMENT_STATUS})
    payment_status: PAYMENT_STATUS;

    @Column()
    staff_id: string;

    @Column()
    imei: string;

    @Column()
    app_version: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}