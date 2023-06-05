import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63e7a515cbdc5658737ae834.mockapi.io/api',
});

export const getAllUsers = async page => {
  const { data } = await instance.get('/users', {
    params: {
      limit: 3,
      page,
    },
  });
  return data;
};

export const allUsers = async () => {
  const { data } = await instance.get('/users', {});
  return data.length;
};
