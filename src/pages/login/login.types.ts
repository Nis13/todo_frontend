import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginViewProps = {
  handleLogin: (value: LoginCredentials) => void;
  response: string | null;
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  isSuccess: boolean;
  dispatch: Dispatch;
  navigate: NavigateFunction;
};
