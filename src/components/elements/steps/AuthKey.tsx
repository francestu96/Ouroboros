import { useToast, Stack, InputGroup, InputRightElement, Input, useColorModeValue, Button, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CopyIcon, InfoIcon } from "@chakra-ui/icons";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import { BiSolidParty } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

export const AuthKey = () => {
    const toast = useToast();
    const [privKey, setKey] = useState("");
    const [auth, setAuth] = useState("");
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

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
        <Stack display="flex" flexDirection="column" width={"70%"} fontWeight="500">
            <List spacing={3} textColor={useColorModeValue('white', 'black')}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Get your trading wallet <b>Private Key</b>. the procedure depends on the wallet you chose to use. Refer to its documentation to retrive your private key
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='red.500' />
                  <b>IMPORTANT NOTE:</b> <u>DO NOT use your wallet <b>PASS PHRASE</b>!</u><br/>The private key is a <b>hexadecimal string</b>.<br/><b>DO NOT share it with ANYONE!</b>
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    Paste you <b>Private Key</b> in the below field and click on <b><i>Generate Auth Key</i></b>
                </ListItem>
            </List>
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
            <Button mt={3} bg='main' _hover={{ bg: 'gray.700', textColor: 'white' }} onClick={encrypt}>
                Generate Auth Key
            </Button>
            <List spacing={3} textColor={useColorModeValue('white', 'black')}>
                <ListItem>
                    <ListIcon as={BiSolidParty} color='green.500' />
                    Copy your <b>Auth Key</b>, you will need it in the next step!
                </ListItem>
            </List>
        </Stack>
    )
}