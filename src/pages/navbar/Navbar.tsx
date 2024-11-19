import { NavBarView } from './NavbarView';
import { useNavbar } from './useNavbar';

const Navbar = () => {
  const logic = useNavbar();
  return <NavBarView {...logic} />;
};

export default Navbar;
