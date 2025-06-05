import { Box, Button, Heading, HStack, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import { IoDocument } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import AwareModal from "./AwareModal";

const Hero = ({ appUrl }: { appUrl: string }) => {
    const { isOpen: isOpenModal, onClose: onCloseModal, onOpen: onOpenModal } = useDisclosure();
    
    return (
        <Stack backgroundImage="abstract.png" minH={"90vh"} direction={["column", "column", "column", "column", "row"]} width="100%" overflow="hidden" gap={["5", "0"]} backgroundSize="cover" backgroundPosition="right" >
            <Stack px={["10", "15", "20", "20", "20", "40"]} py="10" gap={["5", "5", "5", "5", "5", "10"]} w={["100%", "100%", "100%", "100%", "40%"]} justifyContent="center" className="animated-hero-text">
                <Heading fontSize={["xl", "2xl", "3xl", "4xl", "3xl", "5xl"]}>
                    <Text as={"span"}>
                        Welcome to
                    </Text><br/>
                    <Text px="5" fontFamily="CustomFont" backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent" as={"span"}>
                        Ouroboros
                    </Text><br/>
                    <Text px="10" fontSize={["xl"]} fontWeight="normal" color="gray.200">
                        "Where Gains Feed Gains"
                    </Text>
                </Heading>
                <Text m="2" fontSize={["xs", "s", "md", "lg", "md", "lg"]}>
                    Be part of <b>Ouroboros</b>, the cutting-edge platform for managing innovative trading strategies.<br/>
                    Our system harnesses the power of <b>TradingView's PineScript</b> and the efficiency of the <b><a href="https://hyperfoundation.org/" target="_blank">Hyperliquid</a></b> DEX to execute trades seamlessly.<br/><br/> 
                    We bring together <b>expert-reviewed</b> strategies and <b>community insights</b> to create a dynamic trading environment. 
                    Every strategy is carefully vetted by our developers before it goes live, ensuring reliability and performance.<br/><br/> 
                    Dive in, explore, and unleash the full potential of your trading journey. <br/><b>Welcome aboard!</b>
                </Text>
                <HStack>
                    <Button leftIcon={<FaPlay />} rounded={"lg"} bg={"main"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }} onClick={onOpenModal}>
                        Go to the App
                    </Button>
                    <Link href="https://ourboros-doc.gitbook.io/ouroboros/" target="_blank">
                        <Button leftIcon={<IoDocument />} rounded={"lg"} bg={"gray.700"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Documentation
                        </Button>
                    </Link>
                </HStack>
            </Stack>
            <Box className="animated-hero-border" w={["100%", "100%", "100%", "100%", "60%"]} display="flex" position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.2%" h="98%" objectFit="cover" src="anonymous.jpg" alt="background" clipPath={["polygon(0 0, 100% 0, 100% 96%, 0 57.5%)", "polygon(0 0, 100% 0%, 100% 100%, 0 60.5%)"]} />
            </Box>
            <AwareModal appUrl={appUrl || ""} isOpen={isOpenModal} onClose={onCloseModal}/>
        </Stack>
    );
};

export default Hero;
