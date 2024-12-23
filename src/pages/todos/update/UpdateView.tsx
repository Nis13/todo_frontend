import { Box, Button, Modal, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import { updateSchema } from "./update.schema";
import { UpdateViewProps } from "./update.types";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "../../../components/Loading";
import TextInput from "../../../components/TextInput";
import CustomSelect from "../../../components/Select";

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
  data,
  handleSubmit,
  openModal,
  handleOpen,
  handleClose,
  errorResponse,
  isLoading,
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
            color="primary.main"
          >
            Update Task
          </Typography>
          <Formik
            initialValues={{
              title: data.title!,
              status: data.status,
            }}
            validationSchema={updateSchema}
            onSubmit={async (values) => {
              handleSubmit({ id: data.id, ...values });
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
                    <TextInput
                      label="title"
                      type="title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      isDisabled={isLoading}
                    />
                    {typeof errors.title === "string" && touched.title ? (
                      <WarningText message={errors.title} />
                    ) : null}
                    <CustomSelect
                      options={statusOptions}
                      name={"role"}
                      defaultValue={
                        statusOptions.find(
                          (option) => option.value === data.status
                        )!
                      }
                      onChangeHandler={(option) =>
                        setFieldValue("status", option?.value)
                      }
                      isDisabled={isLoading}
                    />
                    <Box alignSelf={"center"}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "primary.main" }}
                        disabled={isLoading || isSubmitting}
                      >
                        Update Task
                      </Button>
                    </Box>

                    <WarningText message={errorResponse} />
                    {isLoading ? <Loading height="1rem" /> : null}
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
