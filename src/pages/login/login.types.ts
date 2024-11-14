export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginViewProps = {
  handleLogin: (value: LoginCredentials) => void;
  response: string | null;
  isLoading: boolean;
};
