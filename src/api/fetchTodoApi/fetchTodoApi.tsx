import api from "../api";

const fetchTodoApi = async () => {
  const response = await api.get("/todo");
  return response.data;
};

export default fetchTodoApi;
