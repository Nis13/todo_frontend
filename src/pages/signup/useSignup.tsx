import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useSignupApi from "../../api/signupApi/useSignupApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [response, setResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, mutateAsync, error } = useMutation(
    useSignupApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        setResponse("User Created Successfully!");
        navigate("login");
      },
      onError: (error: Error) => {
        if (axios.isAxiosError(error) && error.response) {
          setResponse(`Error:${error.response.data.message}`);
        } else if (error instanceof Error)
          setResponse(`Error: ${error.message}`);
      },
    }
  );
  return { response, isLoading, isSuccess, isError, error, mutateAsync };
};
