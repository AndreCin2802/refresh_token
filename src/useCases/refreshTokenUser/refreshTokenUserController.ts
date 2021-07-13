import { Response } from "express";
import { Request } from "express";
import { RefreshTokenUserUseCase } from "./refreshTokenUserUseCase";
class RefreshTokenUserController {
  async handle(request: Request, response: Response) {
    const { refresh_token } = request.body;
    const refreshTokenUserUseCase = new RefreshTokenUserUseCase();

    const token = await refreshTokenUserUseCase.execute(refresh_token);

    return response.json(token);
  }
}

export { RefreshTokenUserController };
