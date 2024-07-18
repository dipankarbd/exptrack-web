import { Navigate } from 'react-router-dom';

import { LoginPage } from '../components/pages/login';

interface LoginProps {
  redirectPath: string;
}

const Login: React.FC<LoginProps> = ({ redirectPath }) => {
  const authToken = localStorage.getItem('auth-token');

  if (authToken) {
    return <Navigate to={redirectPath} />;
  }

  return <LoginPage redirectPath={redirectPath} />;
};

export default Login;
