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
    else if (!values.lastName) errors.lName = 'Required';
    else if (!values.password) errors.password = 'Required';
    else if (!values.confirmPass) errors.cPass = 'Required';
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

          <Formik>
            initialValues=
            {{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPass: ''
            }}
            validate={validateFields}
            onSubmit=
            {(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 1000);
            }}
            {({ form, field, isSubmitting }) => (
              <Form>
                <Field type='text' name='firstName'>{({field, form}) => (
                  <FormControl isInvalid={form.errors.fname && form.touched.name}>
                    
                  </FormControl>
                )}</Field>
                <FormErrorMessage>{form.errors.fName}</FormErrorMessage>
                <Field type='text' name='firstName' />
                <FormErrorMessage name='firstName' component='div' />
              </Form>
            )}
            <form>
              <Flex justify='center' align='center' mt='6' gap='2'>
                <FormControl isRequired>
                  <FormLabel isRequired>First Name:</FormLabel>
                  <Input type='text' placeholder='First Name' />
                </FormControl>

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
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup;
