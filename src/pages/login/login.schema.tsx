import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('should be in email format eg: abc@mail.com')
    .required('Email is Required'),
  password: Yup.string().required('Please Enter your password')
});
