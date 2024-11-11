import { useMutation, useQueryClient } from "react-query";
import useLoginApi from "../../api/LoginApi/useLoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";

const useLogin = () => {
  const [response, setresponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, mutate, error, data } = useMutation(
    useLoginApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        setresponse("User Successfully logged in!");
        dispatch(loginSuccess({ accessToken: data }));
        console.log("from query", data);
        // navigate("loggedin");
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          setresponse(`Error:${error.response.data.message}`);
        } else if (error instanceof Error)
          setresponse(`Error: ${error.message}`);
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
