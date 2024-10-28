import { Box, Button, Input, useToast, Image, useColorModeValue, Stack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useState } from 'react';
import axios from 'axios';

const MyProfile = () => {
    const toast = useToast();
    const [privKey, setKey] = useState("");
    const [auth, setAuth] = useState("");
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const encrypt = async () => {
        try {
            const res = await axios.post("/api/encrypt", { privKey });
            setAuth(res.data.authKey);
        }
        catch (error: any) {
            toast({ description: error.response.data.error, status: 'error', position: 'bottom-right', isClosable: true, duration: 3000 })
        }
    };

    return (
        <Box bgImage="/abstract.png" display="flex">
            <Box bgColor={useColorModeValue('gray.700', 'white')} display="grid" borderRadius='lg' boxShadow='20px 20px 50px -20px' p={["1em", "2em", "3em"]} m='auto' my='28' minH="38vh" w={["90%", "75%", "50%"]}>
                <Box mt='-8em' height={'8em'}>
                    <Image alt="" m='auto' h='150' src={useColorModeValue('logo-hero-dark.png', 'logo-hero-light.png')} borderRadius='50%' />
                </Box>
                <Stack display="flex" flexDirection="column">
                    <InputGroup>
                        <InputRightElement onClick={handleClick} cursor="pointer">
                            {
                                show ? (
                                    <FiEyeOff color='black' />
                                ) : (
                                    <FiEye color='black' />
                                )
                            }
                        </InputRightElement>
                        <Input value={privKey} onChange={(e) => setKey(e.target.value)} textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Wallet private key" type={show ? 'text' : 'password'}/>
                    </InputGroup>
                    <InputGroup>
                        <InputRightElement cursor="pointer" onClick={() => { navigator.clipboard.writeText(auth); toast({ description: "Auth Key copied", status: 'success', position: 'bottom-right', isClosable: true, duration: 2000 }) }}>
                            <CopyIcon color='black' />
                        </InputRightElement>
                        <Input disabled value={auth} textColor={useColorModeValue('white', 'black')} _placeholder={{ color: 'gray.500' }} border={useColorModeValue('1px solid white', '1px solid black')} focusBorderColor='input' _hover={{ borderColor: "main" }} placeholder="Your Auth Key" />
                    </InputGroup>
                    <Button mt={6} bg='main' _hover={{ bg: 'gray.700', textColor: 'white' }} onClick={encrypt}>
                        Create Auth Key
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default MyProfile;
