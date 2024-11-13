import { UseMutateAsyncFunction } from "react-query";

export type AddTodoType = {
  title: string;
};
export type AddTodoViewProps = {
  mutateAsync: UseMutateAsyncFunction<string, Error, AddTodoType, unknown>;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
