import "../../../style/Ad_Products.css";
import React from "react";
import {
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { product_success_action } from "../../../Redux/Admin/Products/ad_products.actions";
import { BsSearch } from "react-icons/bs";


  //TODO: THIS ARRAY FOR SEARCH FUNCTIONALITY
  export const keyArrayForSearch = [
    ["Cameras","Cameras"],
    ["Tripods","Tripods"],
    ["SLR Cameras","SLR-Cameras"],
    ["Camera Filters", "Neutral-Density-Filters"],
    ["Memory Cards", "Memory-Cards"],
    ["Teleconverters", "Teleconverters"],
    ["Lens Hoods", "Lens-Hoods"],
    ["Lens Cap", "Lens-Caps"],
    ["Camera Batteries", "Camera-Batteries"],
    ["Light Meters", "Light-Meters"],
    ["Mirrorless Lenses", "Mirrorless-Lenses"],
    ["Digital & Shoot Cameras", "Digital-Point-and-Shoot-Cameras"],
    ["SLR Lenses", "SLR-Lenses"],
    ["Protective Filters", "Protective-Filters-UV-and-Clear"],
    ["Tripod Heads", "Tripod-Heads"],
    ["Custom Photo Products", "Custom-Photo-Products"],
  ];


const AdProductsNavbar = ({handleLocalProductsSearch}) => {
  const dispatch = useDispatch();
  const keyArray = [
    ["Teleconverters", "Teleconverters"],
    ["Lens Hoods", "Lens-Hoods"],
    ["Lens Cap", "Lens-Caps"],
    ["Camera Batteries", "Camera-Batteries"],
    ["Light Meters", "Light-Meters"],
    ["Mirrorless Lenses", "Mirrorless-Lenses"],
    ["Digital & Shoot Cameras", "Digital-Point-and-Shoot-Cameras"],
    ["SLR Lenses", "SLR-Lenses"],
    ["Protective Filters", "Protective-Filters-UV-and-Clear"],
    ["Tripod Heads", "Tripod-Heads"],
    ["Custom Photo Products", "Custom-Photo-Products"],
  ];

  //TODO: THIS ARRAY FOR SEARCH FUNCTIONALITY
  // export const keyArrayForSearch = [
  //   ["Cameras","Cameras"],
  //   ["Tripods","Tripods"],
  //   ["SLR Cameras","SLR-Cameras"],
  //   ["Camera Filters", "Neutral-Density-Filters"],
  //   ["Memory Cards", "Memory-Cards"],
  //   ["Teleconverters", "Teleconverters"],
  //   ["Lens Hoods", "Lens-Hoods"],
  //   ["Lens Cap", "Lens-Caps"],
  //   ["Camera Batteries", "Camera-Batteries"],
  //   ["Light Meters", "Light-Meters"],
  //   ["Mirrorless Lenses", "Mirrorless-Lenses"],
  //   ["Digital & Shoot Cameras", "Digital-Point-and-Shoot-Cameras"],
  //   ["SLR Lenses", "SLR-Lenses"],
  //   ["Protective Filters", "Protective-Filters-UV-and-Clear"],
  //   ["Tripod Heads", "Tripod-Heads"],
  //   ["Custom Photo Products", "Custom-Photo-Products"],
  // ];

  const handleGetRequest = (e) => {
    // console.log(e.target.innerText);
    console.log(e);
    dispatch(product_success_action(e));
  };

  return (
    <Box className="Ad_Products_Navbar_Container">
      <Box>
        <Text>Products</Text>
      </Box>
      <Box>
        <Button
          onClick={() => handleGetRequest("Cameras")}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            color: "cyan",
          }}
        >
          Cameras
        </Button>
        <Button
          onClick={() => handleGetRequest("Tripods")}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            color: "cyan",
          }}
        >
          Tripods
        </Button>
        <Button
          onClick={() => handleGetRequest("SLR-Cameras")}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            color: "cyan",
          }}
        >
          SLR Cameras
        </Button>
        <Button
          onClick={() => handleGetRequest("Neutral-Density-Filters")}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            color: "cyan",
          }}
        >
          Filters
        </Button>
        <Button
          onClick={() => handleGetRequest("Memory-Cards")}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            color: "cyan",
          }}
        >
          Memory Cards
        </Button>

        <Button p="10px 0px" fontWeight="600">
          <Select
            placeholder="More"
            width="100px"
            onChange={(e) => handleGetRequest(e.target.value)}
          >
            {keyArray.map((ele, i) => {
              return (
                <option key={i} value={ele[1]}>
                  {ele[0]}
                </option>
              );
            })}
          </Select>
        </Button>
        <Popover>
          <PopoverTrigger>
            <Button>
              <BsSearch />
            </Button>
          </PopoverTrigger>
          <PopoverContent  marginRight="25px"  backgroundColor="#0e101a" >
            <PopoverArrow marginLeft="13px" backgroundColor="#0e101a"/>
            <PopoverCloseButton />
            <PopoverHeader  backgroundColor="#0e101a" borderRadius="10px">
              <Select placeholder="Choose Category" w="180px" onChange={(e)=>dispatch(product_success_action(e.target.value))} >
                {
                  keyArrayForSearch.map((ele, i) => {
                    return (
                      <option   style={{backgroundColor:"#0e101a"}} key={i} value={ele[1]}>
                        {ele[0]}
                      </option>
                    );
                  })
                }
              </Select>
            </PopoverHeader>
            <PopoverBody backgroundColor="#0e101a" borderRadius="10px">
              <Input placeholder="Search here..." onChange={handleLocalProductsSearch}/>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};

export default AdProductsNavbar;
