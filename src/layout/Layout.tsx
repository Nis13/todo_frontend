import Navbar from '../pages/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
