import { UserRepository } from "./../../repositories/userRepository";
import { IUserRequest } from "../../interfaces/IUserRequest";

import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { getCustomRepository } from "typeorm";

class CreateUserUseCase {
  async execute({ name, username, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const userAlreadyExists = await userRepository.findByUsername(username);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const id = uuidv4();

    const user = userRepository.create({
      id,
      username,
      name,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserUseCase };
