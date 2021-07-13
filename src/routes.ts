import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/authenticateUserController";
import { AuthenticateUserUseCase } from "./useCases/authenticateUser/authenticateUserUseCase";
import { CreateUserController } from "./useCases/createUser/createUserController";
import { CreateUserUseCase } from "./useCases/createUser/createUserUseCase";
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/refreshTokenUserController";
import { RefreshTokenUserUseCase } from "./useCases/refreshTokenUser/refreshTokenUserUseCase";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);
router.get("/courses", ensureAuthenticated, (request, response) => {
  return response.json([
    { id: 1, name: "NodeJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Angular" },
  ]);
});

export { router };
