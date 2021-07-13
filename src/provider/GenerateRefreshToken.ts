import { RefreshTokenRepository } from "./../repositories/refreshTokenRepository";
import { v4 as uuidv4 } from "uuid";
import { getCustomRepository } from "typeorm";

import dayjs from "dayjs";
class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, "days").unix();
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
    const id = uuidv4();

    const generateRefreshToken = refreshTokenRepository.create({
      id,
      userId,
      expiresIn,
    });

    await refreshTokenRepository.save(generateRefreshToken);

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
