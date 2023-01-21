import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Hide,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Cart = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <Box w={{ base: '95%', md: '92%' }} m='auto'>
        <Hide below='lg'>
          <NavLink to='/'>
            <Box display='inline-block'>
              <Flex
                mt='6'
                gap='2'
                color='#06c'
                align='center'
                justify='center'
                _hover={{ textDecor: 'underline' }}
              >
                <AiOutlineLeft boxSize='6' />
                <Text fontSize='sm'>Continue Shopping</Text>
              </Flex>
            </Box>
          </NavLink>
        </Hide>
        <Heading
          borderBottom='1px solid grey'
          mt='8'
          pb='4'
          fontWeight='normal'
          size={{ base: '2xl' }}
        >
          Shopping Cart
        </Heading>

        <Heading fontWeight='normal' mt='8' size={{ base: 'xl' }}>
          Shopping Cart is Empty
        </Heading>

        <Stack
          align='flex-start'
          justify='flex-start'
          direction={{ base: 'column', md: 'row' }}
          gap='8'
          mt='6'
        >
          {/* <Box w='100%'></Box> */}
          <Box w='100%'>
            <Stack
              h='400px'
              border={{ base: 'none', md: '10px solid' }}
              borderColor={{ base: 'none', md: 'blackAlpha.100' }}
              justify='center'
              align='center'
            >
              <NavLink to='/'>
                <Button
                  color='white'
                  px={{ base: '24', md: '20', lg: '24' }}
                  py={{ base: '0', md: '8' }}
                  fontSize={{ base: 'md', md: 'xl' }}
                  _focus={{ bg: '#2787e6' }}
                  _hover={{ bg: '#2787e6' }}
                  _active={{ bg: '#2787e6' }}
                  bg='#0060bf'
                >
                  Continue Shopping
                </Button>
              </NavLink>
            </Stack>
          </Box>
          <Box w={{ base: '100%', md: '50%', lg: '35%' }}>
            <Box mt='16'>
              <Heading size='md' fontWeight='normal' textTransform='capitalize'>
                We're here for you
              </Heading>
              <Text mt='1' fontWeight='normal' fontSize='sm' color='gray.600'>
                We want to remove the stress of buying online.
              </Text>

              <Stack
                mt='2'
                color='#06c'
                fontSize='sm'
                direction='column'
                align='flex-start'
                justify='flex-start'
              >
                <Link
                  _hover={{ textDecor: 'none' }}
                  href='https://www.adorama.com/help/shippingAndDelivery'
                >
                  Common questions about shipping
                </Link>
                <Link
                  _hover={{ textDecor: 'none' }}
                  href='https://www.adorama.com/help/returnPolicy'
                >
                  View our Return Policy
                </Link>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Cart;
