import React, { useEffect, useState } from "react";
import axios from "axios";
import { border ,useToast} from "@chakra-ui/react";
import {FaGreaterThan} from "react-icons/fa"
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { addToCart, getProducts } from '../Redux/MainProducts/products.action';
import {useParams} from "react-router-dom"
const SearchResults = () => {
    const {value,category}=useParams()
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
   const [filteredProducts, setFilteredProducts] = useState([]);
   const[load,setLoad]=useState(true)

  const Api = () => {
    axios.get(`https://techomania-mock-server.onrender.com/${category}?q=${value}`).then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setFilteredProducts(res.data)
    })
  };
  const toast = useToast();
  const successID = 'success-toast';
  const errorID = 'error-toast';

  // cart
  const handleCart = (newItem) => {
    addToCart(newItem).then((response) => {
      if (response) {
        if (!toast.isActive(errorID)) {
          toast({
            title: 'Item is already present in the cart.',
            id: errorID,
            description: '',
            position: 'top',
            status: 'error',
            duration: 3000,
            isClosable: false
          });
        }
      } else {
        if (!toast.isActive(successID)) {
          toast({
            title: 'Item has been added to the cart!',
            id: successID,
            description: '',
            position: 'top',
            status: 'success',
            duration: 3000,
            isClosable: false
          });
        }
      }
    });
  };

const handleSearch = (event) => {

  setSearchTerm(event.target.value);
  if(event.target.value==="")
  {
    setProduct(filteredProducts)
  }
  else{setProduct(
    product.filter((el) =>
        el.trackEvent_2.toLowerCase().includes(event.target.value.toLowerCase())
    ) 
);}
  // setFilteredProducts(
    
};




  useEffect(() => {
    Api();
  }, [value]);
  return (
    <div>
      <Navbar/>
    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
    //  border:"1px solid red",
    width:"100%",gap:"30px"}}>
      
     <div style={{width:"30%",height:"4000px",fontSize:"27px",marginLeft:"20px",
    //  border:"1px solid blue"
     }}>
      Mirrorless Cameras
      
      <div style={{fontSize:"20px"}}>CATEGORIES:</div>
      <div style={{fontSize:"17px",color:"rgb(43, 105, 229)",cursor:"pointer"}}><u>All Categories</u></div>
      <div style={{fontSize:"17px",color:"rgb(43, 105, 229)",cursor:"pointer"}}><u>Cameras</u></div>
    <br />
          <div style={{fontSize:"20px"}}>
      <p>FILTERS:</p>
      <input style={{border:"1px solid grey",borderRadius:"5px"}} onChange={handleSearch} type="text" placeholder="Search with Brands" />
      <div style={{cursor: "pointer",marginTop:"15px"}}>
      <p style={{marginTop:"15px"}}>Brand</p><hr />
      <p style={{marginTop:"15px"}}>Sensor Size</p><hr />
      <p style={{marginTop:"15px"}}>Model</p><hr />
      <p style={{marginTop:"15px"}}>Configuration</p><hr />
      <p style={{marginTop:"15px"}}>Resolution</p><hr />
      <p style={{marginTop:"15px"}}>Max Video Quality</p><hr />
      <p style={{marginTop:"15px"}}>In Body Stabilization</p><hr />
      <p style={{marginTop:"15px"}}>Lens Included</p><hr />
      <p style={{marginTop:"15px"}}>Special Features</p><hr />
      <p style={{marginTop:"15px"}}>Viewfinder</p><hr />
      <p style={{marginTop:"15px"}}>Color</p><hr />
      <p style={{marginTop:"15px"}}>Series</p><hr />
      <p style={{marginTop:"15px"}}>Wifi</p><hr />
      <p style={{marginTop:"15px"}}>Edition</p><hr />
      <p style={{marginTop:"15px"}}>Lens Mount</p><hr />
      <p style={{marginTop:"15px"}}>Kit Style</p><hr />
      <p style={{marginTop:"15px"}}>Price Range</p><hr />
      <p style={{marginTop:"15px"}}>Rating & Reviews</p><hr />
      <p style={{marginTop:"15px"}}>Filter By</p><hr />
      <p style={{marginTop:"15px"}}>Discount</p><hr />



      </div>
      <br />
     <p style={{fontSize:"15px"}}> FEATURED BRANDS:</p>
      </div>
      </div>
     
  <div>
  {/* <div style={{border:"1px solid blue",width:"100px"}}>kjkj</div> */}
   
     <div>
     <div
      style={{
        
        width: "100%",
        float: "right",
        gap: "20px",
        
        border:"3px solid rgb(223, 223, 223)"
        
       
      }}
    >
      {product.map((el) => (
        
        <div
        key={el.id}
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "10px",
            height: "500px",
            borderBottom:'3px solid rgb(175, 174, 174)',
            // marginTop: "10px",
            //  backgroundColor: "rgba(225, 227, 107, 0.54)",
            paddingTop: "50px",
            paddingLeft: "50px",
            textAlign:"left",
            // width:"1200px"
            marginRight:"20px",
            

          }}
        >
         
          <div >
            <img
              style={{ paddingTop: "20px", width: "300px" }}
              src={el.productImage_src}
              alt="not found"

            />
          </div>
          <div style={{ width: "60%",marginRight:"100px" }}>
            <h3 style={{color:"rgb(43, 105, 229)",cursor:"pointer",marginRight:"80px"}}>{el.trackEvent_3}{el.trackEvent_2}
            <Link to={`/products/${el.id}`}><h1>More details</h1></Link></h3>


            <p style={{marginRight:"80px"}}>
              SKU:{el.product_sku_2} MFR:{el.product_sku_4}{" "}
              <br />
              {el.review_stars} ({el.review_count})
              <br />
              {el.buy_section_2}{el.buy_section}
              <br/>
              {el.buy_section_4} {el.buy_section_3}
              <br/>
              {el.buy_section_6}{el.buy_section_5}
              <br/>
              {el.buy_section_8}{el.buy_section_7}
            <br/>
              {el.buy_section_10}{el.buy_section_9}
              <br/>
            {el.buy_section_14}{el.buy_section_13}
            </p>
           
            <p style={{ color: "green" }}>In Stock</p>
          </div>
          <div>
            <p>{el.price_label}
            <br />
           <div style={{fontSize:"30px"}}>${el.price_reg_has_sibs}</div>    VIP PRO</p>

          <div style={{color:"green"}}> $176.67{el.promo_financing_rate_2} {el.promo_financing}</div> 
            {/* <p>${el.price_reg_has_sibs}</p> */}
            
           
            {/* <div style={{ fontSize: "35px" }}>{el.price}</div> */}

            <button
              style={{
                backgroundColor: "rgb(228, 112, 70)",
                color: "white",
                padding: "10px 20px",
                fontSize: "20px",
                border: "red",
                borderRadius: "5px",
                cursor: "pointer",
                width: "200px",
                height: "50px",
                marginRight:"20px"
              }}
               onClick={() => handleCart(el.id)}
            >
              Add to Cart
            </button>
            <p style={{color:"rgb(43, 105, 229)",cursor: "pointer",}}>+ wishlist</p>
            <br /><hr />
            <p>Ways to Save</p>
            <div style={{color:"rgb(43, 105, 229)",cursor: "pointer",}}>
              <p >5% OFF+ Every Day with Adorama Edge</p>
              <p>Credit Card</p>
              <p>Sell or Trade your Gear</p>
              <p>Save up to $800 with bundle</p>
              <p>Get Reward Points</p>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>

  </div>
  </div>
  </div>
  );
};

export default SearchResults;
