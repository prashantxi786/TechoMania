import {
    useDisclosure,
    MenuItem,
    Menu ,
    MenuButton,
    MenuList,useColorModeValue,
    
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {useState,useEffect} from "react"
export default function HoverMenu({text,itemsArr}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [items,setItems]=useState([])
    // useEffect(()=>{
    //     setItems(itemsArr)
    // },[])
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                w={{base:"50px",md:"90px",lg:"120px"}}
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
            <MenuList zIndex="5" onMouseEnter={onOpen} onMouseLeave={onClose} style={{fontWeight:"bold", display:"grid",gridTemplateColumns:"200px 200px 200px",}}>
                {items.map((item)=>
                <MenuItem  key={Math.random()+item}>{item}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}