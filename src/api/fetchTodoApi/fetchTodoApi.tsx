import api from "../api";

const useFetchTodoApi = async () => {
  const response = await api.get("/todo");
  return response.data;
};

export default useFetchTodoApi;
