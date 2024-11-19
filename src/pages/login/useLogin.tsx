import { useMutation, useQueryClient } from 'react-query';
import useLoginApi from '../../api/loginApi/useLoginApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/authSlice';
import checkErrorType from '../../utils/checkErrorType';
import { LoginCredentials } from './login.types';

const useLogin = () => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(useLoginApi, {
    onSuccess: data => {
      queryClient.invalidateQueries('user');
      dispatch(loginSuccess({ accessToken: data }));
      navigate('/todos');
    },
    onError: (error: Error) => {
      const returnMessage = checkErrorType(error);
      setErrorResponse(returnMessage);
    }
  });

  const handleLogin = (loginCredentials: LoginCredentials) => mutateAsync(loginCredentials);
  return {
    isLoading,
    handleLogin,
    errorResponse
  };
};

export default useLogin;
