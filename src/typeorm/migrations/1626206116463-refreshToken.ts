import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class refreshToken1626206116463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "new_refresh_token",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "expiresIn",
            type: "int",
          },
          {
            name: "userId",
            type: "uuid",
            isUnique: true,
          },
        ],
        foreignKeys: [
          {
            name: "refresh_token_user",
            referencedTableName: "new_users",
            referencedColumnNames: ["id"],
            columnNames: ["userId"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("new_refresh_token");
  }
}
