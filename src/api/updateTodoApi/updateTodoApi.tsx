import { UpdateTodoApiProps } from "../../pages/todos/update/update.types";
import api from "../api";

const updateTodoApi = async ({ id, ...updatedData }: UpdateTodoApiProps) => {
  const response = await api.put(`todo/${id}`, updatedData);
  return response;
};

export default updateTodoApi;
