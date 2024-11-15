import { Box, Button, Container, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ImCheckmark, ImCross } from "react-icons/im";
import { DeleteViewProps } from "./delete.types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minwidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteView = ({
  rowId,
  handleDelete,
  openModal,
  handleOpen,
  handleClose,
}: DeleteViewProps) => {
  return (
    <Container>
      <Button onClick={handleOpen}>
        <DeleteIcon />
      </Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ padding: "1rem" }}
            color="primary.main"
          >
            Do you really want to delete the task?
          </Typography>
          <Box>
            <Box display={"flex"} justifyContent={"center"} gap={"2rem"}>
              <Button variant="outlined" onClick={() => handleDelete(rowId)}>
                <ImCheckmark />
                Yes
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                <ImCross />
                No
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default DeleteView;
