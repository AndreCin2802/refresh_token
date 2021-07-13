import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("new_users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
