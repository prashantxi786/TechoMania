import {
  Box,
  Flex,
  Show,
  Hide,
  Text,
  Image,
  Input,
  Button,
  Tooltip,
  Heading,
  Checkbox,
  useToast,
  InputGroup,
  FormControl,
  InputRightElement
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { login } from '../Redux/Authentication/auth.action';
import { ChevronRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { auth } from '../firebase';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [pass, setPass] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((store) => store.authManager);
  const { loading, error, user, isLoggedIn } = state;
  const buttonBg =
    'linear-gradient(180deg,#fc5d37 0%,#ed5132 50%,#e64525 100%)';
  const signInBg = 'linear-gradient(180deg,#fff 0%,#ededed 100%)';

  const validateFields = (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) errors.password = 'Required';
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      dispatch(login(values.email, values.password));
      setSubmitting(false);
      resetForm({ values: '' });
    }, 1000);
  };

  useEffect(() => {
    document.title = 'Sign In';
    if (isLoggedIn) {
      toast({
        title: `Hello ${user.firstName}`,
        description: 'You are successfully signed in.',
        position: 'top',
        status: 'success',
        duration: 3000,
        isClosable: false
      });
    }
    if (error) {
      toast({
        title: 'Wrong credentials entered!',
        description: 'Please try again.',
        position: 'top',
        status: 'error',
        duration: 3000,
        isClosable: false
      });
    }
    // auth.onAuthStateChanged((user) => console.log(user));
  }, [isLoggedIn, error]);

  return (
    <Box
      h='100vh'
      bg={{
        base: 'linear-gradient(180deg, #003263 0%, #004387 50%)',
        md: 'white'
      }}
    >
      <Hide below='md'>
        <Box
          w='100%'
          h='100%'
          pos='absolute'
          zIndex='100'
          overflow='hidden'
          bg={{
            base: 'white',
            md: 'linear-gradient(180deg, #003263 0%, #004387 50%)'
          }}
        >
          <Image
            src='https://i.postimg.cc/d3MCgYsV/donut.webp'
            alt='donut'
            opacity='0.1'
            mixBlendMode='color-burn'
            w={{ base: 'auto', lg: '48rem' }}
            transform={{
              base: 'scale(1) translateX(-67%) translateY(-17%)',
              lg: 'scale(1.34) translateX(-31%) translateY(-9%)'
            }}
          />
        </Box>
      </Hide>

      <Box
        p='4'
        pb='0'
        w='100%'
        borderRadius='9px'
        bg={{ base: 'none', md: 'blackAlpha.400' }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w={{ base: '100%', xl: '64rem' }}
          h='100%'
          m='auto'
          mt={{ base: '0', md: '0', xl: '10' }}
          align='center'
          justify='center'
          overflow='hidden'
          borderRadius='9px'
          pos='relative'
          zIndex={{ base: 'auto', md: '1000' }}
          bg={{ base: 'none', md: 'blackAlpha.400' }}
          boxShadow='5px 16px 24px #00000080'
        >
          <Box
            w={{ base: '100%', md: '50%' }}
            m='auto'
            color='white'
            textAlign='center'
            bg={{
              base: 'linear-gradient(180deg,#002245 0%,#004993 100%)',
              md: 'none'
            }}
            backgroundImage={{
              base: 'linear-gradient(rgb(0, 34, 69) 0%, rgb(0, 73, 147) 100%)',
              md: 'none'
            }}
          >
            <Hide below='md'>
              <Box
                align='center'
                mb={'-100px'}
                pos='relative'
                top={{ base: '0', md: '35vh', xl: '30vh' }}
              >
                <Text fontSize='xl' letterSpacing='wider'>
                  New Customer?
                </Text>
                <Tooltip
                  label='Create an account'
                  openDelay={1000}
                  placement='bottom-end'
                >
                  <NavLink to='/signup'>
                    <Box display='inline-block'>
                      <Flex
                        justify='center'
                        align='center'
                        gap='2'
                        _hover={{ textDecor: 'underline' }}
                      >
                        <Text
                          display='inline-block'
                          mt='1'
                          fontSize='lg'
                          letterSpacing='widest'
                          textTransform='uppercase'
                        >
                          Create an account
                        </Text>
                        <ChevronRightIcon
                          mt='1'
                          boxSize='5'
                          color='gray.400'
                          borderRadius='full'
                          bg='blackAlpha.300'
                          border='1px solid grey'
                        />
                      </Flex>
                    </Box>
                  </NavLink>
                </Tooltip>
              </Box>
            </Hide>

            <Show below='md'>
              <Image
                src='https://i.postimg.cc/d3MCgYsV/donut.webp'
                alt='donut'
                opacity='0.1'
                pos='absolute'
                mixBlendMode='color-burn'
                transform='scale(0.92) translateY(-9%)'
              />
            </Show>

            <Hide below='md'>
              <NavLink to='/'>
                <Image
                  src='https://i.postimg.cc/MKzHs8x0/Techo-Mania-logo.png'
                  alt='logo'
                  display='block'
                  w={{ base: '100px', md: '150px' }}
                  m='auto'
                  pb='4'
                />
              </NavLink>
            </Hide>

            <Show below='md'>
              <Flex
                justify='center'
                align='center'
                gap={{ base: '4', sm: '6' }}
              >
                <NavLink to='/'>
                  <Image
                    w={{ base: '100px', md: '150px' }}
                    m='auto'
                    py='4'
                    mt='2'
                    display='inline-block'
                    src='https://i.postimg.cc/MKzHs8x0/Techo-Mania-logo.png'
                    alt='logo'
                  />
                </NavLink>

                <Box>
                  <Text
                    letterSpacing='wider'
                    fontSize={{ base: 'lg', sm: 'xl' }}
                  >
                    New Customer?
                  </Text>
                  <Tooltip
                    label='Create an account'
                    openDelay={1000}
                    placement='bottom-end'
                  >
                    <NavLink to='/signup'>
                      <Box display='inline-block'>
                        <Flex
                          justify='center'
                          align='center'
                          gap='2'
                          _hover={{ textDecor: 'underline' }}
                        >
                          <Text
                            display='inline-block'
                            mt='1'
                            fontSize={{ base: 'md', sm: 'lg' }}
                            letterSpacing='widest'
                            textTransform='uppercase'
                          >
                            Create an account
                          </Text>
                          <ChevronRightIcon
                            mt='1'
                            boxSize='5'
                            color='gray.400'
                            borderRadius='full'
                            bg='blackAlpha.300'
                            border='1px solid grey'
                          />
                        </Flex>
                      </Box>
                    </NavLink>
                  </Tooltip>
                </Box>
              </Flex>
            </Show>
          </Box>

          <Box w={{ base: '100%', md: '50%' }} bg='white' pb='8'>
            <Box
              w={{
                base: '100%',
                sm: '400px',
                md: '100%',
                lg: '450px',
                xl: '490px'
              }}
              h='100%'
              m='auto'
              textAlign='left'
              px={{ base: '4', lg: '8', xl: '12', '2xl': '16' }}
              py={{ base: '4', md: '8' }}
              pb={{ base: '4', sm: '8' }}
            >
              <Heading
                fontWeight='semibold'
                mb='4'
                size={{ base: 'md', sm: 'lg', md: 'xl' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Sign In
              </Heading>

              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPass: ''
                }}
                validate={validateFields}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values }) => (
                  <Form>
                    <Field type='email' name='email' validate={values}>
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <Text pt='2' pb='1'>
                            Your Email:
                          </Text>
                          <Input
                            {...field}
                            placeholder='Email Address'
                            outline='1px solid lightgray'
                            size={{ base: 'sm', md: 'md' }}
                          />
                          {/* <FormErrorMessage>{form.errors.email}</FormErrorMessage> */}
                        </FormControl>
                      )}
                    </Field>

                    <Field type='password' name='password' validate={values}>
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <Text pt='2' pb='1'>
                            Password:
                          </Text>
                          <InputGroup size={{ base: 'sm', md: 'md' }}>
                            <Input
                              {...field}
                              minLength={8}
                              placeholder='Password'
                              outline='1px solid lightgray'
                              type={pass ? 'text' : 'password'}
                            />
                            <Tooltip
                              openDelay={1000}
                              placement='bottom-end'
                              label={pass ? 'Hide' : 'Show'}
                            >
                              <InputRightElement
                                w='10%'
                                h='100%'
                                color='#06c'
                                fontSize='lg'
                                cursor='pointer'
                                onClick={() => setPass(!pass)}
                                children={pass ? <ViewOffIcon /> : <ViewIcon />}
                              />
                            </Tooltip>
                          </InputGroup>
                          {/* <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage> */}
                        </FormControl>
                      )}
                    </Field>

                    <Flex
                      mt='4'
                      gap='2'
                      color='#06c'
                      align='center'
                      justify='space-between'
                    >
                      <Box lineHeight='4' display='block' fontWeight='medium'>
                        <Checkbox
                          value=''
                          size='sm'
                          colorScheme='gray'
                          borderColor='gray.400'
                        >
                          <Text>Remember Me</Text>
                        </Checkbox>
                      </Box>

                      <Show below='md'>
                        <Tooltip
                          openDelay={1000}
                          placement='bottom-end'
                          label='Forgot password'
                        >
                          <NavLink>
                            <Text
                              fontSize='sm'
                              lineHeight='4'
                              textAlign='left'
                              fontWeight='medium'
                              display='inline-block'
                            >
                              Forgot Password?
                            </Text>
                          </NavLink>
                        </Tooltip>
                      </Show>
                    </Flex>

                    <Button
                      mt='6'
                      w='100%'
                      color='white'
                      type='submit'
                      fontSize='lg'
                      bg={buttonBg}
                      textTransform='uppercase'
                      isLoading={isSubmitting || loading}
                      _hover={{ bg: { buttonBg } }}
                      _focus={{ bg: { buttonBg } }}
                      _active={{ bg: { buttonBg } }}
                      _disabled={{ bg: '#e64525', cursor: 'not-allowed' }}
                    >
                      Sign In
                    </Button>
                  </Form>
                )}
              </Formik>

              <Hide below='md'>
                <Box textAlign='center'>
                  <Tooltip
                    openDelay={1000}
                    placement='bottom-end'
                    label='Forgot password'
                  >
                    <NavLink>
                      <Text
                        mt='4'
                        color='#06c'
                        fontSize='sm'
                        lineHeight='4'
                        textAlign='center'
                        fontWeight='medium'
                        display='inline-block'
                      >
                        Forgot Password?
                      </Text>
                    </NavLink>
                  </Tooltip>
                </Box>
              </Hide>

              <Flex justify='center' align='center' mt='2' gap='4'>
                <Box h='1px' w='100%' bg='#004387' />
                <Text>OR</Text>
                <Box h='1px' w='100%' bg='#004387' />
              </Flex>

              <Button
                mt='4'
                w='100%'
                border='1px solid lightgrey'
                bg={signInBg}
                _hover={{ bg: signInBg }}
                _focus={{ bg: signInBg, border: '3px solid cornflowerblue' }}
              >
                <Flex justify='center' align='center' gap='3'>
                  <Image
                    w='6%'
                    src='https://www.adorama.com/col/assets/unified/auth-component/icon--apple.svg'
                    alt='apple-icon'
                  />
                  <Text>Sign in with Apple</Text>
                </Flex>
              </Button>
              <Button
                mt='4'
                w='100%'
                border='1px solid lightgrey'
                bg={signInBg}
                _hover={{ bg: signInBg }}
                _focus={{ bg: signInBg, border: '3px solid cornflowerblue' }}
              >
                <Flex justify='center' align='center' gap='3'>
                  <Image
                    w='6%'
                    src='https://www.adorama.com/col/assets/unified/auth-component/icon--google.svg'
                    alt='google-icon'
                  />
                  <Text>Sign in with Google</Text>
                </Flex>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box py={{ base: '6', md: '2' }} bg='#004387'>
        <Flex
          position='relative'
          zIndex='1000'
          top={{ base: '0', md: '5', xl: '8' }}
          color='white'
          justify='center'
          align='center'
          gap='4'
        >
          <NavLink>
            <Text
              fontSize='xs'
              letterSpacing='widest'
              textTransform='uppercase'
              _hover={{ textDecor: 'underline' }}
            >
              Privacy Policy
            </Text>
          </NavLink>
          <Box as='span' w='4px' h='4px' bg='#5791cb' borderRadius='full' />
          <NavLink>
            <Text
              fontSize='xs'
              letterSpacing='widest'
              textTransform='uppercase'
              _hover={{ textDecor: 'underline' }}
            >
              Terms of use
            </Text>
          </NavLink>
          <Box as='span' w='4px' h='4px' bg='#5791cb' borderRadius='full' />
          <NavLink>
            <Text
              fontSize='xs'
              letterSpacing='widest'
              textTransform='uppercase'
              _hover={{ textDecor: 'underline' }}
            >
              Contact us
            </Text>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
