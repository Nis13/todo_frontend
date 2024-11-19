import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useSignupApi from '../../api/signupApi/useSignupApi';
import { useNavigate } from 'react-router-dom';
import checkErrorType from '../../utils/checkErrorType';
import { SignupFields } from './signup.types';

export const useSignup = () => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutateAsync } = useMutation(useSignupApi, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      navigate('/login');
    },
    onError: (error: Error) => {
      const returnMessage = checkErrorType(error);
      setErrorResponse(returnMessage);
    }
  });

  const handleSignup = (signupData: SignupFields) => mutateAsync(signupData);

  return { errorResponse, isLoading, handleSignup };
};
