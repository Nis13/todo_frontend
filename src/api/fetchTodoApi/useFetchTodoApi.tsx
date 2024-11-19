import api from '../api';

const useFetchTodoApi = async () => {
  const response = await api.get('/user/todo');
  return response.data;
};

export default useFetchTodoApi;
