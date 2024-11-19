import * as Yup from 'yup';

export const updateSchema = Yup.object().shape({
  title: Yup.string().required('Title is required')
});
