/* eslint-disable prettier/prettier */
import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"
import { Transacting_member } from "../interfaces/transacting-member.interface"

@Entity()
export class transacting_memberEntity implements Transacting_member{
    @PrimaryColumn()
    unique_member_id: string;

    @PrimaryColumn()
    transaction_id: string;
    
    @Column({nullable: true})
    staff_id: string;

    @Column({nullable: true})
    imei: string;

    @Column({nullable: true})
    app_version: string;

    @Column({nullable: true})
    @CreateDateColumn()
    created_at: Date;

    @Column({nullable: true})
    @UpdateDateColumn()
    updated_at: Date;
}