import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63e7a515cbdc5658737ae834.mockapi.io/api',
});

export const getAllUsers = async () => {
  const { data } = await instance.get('/users', {});
  return data;
};
