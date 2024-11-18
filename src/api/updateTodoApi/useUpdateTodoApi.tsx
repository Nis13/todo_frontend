import { UpdateTodoApiProps } from "../../pages/todos/update/update.types";
import api from "../api";

const useUpdateTodoApi = async ({ id, ...updatedData }: UpdateTodoApiProps) => {
  const response = await api.put(`todo/${id}`, updatedData);
  return response;
};

export default useUpdateTodoApi;
