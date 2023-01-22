import axios from 'axios';

export const getProductsAPI = async () => {
  let response = await axios.get(
    'https://techomania-mock-server.onrender.com/Cameras'
  );
  return response.data;
};

export const getCartItemsAPI = async () => {
  let response = await axios.get(
    'https://techomania-mock-server.onrender.com/cart'
  );
  return response.data;
};

export const addToCartAPI = async (newItem) => {
  return await axios.post(
    'https://techomania-mock-server.onrender.com/cart',
    newItem
  );
};

export const getSingleProductAPI = async (id) => {
  let response = await axios.get(
    `https://techomania-mock-server.onrender.com/Cameras/${id}`
  );
  return response.data;
};
