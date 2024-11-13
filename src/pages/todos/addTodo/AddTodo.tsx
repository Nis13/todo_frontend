import { useAddTodo } from "./useAddTodo";
import AddTodoView from "./AddTodoView";

const AddTodo = () => {
  const logic = useAddTodo();
  return <AddTodoView {...logic} />;
};

export default AddTodo;
