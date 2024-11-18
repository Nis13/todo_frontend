import { useMutation, useQueryClient } from "react-query";
import useAddTodoApi from "../../../api/addTodoApi/useAddTodoApi";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import { AddTodoType } from "./add.types";

export const useAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isLoading, mutateAsync } = useMutation(useAddTodoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
      handleClose();
    },
    onError: (error: Error) => {
      const errorMessage = checkErrorType(error);
      setErrorResponse(errorMessage);
    },
  });

  const handleAddTask = (taskToAdd: AddTodoType) => mutateAsync(taskToAdd);
  return {
    errorResponse,
    isLoading,
    handleAddTask,
    handleOpen,
    handleClose,
    openModal,
  };
};
