// TODO: HERE WE ARE MAKING OUR API REQUESTS.
import axios from "axios";
export const products_success_request = async (keyVal) => {
  const data = await axios.get(`http://localhost:8080/${keyVal}`);
  return data.data;
};

//TODO: DELETE THE ITEM FROM THE DATABASE

export const products_delete_request = async ({ id, apikey }) => {
  const data = await axios.delete(`http://localhost:8080/${apikey}/${id}`);
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
  const data = await axios.patch(`http://localhost:8080/${apikey}/${id}`, obj);
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
  const data = await axios.patch(`http://localhost:8080/${apikey}/${id}`, obj);
  return data.data;
};
