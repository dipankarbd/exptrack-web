import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { RootContainer } from '../components/layouts/root-container';
import { Sidebar } from '../components/modules/sidebar';

const Root = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/login');
  };

  return (
    <RootContainer
      sidebar={<Sidebar onLogout={handleLogout} />}
      content={<Outlet />}
    />
  );
};

export default Root;
