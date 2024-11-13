export type SignupFields = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

export type SignupViewProps = {
  response: string | null;
  isLoading: boolean;
  isError: boolean;
  handleSignup: (value: SignupFields) => void;
  error: Error | null;
};
