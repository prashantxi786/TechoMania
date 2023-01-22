import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, useToast } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import {
  addToCart,
  getSingleProduct
} from '../Redux/MainProducts/products.action';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  let { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const errorID = 'error-toast';
  const successID = 'success-toast';
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});

  const {
    productImage_src,
    trackEvent_3,
    trackEvent_2,
    review_stars,
    review_count,
    price_reg_has_sibs
  } = product;

  const handleCart = (newItem, quantity) => {
    addToCart(newItem, quantity).then((response) => {
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

  useEffect(() => {
    dispatch(getSingleProduct(id)).then((res) => setProduct(res));
  }, [id]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: 'flex',
          gap: '50px',
          marginLeft: '100px'
          // border: "1px solid blue",
        }}
      >
        {/* <div 
      style={{
         height: "auto", 
         width: "600px", 
        //  border: "1px solid red" 
         }}>
        <img style={{ width: "600px" }} src={product.productImage_src} />
      </div> */}

        <Box boxSize='sm'>
          <Image
            style={{ height: '300px', marginTop: '20px' }}
            src={product.productImage_src}
            alt='Dan Abramov'
          />
        </Box>

        <div>
          <div
            style={{
              // border: "1px solid teal",
              width: '800px',
              marginTop: '10px'
            }}
          >
            <div style={{ fontSize: '30px', textAlign: 'left' }}>
              {product.trackEvent_2}
              <br />
              <div
                style={{
                  textAlign: 'left',
                  fontSize: '12px',
                  marginTop: '10px'
                }}
              >
                SKU:{product.product_sku_2} MFR:{product.product_sku_4}{' '}
              </div>

              <div style={{ fontSize: '15px' }}>
                {/* review_stars */}
                <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                {product.review_stars} ({product.review_count})
              </div>

              <div style={{ marginTop: '10px' }}>
                <Text as='b'>${product.price_reg_has_sibs}</Text>
              </div>
              <div
                style={{
                  color: 'rgb(43, 105, 229)',
                  cursor: 'pointer',
                  fontSize: '15px'
                }}
              >
                Get {product.price_reg_has_sibs} Reward Points
              </div>
              <br />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  style={{
                    border: '1px solid grey',
                    width: '60px',
                    borderRadius: '5px',
                    textAlign: 'center'
                  }}
                  type='number'
                  placeholder='1'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: 'rgb(228, 112, 70)',
                    color: 'white',
                    // padding: "10px 20px",
                    fontSize: '25px',
                    // border: "red",
                    borderRadius: '5px',
                    // cursor: "pointer",
                    width: '300px',
                    height: '60px'
                    // marginRight:"20px"
                  }}
                  onClick={() => handleCart(product, qty === '' ? 1 : qty)}
                >
                  Add to Cart
                </button>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'rgb(43, 105, 229)',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Wishlist
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'rgb(43, 105, 229)',
                      cursor: 'pointer'
                    }}
                  >
                    Sale alert
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '80px' }}>
                <p
                  style={{ color: 'green', fontSize: '15px', marginTop: '5px' }}
                >
                  <CheckCircleIcon style={{ color: 'green' }} /> In Stock &
                  Ready to Ship{' '}
                </p>
                <p style={{ color: 'grey', fontSize: '25px' }}>|</p>
                <p
                  style={{
                    color: 'rgb(43, 105, 229)',
                    fontSize: '15px',
                    marginTop: '5px',
                    marginLeft: '-30px'
                  }}
                >
                  {' '}
                  Calculate Shipping sell all shipping options{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SingleProduct;
