import axios from 'axios';

export const getCartAPI = async () => {
  let response = await axios.get('https://techomania-mock-server.onrender.com/cart');
  return response.data;
};

export const deleteItemAPI = async (id) => {
  await axios.delete(`https://techomania-mock-server.onrender.com/cart/${id}`);
};
