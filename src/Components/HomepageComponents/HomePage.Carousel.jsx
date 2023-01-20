import React from 'react';
import { Box, Image,IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 1800,
  slidesToShow: 1,
  slidesToScroll: 1,
  
};

export default function SecondCarousel({cardsArr}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
 const [cards,setCards]=React.useState([])
 React.useEffect(()=>{
  setCards(cardsArr)
 },[])

  return (
    <Box
      position={'relative'}
      height={{base:"200px",md:"300px",lg:"530px"}}
      width={'full'}
      overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
         opacity="0.5"
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt  />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        opacity="0.5"
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Image
            
            src={url}
            key={index}
            height={{base:"200px",md:"300px",lg:"500px"}}
            width={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          />
        ))}
      </Slider>
    </Box>
  );
}