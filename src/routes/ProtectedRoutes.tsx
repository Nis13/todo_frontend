import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { getToken } from "../utils/token";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated && !getToken()) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Outlet />;
    </>
  );
};

export default ProtectedRoute;
