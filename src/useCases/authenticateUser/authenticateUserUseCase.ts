import { RefreshTokenRepository } from "./../../repositories/refreshTokenRepository";
import { UserRepository } from "./../../repositories/userRepository";
import { getCustomRepository } from "typeorm";
import { IUserAuth } from "../../interfaces/IUserRequest";

import { compare } from "bcryptjs";

import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
class AuthenticateUserUseCase {
  async execute({ username, password }: IUserAuth) {
    const userRepository = getCustomRepository(UserRepository);
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);
    const userAlreadyExists = await userRepository.findByUsername(username);

    if (!userAlreadyExists) {
      throw new Error("User or password incorrect");
    }

    refreshTokenRepository.delete({ userId: userAlreadyExists.id });

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExists.id
    );

    return { token, refreshToken };
  }
}

export { AuthenticateUserUseCase };
