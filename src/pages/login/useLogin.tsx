import { useMutation, useQueryClient } from "react-query";
import useLoginApi from "../../api/loginApi/useLoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";

const useLogin = () => {
  const [response, setResponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, mutate, error } = useMutation(
    useLoginApi,
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("user");
        setResponse("User Successfully logged in!");
        dispatch(loginSuccess({ accessToken: data }));
        navigate("/home");
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          setResponse(`Error:${error.response.data.message}`);
        } else if (error instanceof Error)
          setResponse(`Error: ${error.message}`);
      },
    }
  );
  return {
    isLoading,
    isSuccess,
    isError,
    mutate,
    error,
    navigate,
    response,
    dispatch,
  };
};

export default useLogin;
