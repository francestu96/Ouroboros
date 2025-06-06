import { Stack, useColorModeValue, Flex, Box, Heading, Center, chakra, shouldForwardProp, Link, VStack } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion'
import { Image, Text } from '@chakra-ui/react'
import { useRef } from "react";

const animation = { opacity: [0, 1] }
const transition = { duration: "1.5", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const HowItWorks = () => {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const isInView1 = useInView(ref1, { once: true })
    const isInView2 = useInView(ref2, { once: true })
    const isInView3 = useInView(ref3, { once: true })

    return (
        <VStack borderTop='1px' borderTopColor="chakra-border-color" borderRadius='3xl' mb="10">
            <Center pt="20" pb="5" fontFamily="CustomFont" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent">
                How It Works
            </Center>
            <Stack width="85%" bg={useColorModeValue('#2F3849', 'gray.200')} pt='6' rounded='lg' borderWidth="1px" borderColor="main" boxShadow="25px 25px 50px -12px rgba(255, 0, 0, 0.25)">
                <Flex justify="space-between" p='6' direction={['column', 'row']}>
                    <ChakraBox borderWidth="1px" borderColor="main" ref={ref1} animate={isInView1 ? animation : 'none'} transition={transition} p={6} m="2em 0" maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} opacity="0">
                        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
                            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/find.jpeg' alt="" />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Heading fontSize={['md', 'lg', 'xl']} fontWeight={800} textAlign='center'>
                                Discover Strategies
                            </Heading>
                            <Text fontWeight={400} fontSize={['sm', 'md', 'lg']}>
                                Explore our curated library of trading <b>strategies</b>, each designed with precision and thoroughly vetted by expert developers.<br/><br/>
                                Learn about the features and historical performance to find the perfect match for your trading goals.
                            </Text>
                        </Stack>
                    </ChakraBox>
                    <ChakraBox borderWidth="1px" borderColor="main" ref={ref2} animate={isInView2 ? animation : 'none'} transition={{ delay: "0.5", ...transition }} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
                        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
                            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/subs.jpeg' alt="" />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Heading fontSize={['md', 'lg', 'xl']} fontWeight={800} textAlign='center'>
                                Subscribe & Activate
                            </Heading>
                            <Text fontWeight={400} fontSize={['sm', 'md', 'lg']}>
                                Choose the <b>strategies</b> that resonate with your trading style and subscribe with a single click.<br/><br/>
                                Your orders will be executed automatically on <b><a href="https://hyperfoundation.org/" target="_blank">Hyperliquid</a></b>, allowing you to trade effortlessly.
                            </Text>
                        </Stack>
                    </ChakraBox>
                    <ChakraBox borderWidth="1px" borderColor="main" ref={ref3} animate={isInView3 ? animation : 'none'} transition={{ delay: "1", ...transition }} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
                        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
                            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/growth.jpeg' alt="" />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Heading fontSize={['md', 'lg', 'xl']} fontWeight={800} textAlign='center'>
                                Earn & Grow
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={400} fontSize={['sm', 'md', 'lg']}>
                                    Benefit from our fair revenue-sharing model where both strategy creators and referrers are rewarded for <b>profitable trades</b>.<br/><br/>
                                    Share your success and help <b>grow our community</b> while enjoying seamless automated trading.
                                </Text>
                            </Stack>
                        </Stack>
                    </ChakraBox>
                </Flex>
            </Stack>
        </VStack>
    );
};

export default HowItWorks;
