import api from "../api";

const useDeleteTodoApi = async (id: string) => {
  const response = await api.delete(`/todo/${id}`);
  return response;
};

export default useDeleteTodoApi;
