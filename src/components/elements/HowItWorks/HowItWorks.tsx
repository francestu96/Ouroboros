import { Stack, useColorModeValue, Flex, Box, Heading, Center, keyframes, chakra, shouldForwardProp, Link } from "@chakra-ui/react";
import { Image, Text } from '@chakra-ui/react'
import { motion, isValidMotionProp, useInView } from 'framer-motion'
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
    <>
      <Center mb='6' color='main' as={'span'} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign='center' fontWeight='bold' mt='12' borderTop='1px' borderTopColor="chakra-border-color" borderRadius='xl'>How It Works</Center>
      <Stack bg={useColorModeValue('#2F3849', 'white')} pt='6' rounded='lg'>
        <Flex justify="space-between" p='6' direction={['column', 'row']}>
          <ChakraBox ref={ref1} animate={isInView1 ? animation : 'none' } transition={transition} p={6} m="2em 0" maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} opacity="0">
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/desk.png', filter: 'blur(15px)', zIndex: -1}}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/desk.png' alt=""/>
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textAlign='center'>
                Attach Ouroboros to DEX
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  Sign in to Ouroboros and to <Link href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX (V1)</Link>. Get your API key and your secret and create your auth key
                </Text>
              </Stack>
            </Stack>
          </ChakraBox>
          <ChakraBox ref={ref2} animate={isInView2 ? animation : 'none' } transition={{delay: "0.5", ...transition}} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/connect.png', filter: 'blur(15px)', zIndex: -1}}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/connect.png' alt=""/>
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textAlign='center'>
                Configure TradingView alerts
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  Create TradingView alerts based on your strategies with your trading instructions
                </Text>
              </Stack>
            </Stack>
          </ChakraBox>
          <ChakraBox ref={ref3} animate={isInView3 ? animation : 'none' } transition={{delay: "1", ...transition}} m="2em 0" p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1} opacity="0">
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{ transition: 'all .3s ease', content: '""', w: 'full', h: 'full', pos: 'absolute', top: 5, left: 0, backgroundImage: '/trade.png', filter: 'blur(15px)', zIndex: -1}}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/trade.png' alt=""/>
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textAlign='center'>
                Automatic execution by DEX
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  Ouroboros will process the alert message and execute your instructions to DEX within 1 second
                </Text>
              </Stack>
            </Stack>
          </ChakraBox>
        </Flex>
      </Stack>
    </>
  );
};

export default HowItWorks;
