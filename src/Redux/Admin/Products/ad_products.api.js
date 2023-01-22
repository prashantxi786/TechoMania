// TODO: HERE WE ARE MAKING OUR API REQUESTS.
import axios from "axios";
export const products_success_request = async (keyVal) => {
  const data = await axios.get(`https://techomania-mock-server.onrender.com/${keyVal}`);
  return data.data;
};

//TODO: DELETE THE ITEM FROM THE DATABASE

export const products_delete_request = async ({ id, apikey }) => {
  const data = await axios.delete(`https://techomania-mock-server.onrender.com/${apikey}/${id}`);
  return data.data;
};

//TODO: EDIT THE ITEM

export const products_update_request = async ({
  id,
  apikey,
  newValue,
  arg2,
}) => {
  let obj;
  if (arg2 == "trackEvent_2") {
    obj = { trackEvent_2: newValue };
  } else {
    obj = { your_price: Number(newValue) };
  }
  const data = await axios.patch(`https://techomania-mock-server.onrender.com/${apikey}/${id}`, obj);
  return data.data;
};



//TODO: EDIT THE ITEM 2.0
export const products_bunch_update_request = async ({
  id,
  trackEvent_2,
  your_price,
  apikey,
}) => {
  let obj = {
    trackEvent_2,
    your_price,
  };
  const data = await axios.patch(`https://techomania-mock-server.onrender.com/${apikey}/${id}`, obj);
  return data.data;
};

//TODO: ADD THE NEW ITEM
export const products_addItem_request = async (cred) =>{
  console.log('cred:', cred)
  const data = await axios.post(`https://techomania-mock-server.onrender.com/${cred.api_key}`, cred);
  return data.data;
}




