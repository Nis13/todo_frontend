import { AddTodoType } from "../../pages/todos/addTodo/addTodo.types";
import api from "../api";

const addTodoApi = async (todo: AddTodoType) => {
  const response = await api.post("todo", todo);
  return response;
};

export default addTodoApi;
