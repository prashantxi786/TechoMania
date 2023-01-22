import React, { useReducer } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  Button,
  Select,
} from "@chakra-ui/react";
import { keyArrayForSearch } from "./AdProductsNavbar";
import { MdAddCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { product_addItem_action } from "../../../Redux/Admin/Products/ad_products.actions";

const initialStateOfAddItem = {
  id: Date.now(),
  search_queries: [],
  category: "",
  api_key: "",
  productImage_src: "",
  trackEvent_2: "",
  review_stars: "",
  review_count: "",
  review_count_2: "reviews",
  "product-sku_2": "",
  product_sku_4: "",
  price_label: "Our Price",
  your_price: "",
  vip_shipping: "VIP",
  vip_shipping_2: "PRO",
  promo_financing_rate: "",
  promo_financing_rate_2: "",
  popup_2: "5% OFF Every Day with TechoMania Credit Card",
  popup_3: "†",
  popup_4: "Get Reward Points",
  buy_section: "",
  buy_section_2: "",
  buy_section_3: "",
  buy_section_4: "",
  buy_section_5: "",
  buy_section_6: "",
  buy_section_7: "",
  buy_section_8: "",
  buy_section_9: "",
  buy_section_10: "",
  buy_section_11: "",
  buy_section_12: "",
  price_reg_has_sibs: "",
  price_reg_has_sibs_2: "List Price:",
};
//TODO: THIS IS THE COMPONENT BASES REDUCER

const AdProducts_AddItem_Reducer = (
  state = initialStateOfAddItem,
  { type, payload }
) => {
  console.log("payload:", payload);
  switch (type) {
    case "select": {
      return { ...state, category: payload.category, api_key: payload.api_key };
    }
    case "title": {
      return { ...state, trackEvent_2: (state.trackEvent_2 = payload) };
    }
    case "price": {
      return { ...state, your_price: (state.your_price = Number(payload)) };
    }
    case "reg price": {
      return {
        ...state,
        price_reg_has_sibs: (state.price_reg_has_sibs = `$${payload}`),
      };
    }
    case "pfr": {
      return {
        ...state,
        promo_financing_rate: (state.promo_financing_rate = Number(payload)),
      };
    }
    case "pfrMonth": {
      return {
        ...state,
        promo_financing_rate_2: (state.promo_financing_rate_2 = payload),
      };
    }
    case "search": {
      return { ...state, search_queries: payload };
    }
    case "buyOne": {
      return { ...state, buy_section: (state.buy_section = payload) };
    }
    case "buyTwo": {
      return { ...state, buy_section_2: (state.buy_section_2 = payload) };
    }
    case "buyThree": {
      return { ...state, buy_section_3: (state.buy_section_3 = payload) };
    }
    case "buyFour": {
      return { ...state, buy_section_4: (state.buy_section_4 = payload) };
    }
    case "buyFive": {
      return { ...state, buy_section_5: (state.buy_section_5 = payload) };
    }
    case "buySix": {
      return { ...state, buy_section_6: (state.buy_section_6 = payload) };
    }
    case "buySeven": {
      return { ...state, buy_section_7: (state.buy_section_7 = payload) };
    }
    case "buyEight": {
      return { ...state, buy_section_8: (state.buy_section_8 = payload) };
    }
    case "buyNine": {
      return { ...state, buy_section_9: (state.buy_section_9 = payload) };
    }
    case "buyTen": {
      return { ...state, buy_section_10: (state.buy_section_10 = payload) };
    }
    case "buyEleven": {
      return { ...state, buy_section_11: (state.buy_section_11 = payload) };
    }
    case "buyTwelve": {
      return { ...state, buy_section_12: (state.buy_section_12 = payload) };
    }
    default: {
      return state;
    }
  }
};

const AdProducts_AddItem = () => {
  const Dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(
    AdProducts_AddItem_Reducer,
    initialStateOfAddItem
  );
  console.log("hello");
  const handleGetValues = (e) => {
    if (e.target.name === "select") {
      dispatch({
        type: e.target.name,
        payload: {
          api_key: e.target.value,
          category: e.target.value.split("-").join(" ").toLowerCase(),
        },
      });
      return;
    }
    if (e.target.name === "search") {
      dispatch({ type: e.target.name, payload: e.target.value.split(",") });
      return;
    }
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  return (
    <>
      <Button onClick={onOpen}>
        <MdAddCircle  color="green"/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            gap="20px"
            display="flex"
            flexDirection="column"
            onChange={handleGetValues}
          >
            <Select placeholder="Select Category" w="180px" name="select">
              {keyArrayForSearch.map((ele, i) => {
                return (
                  <option
                    style={{ backgroundColor: "#0e101a" }}
                    key={i}
                    value={ele[1]}
                  >
                    {ele[0]}
                  </option>
                );
              })}
            </Select>

            <Input placeholder="Enter Title" name="title" />
            <Input placeholder="Enter Price" name="price" />
            <Input placeholder="Enter Reg Price" name="reg price" />
            <Input placeholder="Enter Promo Financing Rate" name="pfr" />
            <Input
              placeholder='Enter Promo Financing Rate Per M/Y. (ex: "mo/")'
              name="pfrMonth"
            />
            <Input placeholder="Enter Search Queries" name="search" />
            <Input placeholder="buy section" name="buyOne" />
            <Input placeholder="buy section 2" name="buyTwo" />
            <Input placeholder="buy section 3" name="buyThree" />
            <Input placeholder="buy section 4" name="buyFour" />
            <Input placeholder="buy section 5" name="buyFive" />
            <Input placeholder="buy section 6" name="buySix" />
            <Input placeholder="buy section 7" name="buySeven" />
            <Input placeholder="buy section 8" name="buyEight" />
            <Input placeholder="buy section 9" name="buyNine" />
            <Input placeholder="buy section 10" name="buyTen" />
            <Input placeholder="buy section 11" name="buyEleven" />
            <Input placeholder="buy section 12" name="buyTwelve" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                Dispatch(product_addItem_action(state));
                onClose(onClose)
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdProducts_AddItem;
