import {
    useDisclosure,
    MenuItem,
    Menu ,
    MenuButton,Text,Link,Image,
    MenuList,useColorModeValue,Box
    
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {useState,useEffect} from "react"

export const HoverMenu=({text,itemsArr})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(itemsArr)
    },[])
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                w={{base:"50px",md:"80px",lg:"110px"}}
                borderRadius={5}
                _hover={{ color:"#013f7d",bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                color="white"
                
            >
                {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList zIndex="5" onMouseEnter={onOpen} onMouseLeave={onClose} style={{}}>
                {items.map((item)=>
                <Link key={Math.random()+item}>
                    <Text>{item.h}</Text>
                    <Box>{}</Box>
                </Link>)}
            </MenuList>
        </Menu>
    )
                    
}
export const HoverBrandsMenu=({text,itemsArr})=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(itemsArr)
    },[])
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                w={{base:"50px",md:"80px",lg:"120px"}}
                borderRadius={5}
                _hover={{ color:"#013f7d",bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                color="white"
                
            >
                {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList zIndex="5" onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Text>Featured Brands:</Text>

            <MenuList zIndex="5" onMouseEnter={onOpen} onMouseLeave={onClose} display="grid" gridTemplateColumns='repeat(4,1fr)'>
                {items.map((item)=>
                <Link key={Math.random()} ><Box _hover={{border:"1px solid gray"}}><Image width={{lg:"150px"}} src={item}/></Box></Link>)}
                
            </MenuList>
            </MenuList>
        </Menu>
    )
}