import { Box, Flex, Link, Text, Input } from '@chakra-ui/react';
import React from 'react';
import { BsTelephone, BsInfoCircle } from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import { FiShoppingCart } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import {
  HoverMenu,
  HoverBrandsMenu,
  HoverDropdown
} from './HomepageComponents/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const productsArr = [
    {
      h: 'Photography',
      l: [
        'Mirrorless Cameras',
        'Digital SLR Cameras',
        'Digital Point & Shoot Cameras',
        'Medium Format Cameras',
        'Instant Cameras',
        'Specialty Cameras'
      ]
    },
    {
      h: 'Lighting & Studio',
      l: [
        ' Light Booms & Stands',
        'Grips, Clamps & Arms',
        'Trussing Equipment',
        'Railing Systems & Components',
        'Mounting Hardware',
        'Umbrella Mounts',
        'Weight Bags'
      ]
    },
    {
      h: 'Computers',
      l: ['All in One PCs', 'Apple Desktops', 'Barebone PCs', 'Desktops']
    },
    {
      h: 'Video',
      l: [
        'Professional Camcorders',
        'Action Cameras & Accessories',
        'Consumer Camcorders'
      ]
    },
    {
      h: 'Audio',
      l: [
        'Wireless & Bluetooth Headphones',
        'Earphones & Earbuds',
        'Headphones',
        'DJ & Studio Headphones',
        'Computer & Gaming Headsets'
      ]
    },
    {
      h: 'Gaming',
      l: [
        'PlayStation Consoles',
        'PlayStation Games',
        'PlayStation Accessories'
      ]
    },
    {
      h: 'Home Electronics',
      l: [
        'Home Theater Systems',
        'Home Theater Projectors',
        'Receivers & Amplifiers',
        'Home Theater Speakers',
        'Projector Screens'
      ]
    },
    {
      h: 'Musical Instruments',
      l: [
        'Electric Guitars',
        'Acoustic Electric Guitars',
        'Acoustic Guitars',
        'Bass Guitars'
      ]
    },
    { h: 'Drones', l: ['Quadcopters', 'Underwater', 'Fixed Wing'] },
    {
      h: 'Optics & Binoculars',
      l: [
        'Binoculars',
        'Binocular Accessories',
        'Cases',
        'Straps',
        'Skywatching Binoculars'
      ]
    }
  ];
  const brandsArr = [
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-1.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-2.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-3.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-4.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-5.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-6.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-7.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-8.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-9.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-10.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-11.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-12.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-18.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-14.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-15.png',
    'https://www.adorama.com/col/header-21/prod/brands/brand-image-17.png'
  ];
  const usedArr = [
    { h: 'Pre-Owned Gear' },
    { h: 'Sell Yours' },
    { h: 'Open Box' },
    { h: 'For Parts' }
  ];
  const Deals = [
    { h: 'Deals by Category' },
    { h: 'Deal of the Day' },
    { h: 'Bundle & Save' },
    { h: 'Clearance' },
    { h: 'Top Deals' }
  ];

  const loggedUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      {/* topbar */}
      <Box h={'30px'} bgColor='#011f42' />
      {/* 2nd bar */}
      <Flex
        fontWeight='500'
        color='#004387'
        justifyContent={'space-between'}
        alignItems={'center'}
        h={'31px'}
      >
        <Flex
          ml={{ base: '10px', md: '30px', lg: '70px' }}
          width={{ base: '200px', md: '300px', lg: '400px' }}
          fontSize={{ base: '6px', md: '8px', lg: '12px' }}
          justifyContent={'space-between'}
        >
          <Text>ADORAMA BUSINESS</Text>
          <Text>ADORAMA RENTALS</Text>
          <Text>PRINTIQUE</Text>
          <Text>OUR BLOG</Text>
        </Flex>
        <Flex
          mr={{ base: '10px', md: '30px', lg: '70px' }}
          width={{ base: '100px', md: '150px', lg: '230px' }}
          justifyContent={'space-between'}
          fontSize={{ base: '6px', md: '8px', lg: '12px' }}
        >
          <Flex align='center' gap='1'>
            <BsTelephone />
            800.223.2500
          </Flex>
          <Flex
            width={{ base: '30px', md: '50px', lg: '80px' }}
            align='center'
            gap='1'
          >
            <TbMessageCircle2 />
            Live Chat
          </Flex>
          <Flex align='center' gap='1'>
            <BsInfoCircle />
            Help
          </Flex>
        </Flex>
      </Flex>
      {/* Logo Bar */}
      <Flex
        justifyContent={'space-between'}
        height={{ base: '40px', md: '60px', lg: '74px' }}
        borderBottom='1px solid gray'
        bgColor={'#013f7d'}
      >
        {/* Left of logo bar */}
        <Link
          href='/'
          _hover={{ fontDecoration: 'none' }}
          ml={{ base: '20px', md: '50px', lg: '100' }}
          color='white'
          fontFamily='Impact'
          fontSize={{ base: '20px', md: '40px', lg: '50px' }}
          w={{ base: '100px', md: '205px', lg: '255px' }}
          h={{ base: '10px', md: '20px', lg: '40px' }}
        >
          TechoMania
        </Link>
        {/* Right of logo Bar */}
        <Flex
          mr={{ base: '10px', md: '20px', lg: '50px' }}
          alignItems='center'
          color='white'
          justifyContent={'space-between'}
        >
          <Input
            bgColor={'white'}
            borderRadius='30'
            placeholder={'Search'}
            width={{ base: '100px', md: '200px', lg: '455px' }}
            height={{ base: '10px', md: '15px', lg: '32px' }}
          />
          <Flex
            width={{ base: '', md: '', lg: '' }}
            alignItems='center'
            justifyContent={'space-between'}
          >
            <RxPerson color='white' size={'25'} />
            <HoverDropdown
              text={loggedUser ? `Welcome ${loggedUser.firstName}` : 'Login'}
              item1={'Profile'}
              item2={'Admin'}
              item3={loggedUser ? 'Logout' : ''}
            />
            <NavLink to='/cart'>
              <FiShoppingCart size={'25'} />
            </NavLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        fontSize={{ base: '6px', md: '8px', lg: '15px' }}
        justifyContent={'space-around'}
        alignItems={'center'}
        height='43px'
        bgColor={'#013f7d'}
      >
        <Flex w={{ base: '200px', md: '300px', lg: '483px' }}>
          <Link href='/products'>
            <HoverMenu text={'Products'} itemsArr={productsArr} />
          </Link>
          <HoverBrandsMenu text={'Brands'} itemsArr={brandsArr} />
          <HoverMenu text={'Used'} itemsArr={usedArr} />
          <HoverMenu text={'Deals'} itemsArr={Deals} />
        </Flex>
        <Flex
          w={{ base: '150px', md: '400px', lg: '800px' }}
          gap='7'
          color='white'
        >
          <Link w={{ base: '50px', md: '70px', lg: '110px' }}>
            Deal of the Day
          </Link>
          <Link w={{ base: '50px', md: '80px', lg: '150px' }}>
            Adorama Credit Card
          </Link>
          <Link w={{ base: '40px', md: '60px', lg: '100px' }}>VIP Rewards</Link>
          <Link w={{ base: '30px', md: '45px', lg: '70px' }}>Gift Cards</Link>
          <Link w={{ base: '35px', md: '45px', lg: '70px' }}>Students</Link>
          <Link w={{ base: '60px', md: '110px', lg: '165px' }}>
            #CreateNoMatterWhat
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
{
  /* <Box>
                <Text fontSize={{base:"5px",md:"8px",lg:"10"}} w={{base:"15px",md:"25px",lg:"42px"}}>{loggedUser?"Welcome":"Login"}</Text>
                <Text fontWeight={"500"} fontSize={{base:"6px",md:"8px",lg:"12px"}}  w={{base:"20px",md:"45px",lg:"70px"}}>{loggedUser?loggedUser.firstName:"My Account"}</Text>
              </Box> */
}
