import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { signupSchema } from './signup.schema';
import { SignupViewProps } from './signup.types';
import WarningText from '../../components/WarningText';
import CustomSelect from '../../components/Select';
import TextInput from '../../components/TextInput';
const options = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Admin' }
];

const SignupView = ({ errorResponse, isLoading, handleSignup }: SignupViewProps) => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: '2rem',
          width: '30rem'
        }}
      >
        <Typography variant="h3" textAlign={'center'} sx={{ padding: '1rem' }} color="primary.main">
          Signup
        </Typography>
        <Formik
          initialValues={{
            name: '',
            password: '',
            email: '',
            role: options[0].value
          }}
          validationSchema={signupSchema}
          onSubmit={async values => {
            handleSignup(values);
          }}
        >
          {props => {
            const { values, handleChange, errors, touched, isSubmitting, setFieldValue } = props;
            return (
              <Form>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '2rem'
                  }}
                >
                  <TextInput
                    label="name"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isDisabled={isLoading}
                  />
                  {errors.name && touched.name ? <WarningText message={errors.name} /> : null}

                  <TextInput
                    label="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isDisabled={isLoading}
                  />
                  {errors.email && touched.email ? <WarningText message={errors.email} /> : null}

                  <TextInput
                    label="password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isDisabled={isLoading}
                  />
                  {errors.password && touched.password ? (
                    <WarningText message={errors.password} />
                  ) : null}

                  <CustomSelect
                    options={options}
                    name={'role'}
                    defaultValue={options[0]}
                    onChangeHandler={option => setFieldValue('role', option?.value)}
                  />
                  {errors.role && touched.role ? <WarningText message={errors.role} /> : null}
                  <Box textAlign={'center'}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: 'primary.main' }}
                      disabled={isSubmitting || isLoading}
                    >
                      Signup
                    </Button>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
        <WarningText message={isLoading ? 'Loading....' : errorResponse} />
      </Paper>
    </Container>
  );
};

export default SignupView;
