import { EntityRepository, Repository } from "typeorm";
import { User } from "../typeorm/model/Users";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        username,
      },
    });
    return user;
  }
}
