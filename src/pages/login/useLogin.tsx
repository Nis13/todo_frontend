import { useMutation, useQueryClient } from "react-query";
import useLoginApi from "../../api/LoginApi/useLoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [response, setresponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, mutate, error } = useMutation(
    useLoginApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        setresponse("User Successfully logged in!");
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
  };
};

export default useLogin;
