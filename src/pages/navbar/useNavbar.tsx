import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/authSlice";

export const useNavbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const pages = [
    { name: "Home", link: "/home", isVisible: isAuthenticated },
    { name: "ToDos", link: "/todos", isVisible: isAuthenticated },
    { name: "Signup", link: "signup", isVisible: !isAuthenticated },
    { name: "login", link: "login", isVisible: !isAuthenticated },
  ];

  return { pages, handleLogout, isAuthenticated };
};
