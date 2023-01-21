import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  console.log(id);
  const ApiFetch = (id) => {
    axios.get(`http://localhost:8080/Cameras/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };
  const {productImage_src,trackEvent_3,trackEvent_2,review_stars,review_count,price_reg_has_sibs}=product
const [add,setAdd]=useState(false)

const handleCart = () => {
  alert("Item has been added")

  axios.post(`http://localhost:8080/cart`,{
 image:productImage_src,
 title:trackEvent_2
  }).then((res) => {
    console.log(res.data)
    
  })
}

  useEffect(() => {
    ApiFetch(id);
    console.log(product);
  }, [id]);
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        marginLeft: "100px",
        // border: "1px solid blue",
      }}
    >
      <div 
      style={{
         height: "auto", 
         width: "600px", 
        //  border: "1px solid red" 
         }}>
        <img style={{ width: "600px" }} src={product.productImage_src} />
      </div>
      <div>
        <div style={{
              // border: "1px solid teal",
              width: "800px",
              marginTop:"10px" }}>
          <div style={{ fontSize: "30px", textAlign: "left" }}>

            {product.trackEvent_2}
            <br />
            <div style={{ textAlign: "left", fontSize: "20px" }}>
              SKU:{product.product_sku_2} MFR:{product.product_sku_4}{" "}
            </div>
            <div style={{ fontSize: "20px" }}>
              {product.review_stars} ({product.review_count})
            </div>

            <div>${product.price_reg_has_sibs}</div>
            <div
              style={{
                color: "rgb(43, 105, 229)",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              Get {product.price_reg_has_sibs} Reward Points
            </div>
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                style={{
                  border: "1px solid grey",
                  width: "60px",
                  borderRadius: "5px",
                }}
                type="number"
                placeholder=""
              />
              <button
                style={{
                  backgroundColor: "rgb(228, 112, 70)",
                  color: "white",
                  // padding: "10px 20px",
                   fontSize: "25px",
                  // border: "red",
                  borderRadius: "5px",
                  // cursor: "pointer",
                  width: "300px",
                  height: "60px",
                  // marginRight:"20px"
                }}
                onClick={() => handleCart(product.id)}
              >
                Add to Cart
              </button>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(43, 105, 229)",
                    cursor: "pointer",
                  }}
                >
                  Add to Wishlist
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(43, 105, 229)",
                    cursor: "pointer",
                  }}
                >
                  Sale alert
                </p>
              
              </div>

            </div>
          
            <div style={{display:"flex",gap:"80px"}}>
            <p style={{color:"green",fontSize:"15px",marginTop:"5px"}}> In Stock & Ready to Ship </p> 
            <p style={{color:"grey",fontSize:"25px"}}>|</p>
            <p style={{ color: "rgb(43, 105, 229)",fontSize:"15px",marginTop:"5px",marginLeft:"-30px"}}> Calculate Shipping sell all shipping options </p> 

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
