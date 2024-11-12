import { UseMutateAsyncFunction } from "react-query";

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
  mutateAsync: UseMutateAsyncFunction<string, Error, SignupFields, unknown>;
  error: Error | null;
};
