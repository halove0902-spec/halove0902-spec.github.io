import Header from '../../components/Header';
import './index.css';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
