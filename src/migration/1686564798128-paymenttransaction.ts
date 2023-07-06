/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class paymenttransaction1686564798128 implements MigrationInterface {
    name = 'paymenttransaction1686564798128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."payment_transaction_transaction_status_enum" AS ENUM('Pending', 'Completed')`);
        await queryRunner.query(`CREATE TABLE "payment_transaction" ("transaction_id" character varying NOT NULL, "receipt_id" character varying NOT NULL, "tg_id" character varying NOT NULL, "amount" character varying NOT NULL, "payment_method" character varying NOT NULL, "payer_id" character varying NOT NULL, "receiver_id" character varying NOT NULL, "comment" character varying NOT NULL, "member_verified_flag" integer NOT NULL DEFAULT '0', "npk_bags" character varying NOT NULL, "urea_bags" character varying NOT NULL, "cash_deposit_flag" integer NOT NULL DEFAULT '0', "scan_date" TIMESTAMP NOT NULL, "transaction_status" "public"."payment_transaction_transaction_status_enum" NOT NULL, "date" TIMESTAMP NOT NULL, "staff_id" character varying NOT NULL, "imei" character varying NOT NULL, "app_version" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5d662065a6c8a45d35e77e9cc81" PRIMARY KEY ("transaction_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payment_transaction"`);
        await queryRunner.query(`DROP TYPE "public"."payment_transaction_transaction_status_enum"`);
    }

}
