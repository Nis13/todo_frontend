export type DeleteViewProps = {
  rowId: string;
  handleDelete: (rowId: string) => void;
  openModal: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  response: string | null;
  isLoading: boolean;
};
