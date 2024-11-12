import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Select from "react-select";
import Button from "../../components/Button";
import { signupSchema } from "./signup.schema";
import { SignupViewProps } from "./signup.types";
import WarningText from "../../components/WarningText";
const options = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
];

const SignupView = ({ response, isLoading, mutateAsync }: SignupViewProps) => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "2rem",
          width: "30rem",
        }}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{ padding: "1rem" }}
          color="#90caf9"
        >
          Signup
        </Typography>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
            role: options[0].value,
          }}
          validationSchema={signupSchema}
          onSubmit={async (values, { resetForm }) => {
            mutateAsync(values);
            resetForm();
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
                    label="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name ? (
                    <WarningText message={errors.name} />
                  ) : null}

                  <TextField
                    label="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <WarningText message={errors.email} />
                  ) : null}

                  <TextField
                    label="password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <WarningText message={errors.password} />
                  ) : null}

                  <Select
                    options={options}
                    name="role"
                    defaultValue={options[0]}
                    isSearchable={false}
                    onChange={(option) => setFieldValue("role", option?.value)}
                  />
                  {errors.role && touched.role ? (
                    <WarningText message={errors.role} />
                  ) : null}
                  <Box textAlign={"center"}>
                    <Button
                      type="submit"
                      btnSX={{ backgroundColor: "#90caf9" }}
                      isDisabled={isSubmitting || isLoading}
                      btnText="Signup"
                    />
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
        <WarningText message={isLoading ? "Loading...." : response} />
      </Paper>
    </Container>
  );
};

export default SignupView;
