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

const initialStateOfAddItem = {
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
  switch (type) {
    case "title": {
      return { ...state, trackEvent_2: (state.trackEvent_2 = payload) };
    }
    case "title": {
      return { ...state, trackEvent_2: (state.trackEvent_2 = payload) };
    }
    case "price": {
      return { ...state, your_price: (state.your_price = Number(payload)) };
    }
    case "reg price": {
      return { ...state, price_reg_has_sibs: (state.price_reg_has_sibs = `$${payload}`) };
    }

    default: {
      return state;
    }
  }
};

const AdProducts_AddItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(
    AdProducts_AddItem_Reducer,
    initialStateOfAddItem
  );
  console.log("state:", state);

  const handleGetValues = (e) => {
    console.log(e.target.name);
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  return (
    <>
      <Button onClick={onOpen}>
        <MdAddCircle />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
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
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdProducts_AddItem;
