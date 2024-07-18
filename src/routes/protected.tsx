import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  redirectPath: string;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ redirectPath }) => {
  const authToken = localStorage.getItem('auth-token');

  if (authToken) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath} />;
};

export default ProtectedRoutes;
