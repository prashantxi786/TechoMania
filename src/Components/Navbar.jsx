import { Box,Flex,Link,Text,Input } from '@chakra-ui/react'
import React from 'react'
import { BsTelephone,BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import {RxPerson} from "react-icons/rx"
import HoverMenu from './HomepageComponents/Menu'; 
const Navbar = () => {
  return (
    <div>
      {/* topbar */}
        <Box h={"30px"} bgColor="#011f42"/>
        {/* 2nd bar */}
        <Flex fontWeight="500" color="#004387" justifyContent={'space-between'} alignItems={'center'} h={"31px"}>
            <Flex ml={{base:"10px",md:"30px",lg:"70px"}} width={{base:"200px",md:"300px",lg:"400px"}} fontSize={{base:"6px",md:"8px",lg:"12px"}}  justifyContent={'space-between'}>
                <Text>ADORAMA BUSINESS</Text>
                <Text>ADORAMA RENTALS</Text>
                <Text>PRINTIQUE</Text>
                <Text>OUR BLOG</Text>
            </Flex>
            <Flex mr={{base:"10px",md:"30px",lg:"70px"}} width={{base:"100px",md:"150px",lg:"230px"}}justifyContent={'space-between'} fontSize={{base:"6px",md:"8px",lg:"12px"}}  >
              <Flex align="center" gap="1"><BsTelephone/>800.223.2500</Flex>
              <Flex width={{base:"30px",md:"50px",lg:"80px"}} align="center" gap="1"><TbMessageCircle2/>Live Chat</Flex>
              <Flex align="center" gap="1"><BsInfoCircle/>Help</Flex>
            </Flex>
        </Flex>
        {/* Logo Bar */}
        <Flex justifyContent={"space-between"} height={{base:"40px",md:"60px",lg:"74px"}} borderBottom="1px solid gray" bgColor={'#013f7d'}>
          {/* Left of logo bar */}
          <Link href="/" _hover={{fontDecoration:"none"}} ml={{base:"20px",md:"50px",lg:"100"}} color="white" fontFamily="Impact" fontSize={{base:"20px",md:"40px",lg:"50px"}} w={{base:"100px",md:"205px",lg:"255px"}} h={{base:"10px",md:"20px",lg:"40px"}}>TechoMania</Link>
          {/* Right of logo Bar */}
          <Flex mr={{base:"10px",md:"20px",lg:"50px"}} alignItems="center" color="white" justifyContent={"space-between"}>
            <Input bgColor={"white"} borderRadius="30" placeholder={"Search"} width={{base:"100px",md:"200px",lg:"455px"}} height={{base:"10px",md:"15px",lg:"32px"}}/>
            <Flex width={{base:"",md:"",lg:""}} alignItems="center" justifyContent={"space-between"}>
            <RxPerson color='white' size={"25"}/>
              <Box>
                <Text fontSize={{base:"5px",md:"8px",lg:"10"}} w="40px">Sign in</Text>
                <Text fontWeight={"500"} fontSize={{base:"6px",md:"8px",lg:"12px"}}  w={{base:"20px",md:"45px",lg:"70px"}}>My Account</Text>
              </Box>
              <FiShoppingCart  size={"25"}/>
            </Flex>
          </Flex>
        </Flex>
        <Flex fontSize={{base:"6px",md:"8px",lg:"15px"}} justifyContent={"space-around"} alignItems={"center"} height="43px" bgColor={'#013f7d'}>
          <Flex>
            <HoverMenu text={"Products"}/>
            <HoverMenu text={"Brands"}/>
            <HoverMenu text={"Used"}/>
            <HoverMenu text={"Deals"}/>
          </Flex>
          <Flex  gap="7" color="white">
            <Link w={{base:"50px",md:"70px",lg:"110px"}}>Deal of the Day</Link>
            <Link w={{base:"50px",md:"80px",lg:"150px"}}>Adorama Credit Card</Link>
            <Link w={{base:"40px",md:"60px",lg:"100px"}}>VIP Rewards</Link>
            <Link w={{base:"30px",md:"45px",lg:"70px"}}>Gift Cards</Link>
            <Link w={{base:"35px",md:"45px",lg:"70px"}}>Students</Link>
            <Link w={{base:"60px",md:"110px",lg:"165px"}}>#CreateNoMatterWhat</Link>
          </Flex>
        </Flex>

    </div>
  )
}

export default Navbar