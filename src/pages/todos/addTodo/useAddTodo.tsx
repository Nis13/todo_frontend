import { useMutation, useQueryClient } from "react-query";
import addTodoApi from "../../../api/addTodoApi/addTodoApi";
import { useState } from "react";
import checkErrorType from "../../../utils/checkErrorType";
import { AddTodoType } from "./addTodo.types";

export const useAddTodo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const { isLoading, data, isError, error, mutateAsync } = useMutation(
    addTodoApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        setResponse("User Successfully logged in!");
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