import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const Footer = () => {
  
  return (
    <div>
      <Flex
        gap='1'
        flexWrap={'wrap'}
        fontWeight={'500'}
        justifyContent='center'
        align='center'
        fontSize={{ base: '10px', md: '13px', lg: '18px' }}
        bgColor='#014386'
        height={{ base: '70px', md: '90px', lg: '107px' }}
        color='white'
        width={{ lg: 'full' }}
      >
        Equipping your creativity, since 1974. Read{' '}
        <Link textDecoration={'underline'}>our story</Link>.
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent='space-around'
        fontSize={{ base: '10px', md: '15px', lg: '24px' }}
        height={{ base: '50px', md: '80px', lg: '118px' }}
        bgColor='#f2f3f3'
        width={{ lg: '' }}
      >
        <Link _hover={{ color: '#0567c8' }}>800-223-2500</Link>
        <Link _hover={{ color: '#0567c8' }}>Help Center</Link>
        <Link _hover={{ color: '#0567c8' }}>NYC Store Hours</Link>
        <Link _hover={{ color: '#0567c8' }}>Live Chat</Link>
      </Flex>

      <Flex
        align='center'
        bgColor='#014386'
        fontSize={{ base: '10px', md: '13px', lg: '18px' }}
        height={{ lg: '166px' }}
        color='white'
        width={{ lg: 'full' }}
      >
        <Text m='auto' fontWeight={'500'} width={{ lg: '680px' }}>
          Copyright Adorama Camera, Inc. All rights reserved. • Privacy Policy •
          Terms of Use 42 West 18th Street New York, NY 10011 (directions) •
          800.223.2500
        </Text>
      </Flex>
    </div>
  );
};

export default Footer;
