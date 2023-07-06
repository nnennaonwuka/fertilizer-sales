/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class transferdetails1686567822435 implements MigrationInterface {
    name = 'transferdetails1686567822435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transfer_details_payment_status_enum" AS ENUM('Pending', 'Approved', 'Declined')`);
        await queryRunner.query(`CREATE TABLE "transfer_details" ("transaction_id" character varying NOT NULL, "date_logged" TIMESTAMP NOT NULL, "tg_id" character varying NOT NULL, "amount" character varying NOT NULL, "sender_name" character varying NOT NULL, "transfer_date" TIMESTAMP NOT NULL, "narration" character varying NOT NULL, "payment_status" "public"."transfer_details_payment_status_enum" NOT NULL, "staff_id" character varying NOT NULL, "imei" character varying NOT NULL, "app_version" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dce14947c7735301514a930ee15" PRIMARY KEY ("transaction_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transfer_details"`);
        await queryRunner.query(`DROP TYPE "public"."transfer_details_payment_status_enum"`);
    }

}
