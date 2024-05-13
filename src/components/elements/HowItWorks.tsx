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
      <Center pt="20" pb="10" fontFamily="CustomFont" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent">
        How It Works
      </Center>
      <Stack width="85%" bg={useColorModeValue('#2F3849', 'gray.200')} pt='6' rounded='lg' borderWidth="1px" borderColor="main" boxShadow="25px 25px 50px -12px rgba(255, 0, 0, 0.25)">
        <Flex justify="space-between" p='6' direction={['column', 'row']}>
          <ChakraBox borderWidth="1px" borderColor="main" ref={ref1} animate={isInView1 ? animation : 'none'} transition={transition} p={6} m="2em 0" maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} opacity="0">
            <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/desk.png' alt="" />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'CustomFont'} fontWeight={800} textAlign='center'>
                Create your auth key
              </Heading>
              <Text fontWeight={400} fontSize="lg">
                Create your <Link href="/authkey" color="main" target="_blank">Authentication Key</Link> in our platform to be able to connect your wallet to <b>TradingView</b><br/><br/>Your <b>private key</b> is not stored anyware to avoid data leaks! 
              </Text>
            </Stack>
          </ChakraBox>
          <ChakraBox borderWidth="1px" borderColor="main" ref={ref2} animate={isInView2 ? animation : 'none'} transition={{ delay: "0.5", ...transition }} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
            <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/connect.png' alt="" />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'CustomFont'} fontWeight={800} textAlign='center'>
                Configure TradingView alerts
              </Heading>
              <Text fontWeight={400} fontSize="lg">
                Create <b>TradingView</b> alerts based on your strategies with your trading instructions.<br/><br/>You just need to setup the alert <b>webhook</b> to point to Ouroboros.
              </Text>
            </Stack>
          </ChakraBox>
          <ChakraBox borderWidth="1px" borderColor="main" ref={ref3} animate={isInView3 ? animation : 'none'} transition={{ delay: "1", ...transition }} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={useColorModeValue('25px 25px 50px -12px rgba(255, 255, 255, 0.25)', '25px 25px 50px -12px rgba(0, 0, 0, 0.7)')} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
            <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'} _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1 }} _groupHover={{ _after: { filter: 'blur(20px)' } }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/trade.png' alt="" />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'CustomFont'} fontWeight={800} textAlign='center'>
                Automatic execution by DEX
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize="lg">
                  <b>Ouroboros</b> will process the alert message and execute your orders to <b>GMX</b> DEX within 1 second.<br/><br/>You don't need to worry about anything and you save time to make your strategies better and better!
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
