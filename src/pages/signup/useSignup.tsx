import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import useSignupApi from "../../api/signupApi/useSignupApi";
import { useNavigate } from "react-router-dom";
import checkErrorType from "../../utils/checkErrorType";
import { SignupFields } from "./signup.types";

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
        navigate("/login");
      },
      onError: (error: Error) => {
        const returnMessage = checkErrorType(error);
        setResponse(returnMessage);
      },
    }
  );

  const handleSignup = (signupData: SignupFields) => mutateAsync(signupData);

  return { response, isLoading, isSuccess, isError, error, handleSignup };
};
