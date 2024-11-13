import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import Select from "react-select";
import { updateSchema } from "./update.schema";
import { UpdateViewProps } from "./update.types";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
];

const UpdateView = ({
  handleSubmit,
  openModal,
  handleOpen,
  handleClose,
  data,
}: UpdateViewProps) => {
  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            textAlign={"center"}
            sx={{ padding: "1rem" }}
            color="#90caf9"
          >
            Update Task
          </Typography>
          <Formik
            initialValues={{
              id: data.id,
              title: data.title,
              status: data.status,
            }}
            validationSchema={updateSchema}
            onSubmit={async (values) => {
              handleSubmit(values);
            }}
          >
            {(props) => {
              const {
                values,
                handleChange,
                errors,
                touched,
                isSubmitting,
                setFieldValue,
              } = props;
              return (
                <Form>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <TextField
                      label="title"
                      type="title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                    {typeof errors.title === "string" && touched.title ? (
                      <WarningText message={errors.title} />
                    ) : null}
                    <Select
                      options={statusOptions}
                      name="status"
                      defaultValue={statusOptions.find(
                        (option) => option.value === data.status
                      )}
                      isSearchable={false}
                      onChange={(option) =>
                        setFieldValue("status", option?.value)
                      }
                    />
                    <Box alignSelf={"center"}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "#90caf9" }}
                        disabled={isSubmitting}
                      >
                        Update Task
                      </Button>
                    </Box>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateView;
