/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class selfdeposit1686566768508 implements MigrationInterface {
    name = 'selfdeposit1686566768508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."self_deposity_payment_status_enum" AS ENUM('Pending', 'Approved', 'Declined')`);
        await queryRunner.query(`CREATE TABLE "self_deposity" ("transaction_id" character varying NOT NULL, "date_logged" TIMESTAMP NOT NULL, "tg_id" character varying NOT NULL, "depositor_name" character varying NOT NULL, "deposit_date" TIMESTAMP NOT NULL, "amount" character varying NOT NULL, "latitude" character varying NOT NULL, "longitude" character varying NOT NULL, "bank_name" character varying NOT NULL, "bank_lga" character varying NOT NULL, "bank_community" character varying NOT NULL, "bank_ward" character varying NOT NULL, "pos_receipt_id" character varying NOT NULL, "payment_status" "public"."self_deposity_payment_status_enum" NOT NULL, "staff_id" character varying NOT NULL, "imei" character varying NOT NULL, "app_version" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9011b37d3217915a3f2a5bcd97e" PRIMARY KEY ("transaction_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "self_deposity"`);
        await queryRunner.query(`DROP TYPE "public"."self_deposity_payment_status_enum"`);
    }

}
