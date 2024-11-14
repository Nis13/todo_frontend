import { Column } from "react-table";
import { TodoStatusEnum } from "./update/update.types";

export type ToDo = {
  id: string;
  title: string;
  date: string;
  status: TodoStatusEnum;
};

export type Columns = {
  Header: string;
  accessor: string;
};

export type TodoStatus = "all" | "pending" | "completed";

export type TodosViewProps = {
  isLoading: boolean;
  memoizedData: ToDo[];
  isError: boolean;
  error: unknown;
  columns: Column[];
  activeTab: TodoStatus;
  filteredTodos: ToDo[];
  handleChange: (event: React.SyntheticEvent, value: TodoStatus) => void;
};
