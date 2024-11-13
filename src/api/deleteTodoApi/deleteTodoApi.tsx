import api from "../api";

const deleteTodoApi = async (id: string) => {
  const response = await api.delete(`/todo/${id}`);
  return response;
};

export default deleteTodoApi;
