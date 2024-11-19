import { useSignup } from './useSignup';
import SignupView from './SignupView';

const Signup = () => {
  const logic = useSignup();
  return <SignupView {...logic} />;
};

export default Signup;
