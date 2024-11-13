import { useMutation, useQueryClient } from "react-query";
import useLoginApi from "../../api/loginApi/useLoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import checkErrorType from "../../utils/checkErrorType";
import { LoginCredentials } from "./login.types";

const useLogin = () => {
  const [response, setResponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, isSuccess, isError, mutateAsync, error } = useMutation(
    useLoginApi,
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("user");
        setResponse("User Successfully logged in!");
        dispatch(loginSuccess({ accessToken: data }));
        navigate("/todos");
      },
      onError: (error: Error) => {
        const returnMessage = checkErrorType(error);
        setResponse(returnMessage);
      },
    }
  );

  const handleLogin = (loginCredentials: LoginCredentials) => {
    mutateAsync(loginCredentials);
  };
  return {
    isLoading,
    isSuccess,
    isError,
    handleLogin,
    error,
    navigate,
    response,
    dispatch,
  };
};

export default useLogin;
