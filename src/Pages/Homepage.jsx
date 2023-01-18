import React from 'react'
import Footer from '../Components/Footer'
import Carousel from '../Components/HomePage.Carousel'
import Navbar from '../Components/Navbar'

const Homepage = () => {
    const arr=[
        'https://www.adorama.com/images/cms/36471New-MacBook-Pro-2023-Hero-Desktop@1.5x_87161.jpg',
        'https://www.adorama.com/images/cms/36471Hero-Sony-Lens-Desktop@2x_(1)_52724.jpg',
        "https://www.adorama.com/images/cms/36471Nikon-Z9-In-Stock-Hero-Desktop@2x_28627.jpg",
        'https://www.adorama.com/images/cms/36471Hero-Accessorize-Your-Gear-Desktop@2x_27069.jpg',
        "https://www.adorama.com/images/cms/36471Hero-New-Year-New-You-Desktop@2x_02759.jpg",
        "https://www.adorama.com/images/cms/36471Hero-Lumix-S5II-Desktop@2x_10419.jpg"
      ]
  return (
    <div>
        <Navbar/>
        <Carousel cardsArr={arr}/>
        <Footer/>
    </div>

  )
}

export default Homepage