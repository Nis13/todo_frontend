import { useTodos } from "./useTodos";
import { TodosView } from "./TodosView";

const Todos = () => {
  const logic = useTodos();
  return <TodosView {...logic} />;
};

export default Todos;
