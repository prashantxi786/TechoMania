import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  Text,
  Link,
  Image,
  MenuList,
  useColorModeValue,
  Box,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { logout } from '../../Redux/Authentication/auth.action';
import { useDispatch, useSelector } from 'react-redux';

export const HoverMenu = ({ text, itemsArr }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(itemsArr);
  }, []);
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant='ghost'
        mx={1}
        py={[1, 2, 2]}
        px={4}
        w={{ base: '50px', md: '80px', lg: '110px' }}
        borderRadius={5}
        _hover={{
          color: '#013f7d',
          bg: useColorModeValue('gray.100', 'gray.700')
        }}
        aria-label='Courses'
        fontWeight='normal'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        color='white'
      >
        {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList
        zIndex='5'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        style={{}}
      >
        {items.map((item) => (
          <Link key={Math.random() + item}>
            <Text>{item.h}</Text>
            <Box>{}</Box>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export const HoverBrandsMenu = ({ text, itemsArr }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(itemsArr);
  }, []);

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant='ghost'
        mx={1}
        py={[1, 2, 2]}
        px={4}
        w={{ base: '50px', md: '80px', lg: '120px' }}
        borderRadius={5}
        _hover={{
          color: '#013f7d',
          bg: useColorModeValue('gray.100', 'gray.700')
        }}
        aria-label='Courses'
        fontWeight='normal'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        color='white'
      >
        {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList zIndex='5' onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Text>Featured Brands:</Text>

        <MenuList
          zIndex='5'
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          display='grid'
          gridTemplateColumns='repeat(4,1fr)'
        >
          {items.map((item) => (
            <Link key={Math.random()}>
              <Box _hover={{ border: '1px solid gray' }}>
                <Image
                  width={{ base: '30px', md: '70px', lg: '150px' }}
                  src={item}
                />
              </Box>
            </Link>
          ))}
        </MenuList>
      </MenuList>
    </Menu>
  );
};

export const HoverDropdown = ({ text, item1, item2, item3 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const state = useSelector((store) => store.authManager);
  const logoutfun = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <Menu isOpen={isOpen}>
      <Link href='/login'>
        <MenuButton
          variant='ghost'
          mx={1}
          py={[1, 2, 2]}
          w={{ base: '80px', md: '120px', lg: 'auto' }}
          fontSize={{ base: '6px', md: '9px', lg: '16px' }}
          px={4}
          borderRadius={5}
          _hover={{
            color: '#013f7d',
            bg: useColorModeValue('gray.100', 'gray.700')
          }}
          aria-label='Courses'
          fontWeight='normal'
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
      </Link>
      <MenuList
        align='center'
        display={'flex'}
        gap='2'
        flexDirection='column'
        color='white'
        zIndex='5'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {loggedUser ? (
          <Link href='#'>
            <Text borderRadius={'5'} p='1' bgColor='#013f72'>
              {item1}
            </Text>
          </Link>
        ) : (
          ''
        )}
        <Link href='/admin'>
          <Text borderRadius={'5'} p='1' bgColor='#013f72'>
            {item2}
          </Text>
        </Link>
        {loggedUser ? (
          <Button
            onClick={logoutfun}
            borderRadius={'5'}
            p='1'
            bgColor='#013f72'
          >
            {item3}
          </Button>
        ) : (
          ''
        )}
      </MenuList>
    </Menu>
  );
};
