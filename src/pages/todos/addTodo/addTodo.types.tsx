import { AxiosResponse } from "axios";
import { UseMutateAsyncFunction } from "react-query";

export type AddTodoType = {
  title: string;
};
export type AddTodoViewProps = {
  mutateAsync: UseMutateAsyncFunction<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AxiosResponse<any, any>,
    unknown,
    AddTodoType,
    unknown
  >;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
