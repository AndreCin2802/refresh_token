import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("new_refresh_token")
export class RefreshToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: string;

  @Column()
  expiresIn: number;
}
