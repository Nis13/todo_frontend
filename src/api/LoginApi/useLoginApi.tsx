import { LoginCredentials } from '../../pages/login/login.types';
import api from '../api';

const useLoginApi = async (loginCredentials: LoginCredentials) => {
  const response = await api.post('/auth/login', loginCredentials);
  const accessToken = response.data.accessToken;
  return accessToken;
};

export default useLoginApi;
