/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {self_deposit, PAYMENT_STATUS} from '../interfaces/self-deposit.interface';

@Entity()
export class SelfDeposity implements self_deposit {
    @PrimaryColumn()
    transaction_id: string;

    @Column()
    date_logged: Date;

    @Column()
    tg_id: string;

    @Column()
    depositor_name: string;

    @Column()
    deposit_date: Date;

    @Column()
    amount: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    bank_name: string;

    @Column()
    bank_lga: string;

    @Column()
    bank_community: string;

    @Column()
    bank_ward: string;

    @Column()
    pos_receipt_id: string;

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