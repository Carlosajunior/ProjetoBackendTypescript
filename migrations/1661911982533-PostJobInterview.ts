import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PostJobInterview1661911982533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "post_job_interview",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false

                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("post_job_interview")
    }

}
