import { AddTodoType } from "../../pages/todos/addTodo/addTodo.types";
import api from "../api";

const useAddTodoApi = async (todo: AddTodoType) => {
  const response = await api.post("todo", todo);
  console.log(response.status);
  return response.status;
};

export default useAddTodoApi;
