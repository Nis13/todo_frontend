import * as Yup from "yup";

export const addSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});
