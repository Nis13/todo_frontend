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
export type TodosViewProps = {
  isLoading: boolean;
  todoData: ToDo[];
  isError: boolean;
  error: unknown;
  columns: Column[];
};
