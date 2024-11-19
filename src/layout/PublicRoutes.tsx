import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

const PublicRoutes = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/todos" replace={true} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoutes;
