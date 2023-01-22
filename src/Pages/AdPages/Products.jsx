import "../../style/Ad_Products.css";
import { Box, Button, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdProductsNavbar from "../../Components/Admin/AdComponents/AdProductsNavbar";
import { useSelector } from "react-redux";
import AdProducts_Card from "../../Components/Admin/AdComponents/AdProducts_Card";
import AdProducts_Loading from "../../Components/Admin/AdComponents/AdProducts_Loading";
import Ad_Welcome from "../../Components/Admin/AdComponents/Ad_Welcome";

const Products = () => {
  const { ad_products_data, loading } = useSelector(
    (store) => store.adProductsManager
  );
  const [localStateData, setLocalStateData] = useState(ad_products_data);
  console.log("localStateData:", localStateData);
  console.log("ad_products_data:", ad_products_data);

  //TODO: LOCAL SEARCH FUNCTION
  const handleLocalProductsSearchByDebounce = (args) => {
    console.log("args:", args.target.value);
    let edgeCase = args.target.value;
    if (edgeCase.length < 2) {
      setLocalStateData([]);
      return;
    }
    let newData = ad_products_data.filter((ele) => {
      const title = ele.trackEvent_2;
      if (title.includes(args.target.value)) {
        console.log("Yes");
        return ele;
      }
    });
    setLocalStateData(newData);
  };

  useEffect(() => {}, [localStateData, ad_products_data]);

  //TODO: APPLY DEBOUNCING
  const debounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const handleLocalProductsSearch = debounce((args) =>
    handleLocalProductsSearchByDebounce(args)
  );

  // if (loading) return <AdProducts_Loading />;
  return (
    <Box className="Ad_Products_Container">
      <AdProductsNavbar handleLocalProductsSearch={handleLocalProductsSearch} />





      {loading ? (
        <AdProducts_Loading />
      ) : (
        <Box>
          {localStateData.length !== 0
            ? localStateData.map((ele) => {
                return (
                  <AdProducts_Card
                    key={ele.id}
                    id={ele.id}
                    title={ele.trackEvent_2}
                    imageSrc={ele.productImage_src}
                    price={ele.your_price}
                    category={ele.category}
                    apikey={ele.api_key}
                  />
                );
              })
            : ad_products_data.map((ele) => {
                return (
                  <AdProducts_Card
                    key={ele.id}
                    id={ele.id}
                    title={ele.trackEvent_2}
                    imageSrc={ele.productImage_src}
                    price={ele.your_price}
                    category={ele.category}
                    apikey={ele.api_key}
                  />
                );
              })}
        </Box>
      )}
    </Box>
  );
};

export default Products;
