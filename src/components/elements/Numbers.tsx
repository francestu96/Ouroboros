import { Center, VStack, Text, Image, Stack, SimpleGrid, chakra, shouldForwardProp, Box } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from "react";

const Numbers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const ChakraBox = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
    })
    
    return (
        <VStack width="100%" gap="0" borderTopWidth="thin" borderBottomWidth="thin" borderTopRadius='3xl' backgroundImage="abstract.png">
            <Center id="numbers" py="20" width="full">
                <VStack gap="10" fontSize="2xl" width={["90%", "80%", "70%"]}>
                    <Text fontFamily="CustomFont" fontWeight="bold" fontSize="4xl" px="10" color="main" backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent">
                        Our Numbers
                    </Text>
                    <Stack ref={ref} direction={["column", "row"]} alignItems="center" gap="20" >
                        <SimpleGrid columns={2} textAlign="center">
                            <ChakraBox borderBottom="1px solid #3bb7ff" borderRight="1px solid #3bb7ff" animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.5" }} opacity="0">
                                <VStack pr={["5", "10"]} pb={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={120} duration={5}/>+</Text>
                                    <Text color="gray.300" fontSize="xl" fontFamily="CustomFont">Current Users</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox borderBottom="1px solid #3bb7ff" animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <VStack pl={["5", "10"]} pb={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={15000} start={14900} duration={5}/>$+</Text>
                                    <Text color="gray.300" fontSize="xl" fontFamily="CustomFont">Users Profits</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.6"}} opacity="0">
                                <VStack borderRight="1px solid #3bb7ff" pr={["5", "10"]} pt={["5", "10"]}>
                                    <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={5000} start={4900} duration={5}/>+</Text>
                                    <Text color="gray.300" fontSize="xl" fontFamily="CustomFont">Managed Alerts</Text>
                                </VStack>
                            </ChakraBox>
                            <ChakraBox animate={isInView ? { translateX: [-200, 0], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut", delay: "0.8" }} opacity="0">
                                <VStack pl={["5", "10"]} pt={["5", "10"]}>
                                <Text color="main" fontSize={["2xl", "4xl"]}><CountUp useEasing={false} end={3000} start={2900} duration={5}/>$+</Text>
                                    <Text color="gray.300" fontSize="xl" fontFamily="CustomFont">Saved Fees</Text>
                                </VStack>
                            </ChakraBox>
                        </SimpleGrid>
                        <Box overflow={["hidden", "hidden", "hidden", "unset"]}>
                            <ChakraBox animate={isInView ? { translateX: [200, 0], rotate: [720, 0], scale: [0, 1], opacity: [0, 1] } : 'none'} transition={{ duration: "1.5", ease: "easeInOut" }} opacity="0">
                                <Image src={"logo.png"} height={["250px", "400px"]} alt="Logo"/>
                            </ChakraBox>
                        </Box>
                    </Stack>
                </VStack>
            </Center>
        </VStack>
    );
};

export default Numbers;
