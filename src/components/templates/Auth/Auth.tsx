import { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Router from "next/router";

interface IDivicerProps {
  word?: string;
}

const Divider = ({ word }: IDivicerProps) => {
  return (
    <>
      {word ? (
        <Flex w="100%" alignItems="center" justifyContent="center" gap={2} mb={4}>
          <Box w="100%" border="solid" borderBottom={2} rounded="full"></Box>
          <Text>Or</Text>
          <Box w="100%" border="solid" borderBottom={2} rounded="full"></Box>
        </Flex>
      ) : (
        <Box w="100%" border="solid" borderBottom={2} rounded="full" mb={6}/>
      )}
    </>
  );
};

const Auth: NextPage = ({ providers }: any) => {
  const toast = useToast();
  const [authType, setAuthType] = useState("Login");
  const oppAuthType: { [key: string]: string } = {
    Login: "Register",
    Register: "Login",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ProvidersButtons = ({ providers }: any) => (
    <Flex direction="column" w="100%">
      {Object.values(providers).map(
        (provider: any) =>
          provider.name !== "Credentials" && (
            <Button
              key={provider.name}
              mb={4}
              bg='input'
              type="submit"
              onClick={() => {
                signIn(provider.id, {
                  callbackUrl: '/',
                });
              }}
            >
              <Box>Sign in with {provider.name}</Box>
            </Button>
          )
      )}
    </Flex>
  );

  const redirectToHome = () => {
    const { pathname } = Router;
    if (pathname === "/auth") {
      Router.push("/");
    }
  };

  const registerUser = async () => {
    const res = await axios.post("/api/register", { name, email, password })
      .then(async () => {
        await loginUser();
        redirectToHome();
      })
      .catch((error) => {
        toast({description: error.response.data.error, status: 'error', position: 'bottom-right', isClosable: true, duration: 3000})
      });
  };

  const loginUser = async () => {
    const res: any = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}`
    });

    res.error ? toast({description: res.error, status: 'error', position: 'bottom-right', isClosable: true, duration: 3000}) : redirectToHome();
  };

  const formSubmit = (actions: any) => {
    actions.setSubmitting(false);

    authType === "Login" ? loginUser() : registerUser();
  };

  return (
    <Box w={["100%", "100%", "75%", "50%"]} rounded="md" bgGradient="linear(to-r, #ffffff80, #ffffff20)" p={12} m="auto">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading size="xl">{authType}</Heading>
        <Text fontSize="sm" mb={6}>
          {authType === "Login" ? "Not registered yet? " : "Already have an account? "}
          <button onClick={() => setAuthType(oppAuthType[authType])}>
            <Text as="u">{oppAuthType[authType]}</Text>
          </button>
        </Text>

        <Divider />

        <ProvidersButtons providers={providers} />

        <Divider word="Or" />

        <Formik initialValues={{}} validateOnChange={false} validateOnBlur={false} onSubmit={(_, actions) => {formSubmit(actions);}}>
          {(props) => (
            <Form style={{ width: "100%" }}>
              <Box display="flex" flexDirection="column" w="100%" mb={4}>
                {authType === "Register" && (
                  <Field name="name">
                    {() => (
                      <FormControl isRequired mb={6}>
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your displayed Name" focusBorderColor='input'/>
                      </FormControl>
                    )}
                  </Field>
                )}
                <Field name="id">
                  {() => (
                    <>
                      <FormControl isRequired mb={6} mt={2}>
                        <FormLabel htmlFor="email">
                          Email:
                        </FormLabel>
                        <Input flex="84" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" focusBorderColor='input'/>
                      </FormControl>
                    </>
                  )}
                </Field>
                <Field name="password">
                  {() => (
                    <FormControl isRequired mb={3}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" focusBorderColor='input'/>
                    </FormControl>
                  )}
                </Field>
                <Button mt={6} bg='main' isLoading={props.isSubmitting} type="submit">
                  {authType}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};

export default Auth;
