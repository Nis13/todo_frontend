export type AddTodoType = {
  title: string;
};
export type AddTodoViewProps = {
  handleAddTask: (value: AddTodoType) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  isLoading: boolean;
  response: string | null;
  isError: boolean;
};
