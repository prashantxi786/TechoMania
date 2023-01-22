import "../../../style/Ad_Products_Card.css";
import { Box, Button, Image, Input, Text, useToast } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  product_bunch_update_action,
  product_delete_action,
  product_update_action,
} from "../../../Redux/Admin/Products/ad_products.actions";
import { useRef } from "react";
import {MdDeleteSweep,MdModeEditOutline} from "react-icons/md"
import AdProducts_AddItem from "./AdProducts_AddItem";

const AdProducts_Card = ({ id, title, price, imageSrc, category, apikey }) => {
  const [hideInputBox, setHideInputBox] = useState(false);
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const priceInput = useRef(null);
  const toast = useToast();




  const handleEdit = (arg1, arg2) => {
    let windowText = "";
    if (arg1 == "price") {
      windowText = price;
    } else {
      windowText = title;
    }
    const newValue = window.prompt(`Enter you new ${arg1}`, windowText);
    if (newValue == "") {
      return toast({
        title: `Please enter your new ${arg1}`,
        status: "error",
        isClosable: true,
      });
    }
    dispatch(product_update_action({ id, newValue, arg2, apikey }));
    return toast({
      title: `Your ${arg1} has been successfully updated`,
      status: "success",
      isClosable: true,
    });
  };

  //TODO: THIS FUNCTION FOR EDIT THE FIELD THE FOMR OF BUNCH
  const handleBunchEdit = (e) =>{
      // if(titleInput.current.value=="" || priceInput.current.value=="")
      //   {
      //         setHideInputBox(false)
      //         return toast({
      //         title: `Both the input fields have to be filled for bunch update, Or try to double click on perticular text for single update.`,
      //         status: "error",
      //         isClosable: true,
      //         duration: 15000
      //       });
      //   }


      // TODO: DON'T HAVE TIME TO IMPLIMENT FORM FEATURE
      // if(priceInput.current.value=="")
      //   {
      //       priceValue=price;
      //   }
      if(e.key=="Enter"){

        if(titleInput.current.value=="" || priceInput.current.value=="")
        {
              setHideInputBox(false)
              return toast({
              title: `Both the input fields have to be filled for bunch update, Or try to double click on perticular text for single update.`,
              status: "error",
              isClosable: true,
              duration: 15000
            });
        }

        let obj = {
          id:id,
          trackEvent_2:titleInput.current.value,
          your_price:priceInput.current.value,
          apikey:apikey
        }

        dispatch(product_bunch_update_action(obj))
        setHideInputBox(false)
      }
  }



  return (
    <Box className="Ad_Products_Card_Container">
      <Box>
        <Image src={imageSrc} alt={id} />
      </Box>
      <Box>
        <Tooltip hasArrow label={title} bg="gray.300" color="black">


          <Text
            cursor="pointer"
            isTruncated
            onDoubleClick={() => handleEdit("title", "trackEvent_2")}
            display={hideInputBox ? "none" : "block"}
            
          >
            Title: {title}
          </Text>
        </Tooltip>
        <Input placeholder="Enter your new titile" display={hideInputBox ? "block" : "none"} onKeyPress={handleBunchEdit} ref={titleInput}/>


        <Text
          cursor="pointer"
          onDoubleClick={() => handleEdit("price", "your_price")}
          display={hideInputBox ? "none" : "block"}
        >
          Price: 💲{price}
        </Text>
        <Input  placeholder="Enter your new price" display={hideInputBox ? "block" : "none"} onKeyPress={handleBunchEdit} ref={priceInput}/>
      </Box>
      <Box>
        <Button onClick={() => setHideInputBox(!hideInputBox)}><MdModeEditOutline color="yellow"/></Button>
        <Button
          onClick={() => {
            dispatch(product_delete_action({ id, apikey }));
            return toast({
              title: "Your item has been successfully deleted from server",
              status: "success",
              isClosable: true,
            });
          }}
        >
          <MdDeleteSweep color="red"/>
        </Button>
        <AdProducts_AddItem/>
      </Box>
    </Box>
  );
};

export default AdProducts_Card;
