import "../../../style/Ad_Products_Card.css";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {product_delete_action, product_update_action} from "../../../Redux/Admin/Products/ad_products.actions"



const AdProducts_Card = ({ id, title, price, imageSrc, category, apikey }) => {
  const dispatch = useDispatch();

  const handleEdit = (arg1,arg2) =>{
    const newValue = window.prompt(`Enter you new ${arg1}`)
    if(newValue==""){
      alert(`Please enter your ${arg1}`)
      newValue = window.prompt(`Enter you new ${arg1}`)
      console.log('newValue:', newValue)
      // return;
    }
    console.log(newValue)
    dispatch(product_update_action({id,newValue,arg2,apikey}))
  }

  return (
    <Box className="Ad_Products_Card_Container">
      <Box>
        <Image src={imageSrc} alt={id} />
      </Box>
      <Box>
        <Tooltip hasArrow label={title} bg="gray.300" color="black">
          <Text cursor="pointer" isTruncated onDoubleClick={()=>handleEdit("title","trackEvent_2")}>Title: {title}</Text>
        </Tooltip>
        <Text cursor="pointer" onDoubleClick={()=>handleEdit("price","your_price")}>Price: {price}</Text>
      </Box>
      <Box>
        <Button>View</Button>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={()=>dispatch(product_delete_action({id,apikey}))}>Delete</Button>
      </Box>
    </Box>
  );
};

export default AdProducts_Card;
