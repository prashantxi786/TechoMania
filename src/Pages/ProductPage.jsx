import { useEffect, useState } from 'react';
import {
  border,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text
} from '@chakra-ui/react';
import { FaGreaterThan } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Image, useToast } from '@chakra-ui/react';
import { SearchIcon, StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProducts } from '../Redux/MainProducts/products.action';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (store) => store.productsManager
  );
  const [product, setProduct] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
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
    if (event.target.value === '') {
      setProduct(products);
    } else {
      setProduct(
        products.filter((el) =>
          el.trackEvent_2
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    if (!products.length)
      dispatch(getProducts()).then((res) => setProduct(res));
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          //  border:"1px solid red",
          width: '100%',
          gap: '30px'
        }}
      >
        <div
          style={{
            width: '30%',
            height: '4000px',
            fontSize: '27px',
            marginLeft: '20px'
            //  border:"1px solid blue"
          }}
        >
          Mirrorless Cameras
          <div style={{ fontSize: '20px' }}>CATEGORIES:</div>
          <div
            style={{
              fontSize: '17px',
              color: 'rgb(43, 105, 229)',
              cursor: 'pointer'
            }}
          >
            <u>All Categories</u>
          </div>
          <div
            style={{
              fontSize: '17px',
              color: 'rgb(43, 105, 229)',
              cursor: 'pointer'
            }}
          >
            <u>Cameras</u>
          </div>
          <br />
          <div style={{ fontSize: '20px' }}>
            <p>FILTERS:</p>
            {/* <input style={{border:"1px solid grey",borderRadius:"5px"}} onChange={handleSearch} type="text" placeholder="Search with Brands" /> */}
            <Input
              onChange={handleSearch}
              variant='filled'
              placeholder='Search within filters'
            />
            <div style={{ cursor: 'pointer', marginTop: '15px' }}>
              {/* <p style={{marginTop:"15px"}}>Brand</p><hr /> */}
              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Select placeholder='Select Brand'>
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>

              <p style={{ marginTop: '15px' }}>Sensor Size</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Model</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Configuration</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Resolution</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Max Video Quality</p>
              <hr />
              <p style={{ marginTop: '15px' }}>In Body Stabilization</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Lens Included</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Special Features</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Viewfinder</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Color</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Series</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Wifi</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Edition</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Lens Mount</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Kit Style</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Price Range</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Rating & Reviews</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Filter By</p>
              <hr />
              <p style={{ marginTop: '15px' }}>Discount</p>
              <hr />
            </div>
            <br />
            <p style={{ fontSize: '15px' }}> FEATURED BRANDS:</p>
          </div>
        </div>

        <div>
          {/* <div style={{border:"1px solid blue",width:"100px"}}>kjkj</div> */}

          <div>
            <div
              style={{
                width: '100%',
                float: 'right',
                gap: '20px',

                border: '3px solid rgb(223, 223, 223)'
              }}
            >
              {product.map((el) => (
                <div
                  key={el.id}
                  style={{
                    display: 'flex',
                    gap: '30px',
                    // marginTop: "10px",
                    height: '500px',
                    borderBottom: '3px solid rgb(175, 174, 174)',
                    // marginTop: "10px",
                    //  backgroundColor: "rgba(225, 227, 107, 0.54)",
                    paddingTop: '50px',
                    paddingLeft: '50px',
                    textAlign: 'left',
                    // width:"1200px"
                    marginRight: '20px',
                    borderBottom: '3px solid rgb(223, 223, 223)',
                    textAlign: 'left'
                  }}
                >
                  <div>
                    <img
                      style={{ paddingTop: '20px', width: '300px' }}
                      src={el.productImage_src}
                      alt='not found'
                    />
                  </div>

                  <div style={{ width: '60%', marginRight: '100px' }}>
                    <h3
                      style={{
                        color: 'rgb(43, 105, 229)',
                        cursor: 'pointer',
                        marginRight: '80px'
                      }}
                    >
                      {el.trackEvent_3}
                      {el.trackEvent_2}
                      <NavLink to={`/products/${el.id}`}>
                        <h1>More details</h1>
                      </NavLink>
                    </h3>

                    <p style={{ marginRight: '80px' }}>
                      <div style={{ fontSize: '12px', display: 'flex' }}>
                        <p>SKU:{el.product_sku_2}</p>{' '}
                        <p style={{ marginLeft: '14px' }}>
                          MFR:{el.product_sku_4}{' '}
                        </p>
                      </div>
                      <br />
                      {/* {el.review_stars} ({el.review_count}) */}
                      <div style={{ fontSize: '15px' }}>
                        {/* review_stars */}
                        <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                        <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                        <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                        <StarIcon style={{ color: 'rgb(250, 189, 4)' }} />
                        {el.review_stars} ({el.review_count})
                      </div>
                      <br />
                      {el.buy_section_2}
                      {el.buy_section}
                      <br />
                      {el.buy_section_4} {el.buy_section_3}
                      <br />
                      {el.buy_section_6}
                      {el.buy_section_5}
                      <br />
                      {el.buy_section_8}
                      {el.buy_section_7}
                      <br />
                      {el.buy_section_10}
                      {el.buy_section_9}
                      <br />
                      {el.buy_section_14}
                      {el.buy_section_13}
                    </p>

                    <p style={{ color: 'green' }}>In Stock</p>
                  </div>
                  <div>
                    <p>
                      {el.price_label}
                      <br />
                      <div style={{ fontSize: '30px' }}>
                        <Text as='b'>${el.price_reg_has_sibs}</Text>
                      </div>{' '}
                      VIP PRO
                    </p>

                    <div style={{ color: 'green' }}>
                      {' '}
                      $176.67{el.promo_financing_rate_2} {el.promo_financing}
                    </div>
                    {/* <p>${el.price_reg_has_sibs}</p> */}

                    {/* <div style={{ fontSize: "35px" }}>{el.price}</div> */}

                    <button
                      style={{
                        backgroundColor: 'rgb(228, 112, 70)',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '20px',
                        border: 'red',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: '200px',
                        height: '50px',
                        marginRight: '20px'
                      }}
                      onClick={() => handleCart(el)}
                    >
                      Add to Cart
                    </button>
                    <p
                      style={{ color: 'rgb(43, 105, 229)', cursor: 'pointer' }}
                    >
                      + wishlist
                    </p>
                    <br />
                    <hr />
                    <p>Ways to Save</p>
                    <div
                      style={{ color: 'rgb(43, 105, 229)', cursor: 'pointer' }}
                    >
                      <p>5% OFF+ Every Day with Adorama Edge</p>
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

export default ProductPage;
