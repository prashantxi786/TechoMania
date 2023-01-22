import React from 'react';
import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';
import Responsive from './ShopByCategorySlider';
import { Grid, GridItem } from '@chakra-ui/react';

const MidSection = () => {
  return (
    <Flex flexDirection='column' gap='10'>
      {/* shop by category */}
      <Box m='auto' w='95%'>
        <Text align='left' fontWeight='500'>
          SHOP BY CATEGORY
        </Text>
        <Responsive />
      </Box>
      <Image
        m='auto'
        width='95%'
        src='https://www.adorama.com/images/cms/36471Hero-Fujifilm-Instax-Mini-Desktop@2x_77486.jpg'
      />
      {/* two image section */}
      <Flex
        m='auto'
        w='95%'
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        justifyContent={'space-between'}
      >
        <Box align='left'>
          <Image src='https://www.adorama.com/images/cms/36471Spotlight-Slidgo-X10-Desktop_72166.jpg' />
          <Text fontWeight={600}>Ride into the New Year with Style!</Text>
          <Text fontSize={{ lg: '13px' }}>
            NEW X10 Electric Scooter with Dual-drive motors - $999 for a limited
            time, a $400 savings! While supples last.
          </Text>
          <Link color='#013f7d' textDecoration={'underline'}>
            Shop
          </Link>
        </Box>
        <Box align='left'>
          <Image src='https://www.adorama.com/images/cms/36471Leica_Promo-Spotlight-Desktop_12056.jpg' />
          <Text fontWeight={600}>Bundle. Upgrade. Reward.</Text>
          <Text fontSize={{ lg: '13px' }}>
            Save up to $2300 on SL Camera & Prime Lenses with the Leica SL
            Customer Appreciation Program.
            <br /> Now through February 7th, 2023.
          </Text>
          <Link color='#013f7d' textDecoration={'underline'}>
            Shop
          </Link>
        </Box>
      </Flex>
      {/* Gird images section */}
      <Grid m='auto' w='95%' templateColumns='repeat(2, 1fr)' gap='5'>
        <GridItem>
          <Link>
            <Image src='https://raw.githubusercontent.com/prashantxi786/voiceless-lunchroom-7858/8447100a2bff765f2228a5922059e1d06047f061/public/Images/Screenshot_20230120_011107.png' />
          </Link>
        </GridItem>
        <GridItem>
          <Link>
            <Image src='https://raw.githubusercontent.com/prashantxi786/voiceless-lunchroom-7858/8447100a2bff765f2228a5922059e1d06047f061/public/Images/Screenshot_20230120_011428.png' />
          </Link>
        </GridItem>
        <GridItem>
          <Link>
            <Image src='https://raw.githubusercontent.com/prashantxi786/voiceless-lunchroom-7858/8447100a2bff765f2228a5922059e1d06047f061/public/Images/Screenshot_20230120_011441.png' />
          </Link>
        </GridItem>
        <GridItem>
          <Link>
            <Image src='https://raw.githubusercontent.com/prashantxi786/voiceless-lunchroom-7858/8447100a2bff765f2228a5922059e1d06047f061/public/Images/Screenshot_20230120_011512.png' />
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default MidSection;
