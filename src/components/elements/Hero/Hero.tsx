import { Button, chakra, Flex, Heading, Link, shouldForwardProp, Stack, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { signIn } from "next-auth/react";
import { Logo } from "../Logo";

const imageAnimation = { scale: [0, 1.1, 1, 1.05, 1], rotate: [0, -720, 720, 0, 0], opacity: [0, 1, 1, 1, 1] };
const textAnimation = { translateX: [-100, 0], opacity: [0, 1] }
const transition = { duration: "3", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const Hero = () => {
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <ChakraBox animate={textAnimation} transition={transition} opacity="0">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'main'} as={'span'}>
                Ouroboros
              </Text>{' '}
              <br />{' '}
              <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: useBreakpointValue({ base: '20%', md: '30%' }), position: 'absolute', bottom: 1, left: 0, bg: 'main', zIndex: -1 }}>
                TradingView to DEX
              </Text>
            </Heading>
            <Text m="2" fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              You have a good <b>TradingView</b> strategy but you cannot execute order on your Exchange? <b>Ouroborus</b> solves your problems!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button rounded={'full'} bg={'main'} color={'white'} _hover={{  bg: 'main' }} onClick={() => signIn()}>
                Get Started
              </Button>
              <Button rounded={'full'}>
                <Link href="/documentation">
                  Documentation
                </Link>
              </Button>
            </Stack>
          </ChakraBox>
        </Stack>
      </Flex>
      <Flex flex={1} borderRadius='10%' align={'center'} justify={'center'} bgColor={useColorModeValue('gray.700', 'white')}>
        <ChakraBox animate={imageAnimation} transition={transition} opacity="0">
          <Logo/>
        </ChakraBox>
      </Flex>
    </Stack>
  );
};

export default Hero;
