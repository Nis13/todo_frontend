import { AddTodoType } from "../../pages/todos/add/add.types";
import api from "../api";

const useAddTodoApi = async (todo: AddTodoType) => {
  const response = await api.post("todo", todo);
  return response;
};

export default useAddTodoApi;
