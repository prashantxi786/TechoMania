import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Form, Field, Formik, ErrorMessage } from 'formik';

const Signup = () => {
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

  return (
    <Box height='100vh'>
      <Box
        w='100%'
        zIndex='100'
        overflow='hidden'
        position='absolute'
        bg='linear-gradient(180deg, #003263 0%, #004387 50%)'
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

      <Flex
        w='65%'
        m='auto'
        top='16'
        zIndex='1000'
        align='center'
        justify='center'
        borderRadius='9px'
        position='relative'
        border='2px solid yellow'
        background='blackAlpha.300'
        boxShadow='5px 16px 24px #00000080'
      >
        <Box w='50%' m='auto' color='white'>
          <Link to='/'>
            <Image
              w='30%'
              m='auto'
              display='inline-block'
              src='https://i.postimg.cc/ncGjs3gP/Techo-Mania-1.png'
              alt='logo'
            />
          </Link>
        </Box>

        <Box
          w='50%'
          h='100%'
          m='auto'
          textAlign='left'
          px='16'
          py='8'
          bg='white'
        >
          <Heading fontWeight='semibold'>Create an Account</Heading>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPass: ''
            }}
            validate={validateFields}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <Flex justify='center' align='center' mt='6' gap='2'>
                  <Field type='text' name='firstName' validate={values}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.fName && form.touched.firstName}
                      >
                        <FormLabel>First Name:</FormLabel>
                        <Input {...field} placeholder='First Name' />
                        {/* <FormErrorMessage>{form.errors.fName}</FormErrorMessage> */}
                      </FormControl>
                    )}
                  </Field>

                  <Field type='text' name='lastName' validate={values}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.lName && form.touched.lastName}
                      >
                        <FormLabel>Last Name:</FormLabel>
                        <Input {...field} placeholder='Last Name' />
                        {/* <FormErrorMessage>{form.errors.lName}</FormErrorMessage> */}
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Field type='email' name='email' validate={values}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Your Email:</FormLabel>
                      <Input {...field} placeholder='Email Address' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;

/*
<form>
              <Flex justify='center' align='center' mt='6' gap='2'>
                <FormControl isRequired></FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name:</FormLabel>
                  <Input type='text' placeholder='Last Name' />
                </FormControl>
              </Flex>

              <FormControl isRequired mt='4'>
                <FormLabel>Your Email:</FormLabel>
                <Input type='email' placeholder='Email Address' />
              </FormControl>

              <FormControl isRequired mt='4'>
                <FormLabel>Password:</FormLabel>
                <Input type='password' placeholder='Password' />
              </FormControl>

              <FormControl isRequired mt='4'>
                <FormLabel>Confirm Password:</FormLabel>
                <Input type='password' placeholder='Confirm Password' />
              </FormControl>

              <Button
                mt='6'
                w='100%'
                color='white'
                fontSize='lg'
                textTransform='uppercase'
                bg={buttonBg}
                _hover={{ bg: { buttonBg } }}
                _focus={{ bg: { buttonBg } }}
                _active={{ bg: { buttonBg } }}
                _disabled={{ bg: { buttonBg } }}
              >
                Create Account
              </Button>
            </form>
 */
