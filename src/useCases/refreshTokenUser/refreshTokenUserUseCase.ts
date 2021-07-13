import { RefreshTokenRepository } from "./../../repositories/refreshTokenRepository";
import { getCustomRepository } from "typeorm";

import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
    const refreshToken = await refreshTokenRepository.findById(refresh_token);

    if (!refreshToken) {
      throw new Error("Refresh Token Invalid");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.userId);

    return token;
  }
}

export { RefreshTokenUserUseCase };
