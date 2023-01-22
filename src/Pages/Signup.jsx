import {
  Box,
  Flex,
  Show,
  Hide,
  Text,
  Image,
  Input,
  VStack,
  Button,
  Tooltip,
  Heading,
  Checkbox,
  useToast,
  InputGroup,
  FormControl,
  CheckboxGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import { signup } from '../Redux/Authentication/auth.action';
import { ChevronRightIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pass, setPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const { loading, isSignedUp, error } = useSelector(
    (store) => store.authManager
  );
  const buttonBg =
    'linear-gradient(180deg,#fc5d37 0%,#ed5132 50%,#e64525 100%)';

  const validateFields = (values) => {
    const errors = {};
    if (!values.firstName) errors.fName = 'Required';
    if (!values.lastName) errors.lName = 'Required';

    if (!values.email) errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) errors.password = 'Required';
    if (!values.confirmPass) errors.cPass = 'Required';
    else if (values.confirmPass !== values.password) {
      errors.cPass = "Password doesn't match";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      dispatch(signup({ ...values }));
      setTimeout(() => navigate('/login'), 4000);
      setSubmitting(false);
      resetForm({ values: '' });
    }, 1000);
  };

  useEffect(() => {
    document.title = 'Sign Up';
    if (isSignedUp) {
      toast({
        title: 'Welcome!',
        description: 'Account successfully created.',
        position: 'top',
        status: 'success',
        duration: 3000,
        isClosable: false
      });
    }
    if (error) {
      toast({
        title: 'User already exists!',
        description: 'Please try again with a different email.',
        position: 'top',
        status: 'error',
        duration: 3000,
        isClosable: false
      });
    }
  }, [isSignedUp, error]);

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
            align='center'
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
                mb='-150px'
                pos='relative'
                top={{ base: '0', md: '30vh' }}
              >
                <Text fontSize='xl' letterSpacing='wider'>
                  Have an Account?
                </Text>
                <Tooltip
                  label='Sign In'
                  openDelay={1000}
                  placement='bottom-end'
                >
                  <NavLink to='/login'>
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
                          Sign In
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
                  display='inline-block'
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
                    Have an Accout?
                  </Text>
                  <Tooltip
                    label='Sign In'
                    openDelay={1000}
                    placement='bottom-end'
                  >
                    <NavLink to='/login'>
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
                            Sign In
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

          <Box w={{ base: '100%', md: '50%' }} bg='white'>
            <Box
              w={{
                base: '100%',
                sm: '400px',
                md: '100%',
                lg: '450px',
                xl: '500px'
              }}
              h='100%'
              m='auto'
              textAlign='left'
              px={{ base: '4', lg: '8', xl: '12', '2xl': '16' }}
              py={{ base: '4', md: '8' }}
              pb={{ base: '4', sm: '8' }}
            >
              <Heading
                size={{ base: 'md', sm: 'lg', md: 'xl' }}
                fontWeight='semibold'
                textAlign={{ base: 'center', md: 'left' }}
              >
                Create an Account
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
                    <Flex
                      justify='center'
                      align='center'
                      gap='2'
                      mt={{ base: '2', md: '4' }}
                    >
                      <Field type='text' name='firstName' validate={values}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.fName && form.touched.firstName
                            }
                          >
                            <Text pb='1'>First Name:</Text>
                            <Input
                              {...field}
                              placeholder='First Name'
                              outline='1px solid lightgray'
                              size={{ base: 'sm', md: 'md' }}
                            />
                            {/* <FormErrorMessage>{form.errors.fName}</FormErrorMessage> */}
                          </FormControl>
                        )}
                      </Field>

                      <Field type='text' name='lastName' validate={values}>
                        {({ field, form }) => (
                          <FormControl
                            isRequired
                            isInvalid={
                              form.errors.lName && form.touched.lastName
                            }
                          >
                            <Text pb='1'>Last Name:</Text>
                            <Input
                              {...field}
                              placeholder='Last Name'
                              outline='1px solid lightgray'
                              size={{ base: 'sm', md: 'md' }}
                            />
                            {/* <FormErrorMessage>{form.errors.lName}</FormErrorMessage> */}
                          </FormControl>
                        )}
                      </Field>
                    </Flex>

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

                    <Field type='password' name='confirmPass' validate={values}>
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.cPass && form.touched.confirmPass
                          }
                        >
                          <Text pt='2' pb='1'>
                            Confirm Password:
                          </Text>
                          <InputGroup size={{ base: 'sm', md: 'md' }}>
                            <Input
                              {...field}
                              minLength={8}
                              outline='1px solid lightgray'
                              placeholder='Confirm Password'
                              type={confirmPass ? 'text' : 'password'}
                            />
                            <Tooltip
                              openDelay={1000}
                              placement='bottom-end'
                              label={confirmPass ? 'Hide' : 'Show'}
                            >
                              <InputRightElement
                                w='10%'
                                h='100%'
                                color='#06c'
                                fontSize='lg'
                                cursor='pointer'
                                onClick={() => setConfirmPass(!confirmPass)}
                                children={
                                  confirmPass ? <ViewOffIcon /> : <ViewIcon />
                                }
                              />
                            </Tooltip>
                          </InputGroup>
                          {/* <FormErrorMessage>
                            {form.errors.cPass}
                          </FormErrorMessage> */}
                        </FormControl>
                      )}
                    </Field>

                    <CheckboxGroup colorScheme='gray'>
                      <VStack
                        mt='6'
                        spacing='3'
                        align='left'
                        color='#06c'
                        lineHeight='4'
                        fontWeight='medium'
                      >
                        <Box display='block'>
                          <Checkbox value='' size='sm' borderColor='gray.400'>
                            <Text fontSize='sm'>
                              Yes, I would like to receive expert tips, special
                              offers, and product news.
                            </Text>
                          </Checkbox>
                        </Box>
                        <Box display='block'>
                          <Checkbox value='' size='sm' borderColor='gray.400'>
                            <Text fontSize='sm'>
                              Yes, sign me up for TechnoMania Rewards.
                            </Text>
                          </Checkbox>
                        </Box>
                        <Hide below='md'>
                          <Box display='block'>
                            <Checkbox value='' size='sm' borderColor='gray.400'>
                              <Text fontSize='sm'>Remember Me.</Text>
                            </Checkbox>
                          </Box>
                        </Hide>
                      </VStack>
                    </CheckboxGroup>

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
                      Create Account
                    </Button>
                  </Form>
                )}
              </Formik>
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

export default Signup;
