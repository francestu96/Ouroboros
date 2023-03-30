import {
  Box,
  Button,
  FormControl,
  Input,
  useToast,
  FormLabel,
  Image,
  useColorMode
} from '@chakra-ui/react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const MyProfile = () => {
  const { data: session } = useSession();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setName] = useState(session?.user.name);
  const [email, setEmail] = useState(session?.user.email);
  const [image, setImage] = useState("");
  const [apollox_key, setKey] = useState("");
  const [apollox_secret, setSecret] = useState("");
  const [auth, setAuth] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        setKey(data.apollox_key || "");
        setSecret(data.apollox_secret || "");
        setAuth(data.auth || "");
        setImage(data.image || "");
        setLoading(false);
      });
  }, [])

  const formSubmit: any = async () => {
    let email = session?.user?.email || "";

    const res = await axios.post("/api/update", { email, name, apollox_key, apollox_secret })
      .then(async () => {
        await signIn('update-user', {
          redirect: true,
          callbackUrl: '/myprofile',
          email: email,
          name: name,
        });
        toast({description: "Profile up to date", status: 'success', position: 'bottom-right', isClosable: true, duration: 3000})
      })
      .catch((error) => {
        toast({description: error.response.data.error, status: 'error', position: 'bottom-right', isClosable: true, duration: 3000})
      });
  };

  return (
    <Box bgColor={colorMode == 'light' ? 'gray.700' : 'white'} borderRadius='lg' boxShadow='20px 20px 50px -20px' p="3em" m='auto' mt='10' w={["100%", "75%", "50%"]}>
      <Box mt='-8em' height={'8em'}>
        <Image m='auto' h='150' src={image ? image : colorMode == 'light' ? 'logo-hero-dark.png' : 'logo-hero-light.png' }  borderRadius='50%'/>
      </Box>
      <Formik initialValues={{}} validateOnChange={false} validateOnBlur={false} onSubmit={() => formSubmit()}>
        {(props) => (
          <Form style={{ width: "100%" }}>
            <Box display="flex" flexDirection="column" w="100%" mb={4}>
              <Field name="name">
                {() => (
                  <FormControl isRequired mb={6}>
                    <FormLabel textColor={colorMode == 'light' ? 'white' : 'black'} htmlFor="name">Name:</FormLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)} textColor={colorMode == 'light' ? 'white' : 'black'} _placeholder={{ color: 'gray.500' }} border={colorMode == 'light' ? '1px solid white' : '1px solid black'} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Your displayed Name"/>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {() => (
                  <FormControl isRequired mb={6}>
                    <FormLabel textColor={colorMode == 'light' ? 'white' : 'black'} htmlFor="email">Email:</FormLabel>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} textColor={colorMode == 'light' ? 'white' : 'black'} _placeholder={{ color: 'gray.500' }} border={colorMode == 'light' ? '1px solid white' : '1px solid black'} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="No email set"/>
                  </FormControl>
                )}
              </Field>
              <Field name="key">
                {() => (
                  <FormControl mb={6}>
                    <FormLabel textColor={colorMode == 'light' ? 'white' : 'black'} htmlFor="key">ApolloX Key:</FormLabel>
                    <Input value={apollox_key} onChange={(e) => setKey(e.target.value)} textColor={colorMode == 'light' ? 'white' : 'black'} _placeholder={{ color: 'gray.500' }} border={colorMode == 'light' ? '1px solid white' : '1px solid black'} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="No key set"/>
                  </FormControl>
                )}
              </Field>
              <Field name="secret">
                {() => (
                  <FormControl mb={6}>
                    <FormLabel textColor={colorMode == 'light' ? 'white' : 'black'} htmlFor="secret">ApolloX Secret:</FormLabel>
                    <Input value={apollox_secret} onChange={(e) => setSecret(e.target.value)} textColor={colorMode == 'light' ? 'white' : 'black'} _placeholder={{ color: 'gray.500' }} border={colorMode == 'light' ? '1px solid white' : '1px solid black'} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="No secret set"/>
                  </FormControl>
                )}
              </Field>
              <Field name="auth">
                {() => (
                  <FormControl mb={6}>
                    <FormLabel textColor={colorMode == 'light' ? 'white' : 'black'} htmlFor="auth">Authentication key:</FormLabel>
                    <Input disabled value={auth} onChange={(e) => setAuth(e.target.value)} textColor={colorMode == 'light' ? 'white' : 'black'} _placeholder={{ color: 'gray.500' }} border={colorMode == 'light' ? '1px solid white' : '1px solid black'} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Set ApolloX key and secret to create your authentication key"/>
                  </FormControl>
                )}
              </Field>
              <Button mt={6} bg='main' textColor='black' _hover={{bg: 'gray.700', textColor: 'white'}} isLoading={props.isSubmitting} type="submit">
                Update Information
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default MyProfile;
