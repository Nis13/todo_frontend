import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import updateTodoApi from "../../../api/updateTodoApi/updateTodoApi";
import checkErrorType from "../../../utils/checkErrorType";
import { UpdateTodoApiProps } from "./update.types";

export const useUpdate = () => {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const [response, setResponse] = useState("");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { isLoading, isError, error, mutateAsync } = useMutation(
    updateTodoApi,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todo");
        handleClose();
      },
      onError: (error: Error) => {
        const message = checkErrorType(error);
        setResponse(message);
      },
    }
  );

  const handleSubmit = (values: UpdateTodoApiProps) => {
    mutateAsync(values);
  };
  return {
    isLoading,
    openModal,
    handleClose,
    handleOpen,
    isError,
    error,
    handleSubmit,
    response,
  };
};
