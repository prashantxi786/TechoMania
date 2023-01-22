import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../Redux/Cart/cart.action';
import { SingleCartPage } from '../Components/CartComponent/SingleCartPage';

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, error, cartItems } = useSelector(
    (store) => store.cartManager
  );

  useEffect(() => {
    dispatch(getCartData());
    document.title = 'My Cart: TechoMania';
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      <Box w={{ base: '95%', md: '92%' }} m='auto'>
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

        <Heading
          borderBottom='1px solid grey'
          mt='8'
          pb='6'
          fontWeight={{ base: 'normal', sm: 'medium', lg: 'normal' }}
          size={{ base: 'lg', sm: 'xl', lg: '2xl' }}
        >
          Shopping Cart
        </Heading>

        {cartItems.length === 0 ? (
          <Heading
            fontWeight='normal'
            mt={{ base: '6', md: '8' }}
            size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
          >
            Shopping Cart is Empty
          </Heading>
        ) : (
          <Flex
            mt={{ base: '6', md: '8' }}
            justify='flex-start'
            align={{ base: 'center', xl: 'flex-end' }}
            gap='2'
          >
            <Heading
              fontWeight='normal'
              size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
            >
              Ship - Worldwide Express
            </Heading>
            <Text
              fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
              color='blackAlpha.700'
            >
              (
              {`${cartItems.length} ${cartItems.length > 1 ? 'items' : 'item'}`}
              )
            </Text>
          </Flex>
        )}

        <Stack
          align='flex-start'
          justify='flex-start'
          direction={{ base: 'column', md: 'row' }}
          borderBottom={{ base: 'none', md: '10px solid' }}
          borderColor={{ base: 'none', md: 'blackAlpha.100' }}
          gap='8'
          my='6'
        >
          {cartItems.length !== 0 && (
            <Box w='100%'>
              {cartItems.map((item) => (
                <SingleCartPage key={item.id} {...item} />
              ))}
            </Box>
          )}

          {cartItems.length === 0 && (
            <Box w={{ base: '100%', lg: '50%', xl: '100%' }}>
              <Stack
                h={{ base: '200px', md: '450px' }}
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
          )}

          <Box w={{ base: '100%', lg: '50%', lg: '35%' }}>
            <Box
              w='100%'
              mt='8'
              py='8'
              borderY={{ base: 'none', md: '1px solid lightgray' }}
            >
              <Box ml='4'>
                <Heading
                  size='md'
                  fontWeight='normal'
                  textTransform='capitalize'
                >
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

            <Box w='100%' py={{ base: '6', md: '8' }}>
              <Box ml='4'>
                <Heading
                  size='md'
                  fontWeight='normal'
                  textTransform='capitalize'
                >
                  Security 100% Guaranteed
                </Heading>
                <Text mt='1' fontWeight='normal' fontSize='sm' color='gray.600'>
                  Your order is safe & secure guarded by state-of-the-art
                  technology.
                </Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Cart;
