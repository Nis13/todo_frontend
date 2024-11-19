import { SignupFields } from "../../pages/signup/signup.types";
import api from "../api";

const useSignupApi = async (userData: SignupFields) => {
  const response = await api.post("/auth/signup", userData);
  return response;
};

export default useSignupApi;
