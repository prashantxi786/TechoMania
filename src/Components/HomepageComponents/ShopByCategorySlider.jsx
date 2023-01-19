import React, { Component } from "react";
import Slider from "react-slick";
import { Image,Link } from "@chakra-ui/react";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 12,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider  {...settings}>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"}  src={"https://www.adorama.com/col/images/category-icons/icon-category-cameras.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-lenses.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-lighting.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-computers.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-gaming.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-drones.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-headphones.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-mics.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-audio.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-hometheater.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-homeoffice.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-smarthome.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-wearables.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-optics.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-music.png"}/></Link>
          <Link p="2px"><Image p="10px" bgColor={"#013b7b"} src={"https://www.adorama.com/col/images/category-icons/icon-category-security.png"}/></Link>
        </Slider>
      </div>
    );
  }
}