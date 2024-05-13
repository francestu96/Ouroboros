import { Box, Button, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import { IoDocument } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <Stack backgroundImage="abstract.png" minH={"90vh"} direction={["column", "column", "column", "column", "row"]} width="100%" overflow="hidden" gap={["5", "0"]} backgroundSize="cover" backgroundPosition="right" >
            <Stack px={["10", "15", "20", "20", "20", "40"]} py="10" gap={["5", "5", "5", "5", "5", "10"]} w={["100%", "100%", "100%", "100%", "40%"]} justifyContent="center" className="animated-hero-text">
                <Heading fontSize={["xl", "2xl", "3xl", "4xl", "3xl", "5xl"]}>
                    <Text as={"span"}>
                        Welcome to
                    </Text>
                    <br />
                    <Text fontFamily="CustomFont" backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent" as={"span"}>
                        Ouroboros
                    </Text>
                </Heading>
                <Text m="2" fontSize={["xs", "s", "md", "lg", "md", "lg"]}>
                    Welcome to Ouroboros, your gateway to seamless integration between your <b>TradingView</b> trading strategies and <b>GMX</b> exchange.<br/><br/>
                    Step into a world where trading becomes a finely tuned art, where precision meets innovation. Whether you're a seasoned trader or just starting out, <b>Ouroboros</b> empowers you to harness the power of your strategies with the efficiency of GMX exchange.<br/><br/> 
                    Dive in, explore, and unleash the full potential of your trading journey. <br/><b>Welcome aboard!</b>
                </Text>
                <HStack>
                    <Link href="/authkey">
                        <Button leftIcon={<FaPlay />} rounded={"full"} bg={"main"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://cisco0x60.gitbook.io/ouroboros/" target="_blank">
                        <Button leftIcon={<IoDocument />} rounded={"full"} bg={"gray.700"} color={"white"} _hover={{ bg: "gray.200", color: "gray.700" }}>
                            Documentation
                        </Button>
                    </Link>
                </HStack>
            </Stack>
            <Box className="animated-hero-border" w={["100%", "100%", "100%", "100%", "60%"]} display="flex" position="relative" justifyContent="end" clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 60%)">
                <Image className="animated-hero-img" w="99.2%" h="98%" objectFit="cover" src="anonymous.jpg" alt="background" clipPath={["polygon(0 0, 100% 0, 100% 96%, 0 57.5%)", "polygon(0 0, 100% 0%, 100% 100%, 0 60.5%)"]} />
            </Box>
        </Stack>
    );
};

export default Hero;
