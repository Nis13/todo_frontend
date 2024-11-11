import { UseMutateFunction } from "react-query";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginViewProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutate: UseMutateFunction<any, unknown, LoginCredentials, unknown>;
  response: string | null;
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  isSuccess: boolean;
  dispatch: Dispatch;
  navigate: NavigateFunction;
};
