import "../../style/Ad_Products.css";
import { Box, Button, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import AdProductsNavbar from "../../Components/Admin/AdComponents/AdProductsNavbar";
import { useSelector } from "react-redux";
import AdProducts_Card from "../../Components/Admin/AdComponents/AdProducts_Card";

const Products = () => {
  const { ad_products_data } = useSelector((store) => store.adProductsManager);
  //TODO: LOCAL SEARCH
  const [localStateData, setLocalStateData] = useState(ad_products_data);

  //TODO: LOCAL SEARCH FUNCTION
  const handleLocalProductsSearch = (e) => {

    localStateData.map((ele)=>{
      const title = ele.trackEvent_2
      // console.log('title:', title)
      if(title.includes(e.target.value)){
        console.log(title)
      }
    })
    
  };

  //TODO: APPLY DEBOUNCING 
  


  console.log("localStateData:", localStateData);

  return (
    <Box className="Ad_Products_Container">
      <AdProductsNavbar handleLocalProductsSearch={handleLocalProductsSearch} />
      <Box>
        {ad_products_data.map((ele) => {
          return (
            <AdProducts_Card
              key={ele.id}
              id={ele.id}
              title={ele.trackEvent_2}
              imageSrc={ele.productImage_src}
              price={ele.your_price}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Products;
