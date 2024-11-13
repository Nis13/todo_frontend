import { useMutation, useQueryClient } from "react-query";
import addTodoApi from "../../../api/addTodoApi/addTodoApi";
import { useState } from "react";
import axios from "axios";

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
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          setResponse(`Error:${error.response.data.message}`);
        } else if (error instanceof Error)
          setResponse(`Error: ${error.message}`);
      },
    }
  );
  return {
    response,
    isLoading,
    data,
    isError,
    error,
    mutateAsync,
    handleOpen,
    handleClose,
    openModal,
  };
};
