import { useEffect, useState } from 'react';
import {
  border,
  Button,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text
} from '@chakra-ui/react';
import { FaGreaterThan } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Image, useToast } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronLeftIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';
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
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          //  border:"1px solid red",
          width: "100%",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "4000px",
            fontSize: "27px",
            marginLeft: "20px",
            //  border:"1px solid blue"
          }}
        >
          <Text as="b"> Mirrorless Cameras</Text>
          <div style={{ fontSize: "20px", marginTop: "10px" }}>CATEGORIES:</div>
          <div
            style={{
              fontSize: "17px",
              color: "rgb(43, 105, 229)",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <ChevronLeftIcon /> All Categoris
          </div>
          <hr />
          <div
            style={{
              fontSize: "17px",
              color: "rgb(43, 105, 229)",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
             <ChevronLeftIcon /> Cameras
          </div>
          <hr />
          <br />
          <div style={{ fontSize: "20px" }}>
            <p>FILTERS:</p>
            {/* <input style={{border:"1px solid grey",borderRadius:"5px"}} onChange={handleSearch} type="text" placeholder="Search with Brands" /> */}
            <Input
              onChange={handleSearch}
              variant='filled'
              placeholder='Search within filters'
            />
            <div style={{ cursor: 'pointer', marginTop: '15px' }}>
              {/* <p style={{marginTop:"15px"}}>Brand</p><hr /> */}
              <Menu>
                <MenuButton
                  style={{ width: "300px", textAlign: "left" }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Brand
                </MenuButton>
                <MenuList>
                  <MenuItem>Canon (147)</MenuItem>
                  <MenuItem>Fujifilm (43)</MenuItem>
                  <MenuItem>Leica (10) </MenuItem>
                  <MenuItem>OM SYSTEM (7)</MenuItem>
                  <MenuItem>Panasonic (162)</MenuItem>
                  <MenuItem>Sigma (18)</MenuItem>
                  <MenuItem>Sony (336)</MenuItem>
                </MenuList>
              </Menu>

              {/* <p style={{ marginTop: '15px' }}>Sensor Size</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Sensor Size
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Model</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Model
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Configuration</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Configuration
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Resolution</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Resolution
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Max Video Quality</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Max Video Quality
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>In Body Stabilization</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  In Body Stabilization
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Lens Included</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Lens Included
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Special Features</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Special Features
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Viewfinder</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Viewfinder
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Color</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Color
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>

              {/* <p style={{ marginTop: '15px' }}>Series</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Series
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Wifi</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Wifi
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Edition</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Edition
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Lens Mount</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Lens Mount
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Kit Style</p>
              <hr /> */}
               <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Kit Style
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Price Range</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Price Range
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Rating & Reviews</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Rating & Reviews
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Filter By</p>
              <hr /> */}
              <Menu>
                <MenuButton
                  style={{
                    width: "300px",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Discount
                </MenuButton>
                <MenuList>
                  <MenuItem>Full Frame Camera (452)</MenuItem>
                  <MenuItem>APS-C camera (325)</MenuItem>
                  <MenuItem>Micro Four Thirds (174) </MenuItem>
                  <MenuItem>1/2.9" (2)</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              {/* <p style={{ marginTop: '15px' }}>Discount</p>
              <hr /> */}
              
            </div>
            <br />
            <p style={{ fontSize: "15px", marginLeft: "10px" }}>
              {" "}
              FEATURED BRANDS:
            </p>
            <div>
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  display: "flex",
                  gap: "9px",
                }}
              >
                <img
                  style={{ height: "40px", width: "40px" }}
                  src="https://companieslogo.com/img/orig/CAJ-abaf7aa6.png?t=1660541250"
                  alt="canon"
                />
                <p style={{ fontSize: "18px", color: "rgb(43, 105, 229)" }}>
                  <Text as="b">Canon</Text>
                </p>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  marginLeft: "61px",
                  marginTop: "-16px",
                }}
              >
                Delighting You Always
              </p>
            </div>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                display: "flex",
                gap: "9px",
              }}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Fujifilm_X_series.png"
                alt="fuji"
              />
              <p style={{ fontSize: "18px", color: "rgb(43, 105, 229)" }}>
                <Text as="b">Fujifilm</Text>
              </p>
            </div>

            <p
              style={{
                fontSize: "13px",
                marginLeft: "67px",
                marginTop: "-23px",
              }}
            >
              Value from Innovation
            </p>

            <div
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                display: "flex",
                gap: "9px",
              }}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nikon_Logo.svg/2048px-Nikon_Logo.svg.png"
                alt="nikon"
              />
              <p style={{ fontSize: "18px", color: "rgb(43, 105, 229)" }}>
                <Text as="b">Nikon</Text>
              </p>
            </div>

            <p
              style={{
                fontSize: "13px",
                marginLeft: "67px",
                marginTop: "-23px",
              }}
            >
              Never miss a moment.
            </p>

            <div
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                display: "flex",
                gap: "9px",
              }}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://companieslogo.com/img/orig/7733.T-e5a4a8c0.png?t=1647895253"
                alt="olympus"
              />
              <p style={{ fontSize: "18px", color: "rgb(43, 105, 229)" }}>
                <Text as="b">Olympus</Text>
              </p>
            </div>
            <p
              style={{
                fontSize: "13px",
                marginLeft: "69px",
                marginTop: "-16px",
              }}
            >
              Your Vision, Our Future
            </p>

            <div
              style={{
                marginTop: "20px",
                marginLeft: "10px",
                display: "flex",
                gap: "9px",
              }}
            >
              <img
                style={{ height: "50px", width: "50px" }}
                src="data:image/png;base64,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"
                alt="sony"
              />
              <p style={{ fontSize: "18px", color: "rgb(43, 105, 229)" }}>
                <Text as="b">Sony</Text>
              </p>
            </div>
            <p
              style={{
                fontSize: "13px",
                marginLeft: "67px",
                marginTop: "-20px",
              }}
            >
              Make.Believe
            </p>
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

                border: "3px solid rgb(223, 223, 223)",
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
