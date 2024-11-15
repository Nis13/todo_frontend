import { useMutation, useQueryClient } from "react-query";
import useAddTodoApi from "../../../api/addTodoApi/useAddTodoApi";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import { AddTodoType } from "./add.types";

export const useAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const { isLoading, data, isError, error, mutateAsync } = useMutation(
    useAddTodoApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        handleClose();
      },
      onError: (error: Error) => {
        const returnMessage = checkErrorType(error);
        setResponse(returnMessage);
      },
    }
  );

  const handleAddTask = (taskToAdd: AddTodoType) => mutateAsync(taskToAdd);
  return {
    response,
    isLoading,
    data,
    isError,
    error,
    handleAddTask,
    handleOpen,
    handleClose,
    openModal,
  };
};
