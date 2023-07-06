/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {Payment_Transactions, TRANSACTION_STATUS} from '../interfaces/payment-transactions.interface';

@Entity()
export class PaymentTransaction implements Payment_Transactions{
    @PrimaryColumn()
    transaction_id: string;

    @Column()
    receipt_id: string;

    @Column()
    tg_id: string;

    @Column()
    amount: string;

    @Column()
    payment_method: string;

    @Column()
    payer_id: string;

    @Column()
    receiver_id: string;

    @Column()
    comment: string;

    @Column({default: 0})
    member_verified_flag: number;

    @Column()
    npk_bags: string;

    @Column()
    urea_bags: string;

    @Column({default: 0})
    cash_deposit_flag: number;

    @Column()
    scan_date: Date;

    @Column({ type: 'enum', enum: TRANSACTION_STATUS })
    transaction_status: TRANSACTION_STATUS;

    @Column()
    date: Date;

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
