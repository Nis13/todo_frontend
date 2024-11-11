import useLogin from "./useLogin";
import { LoginView } from "./LoginView";

const Login = () => {
  const logic = useLogin();
  return <LoginView {...logic} />;
};

export default Login;
