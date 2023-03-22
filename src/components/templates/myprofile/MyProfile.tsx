import {
  Box,
  Button,
  FormControl,
  Input,
  useToast,
  useColorMode,
  FormLabel,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { Error } from 'components/elements/Error';
import { Formik, Form, Field } from 'formik';
import { signOut, useSession } from 'next-auth/react';
import { useRef } from 'react';
import { useState } from 'react';

const MyProfile = () => {
  const { data: session } = useSession();
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [name, setName] = useState(session?.user.name);
  const [email, setEmail] = useState(session?.user.email);
  const [phone, setPhone] = useState(session?.user.phone);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null);

  const checkAlert = (actions: any) => {
    actions.setSubmitting(false);
    onOpen();
  };

  const formSubmit: any = async () => {
    onClose();
    let telegramId = session?.user?.telegramId || "";

    const res = await axios.post("/api/update", { telegramId, name, email, phone })
      .then(() => {
        signOut();
      })
      .catch((error) => {
        toast({description: error.response.data.error, status: 'error', position: 'bottom-right', isClosable: true, duration: 3000})
      });
  };

  return (
    <>
      { !session ? <Error msg={"<b>Sign In</b> to your account first"}/> :
        <Box bgColor={useColorModeValue('gray.700', 'white')} borderRadius='lg' boxShadow='20px 20px 50px -20px' p="3em" m='auto' mt='10' w={["100%", "75%", "50%"]}>
          <Box mt='-8em' height={'8em'}>
            <Image m='auto' h='150' src={useColorModeValue('logo-hero-dark.png', 'logo-hero-light.png')}  borderRadius='50%'/>
          </Box>
          <Formik initialValues={{}} validateOnChange={false} validateOnBlur={false} onSubmit={(_, actions) => {checkAlert(actions);}}>
            {(props) => (
              <Form style={{ width: "100%" }}>
                <Box display="flex" flexDirection="column" w="100%" mb={4}>
                  <Field name="telegramId">
                    {() => (
                      <FormControl isRequired mb={6}>
                        <FormLabel textColor={useColorModeValue('white', 'black')} htmlFor="telegramId">Telegram ID:</FormLabel>
                        <Tooltip label="Telegram ID cannot be changed" fontSize='sm' placement='top' hasArrow>
                          <Input value={session.user?.telegramId || ""} readOnly textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Telegram ID"/>
                        </Tooltip>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username">
                    {() => (
                      <FormControl isRequired mb={6}>
                        <FormLabel textColor={useColorModeValue('white', 'black')} htmlFor="username">Name:</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Your displayed Name"/>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {() => (
                      <FormControl mb={6}>
                        <FormLabel textColor={useColorModeValue('white', 'black')} htmlFor="email">Email:</FormLabel>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="No email set"/>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {() => (
                      <FormControl mb={6}>
                        <FormLabel textColor={useColorModeValue('white', 'black')} htmlFor="phone">Phone number:</FormLabel>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="No phone number set" focusBorderColor='input'/>
                      </FormControl>
                    )}
                  </Field>
                  <Button mt={6} bg='main' textColor='black' isLoading={props.isSubmitting} type="submit">
                    Update Information
                  </Button>
                  <AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
                    <AlertDialogOverlay/>
                    <AlertDialogContent>
                      <AlertDialogHeader>Update Information?</AlertDialogHeader>
                      <AlertDialogCloseButton />
                      <AlertDialogBody>For updating your information you need to Sign Out.<br></br>Do you want to continue?</AlertDialogBody>
                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          No
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={formSubmit}>
                          Yes
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      }
    </>
  );
};

export default MyProfile;
