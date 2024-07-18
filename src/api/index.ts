import axios from 'axios';

const baseApiURL = import.meta.env.BASE_API_URL;

export const authenticate = (email: string, password: string) => {
  const url = `${baseApiURL}/authenticate`;
  const data = { email, password };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post(url, data, config);
};

export const register = (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  const url = `${baseApiURL}/users/register`;
  const data = { email, firstName, lastName, password };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.post(url, data, config);
};
