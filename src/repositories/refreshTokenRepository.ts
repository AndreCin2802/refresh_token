import { RefreshToken } from "./../typeorm/model/RefreshToken";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(RefreshToken)
export class RefreshTokenRepository extends Repository<RefreshToken> {
  async findById(id: string): Promise<RefreshToken | undefined> {
    const refreshToken = await this.findOne({
      where: {
        id,
      },
    });
    return refreshToken;
  }
}
