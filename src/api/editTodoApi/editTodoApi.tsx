import api from "../api";

const editTodoApi = async ({ id, updatedData }) => {
  const response = await api.put(`todo/${id}`, updatedData);
  return response;
};

export default editTodoApi;
