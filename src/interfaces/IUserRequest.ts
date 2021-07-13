interface IUserRequest {
  name: string;
  password: string;
  username: string;
}

interface IUserAuth {
  username: string;
  password: string;
}

export { IUserRequest, IUserAuth };
