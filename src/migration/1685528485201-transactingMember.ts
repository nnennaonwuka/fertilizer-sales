/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class transactingMember1685528485201 implements MigrationInterface {
    name = 'transactingMember1685528485201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transacting_member_entity" ("unique_member_id" character varying NOT NULL, "transaction_id" character varying NOT NULL, "staff_id" character varying, "imei" character varying, "app_version" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cabcd0752016f5fba861c2987af" PRIMARY KEY ("unique_member_id", "transaction_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transacting_member_entity"`);
    }

}
