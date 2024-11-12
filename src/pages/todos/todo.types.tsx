import { Column } from "react-table";

export type ToDo = {
  title: string;
  date: Date;
  status: string;
};

export type Columns = {
  Header: string;
  accessor: string;
};
export type TodosViewProps = {
  isLoading: boolean;
  memoizedData: ToDo[];
  isError: boolean;
  error: unknown;
  columns: Column[];
};
