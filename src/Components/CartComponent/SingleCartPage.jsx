import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Hide,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteItem } from '../../Redux/Cart/cart.action';

export const SingleCartPage = (props) => {
  const dispatch = useDispatch();
  const { productImage_src, trackEvent_2, id, your_price } = props;
  let title = trackEvent_2.split('-');
  let final_title = '';
  for (let i = 1; i < title.length; i++) {
    final_title += title[i].trim() + ' ';
  }
  final_title = final_title.trim();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Box
      w={{ base: '100%', lg: '50%', xl: '100%' }}
      borderX={{ base: 'none', md: '10px solid' }}
      borderTop={{ base: 'none', md: '10px solid' }}
      borderColor={{ base: 'none', md: 'blackAlpha.100' }}
      p='8'
      pt='0'
      pr='0'
    >
      <Flex justify='space-between' align='flex-start'>
        <Flex justify='left' align='flex-start' gap='8' mt='8' mr='8'>
          <Image
            w={{ base: '30%', sm: '20%' }}
            src={productImage_src}
            alt={final_title}
          />
          <Box w='60%'>
            <NavLink to={`/products/${id}`}>
              <Heading
                w='100%'
                lineHeight='6'
                size='md'
                color='#06c'
                fontWeight='normal'
                noOfLines={2}
                textOverflow='ellipsis'
              >
                {final_title}{' '}
              </Heading>
            </NavLink>
            <Text lineHeight='taller' fontSize={{ base: '2xs', sm: 'xs' }}>
              SKU: {id}
            </Text>
            <Flex justify='left' align='center' gap='1' mt='4' color='green'>
              <AiOutlineCheckCircle style={{ fontSize: '20px' }} />
              <Text fontSize='sm' letterSpacing='wide'>
                In Stock
              </Text>
            </Flex>
          </Box>

          <Hide below='md'>
            <Text>
              ${your_price.toLocaleString('en-US')}
              {/* {your_price.toString().includes('.') && '.00'} */}
            </Text>
          </Hide>
        </Flex>

        <Box textAlign='right' p='2' color='blue.300'>
          <Tooltip
            label='Remove this item'
            bg='blackAlpha.700'
            fontWeight='thin'
            placement='right-end'
            openDelay={500}
          >
            <CloseButton
              onClick={() => handleDelete(id)}
              fontSize='md'
              bg='none'
              _hover={{
                transform: 'rotateY(0deg) rotate(180deg)',
                transition: 'transform 0.3s'
              }}
            />
          </Tooltip>
        </Box>
      </Flex>
    </Box>
  );
};
