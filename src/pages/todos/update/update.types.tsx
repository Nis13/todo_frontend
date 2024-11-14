export enum TodoStatusEnum {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type UpdateTodoType = {
  title?: string;
  status?: TodoStatusEnum;
};

export type UpdateTodoApiProps = {
  id: string;
  title?: string;
  status?: TodoStatusEnum;
};

export type UpdateViewProps = {
  handleSubmit: (props: UpdateTodoApiProps) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  data: UpdateTodoApiProps;
  response: string | null;
  isLoading: boolean;
};
