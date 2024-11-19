export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginViewProps = {
  handleLogin: (value: LoginCredentials) => void;
  errorResponse: string | null;
  isLoading: boolean;
};
