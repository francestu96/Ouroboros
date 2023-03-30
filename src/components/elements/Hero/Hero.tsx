import { Button, chakra, Flex, Heading, shouldForwardProp, Stack, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const imageAnimation = { scale: [0, 1.1, 1, 1.05, 1], rotate: [0, -720, 720, 0, 0] };
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
          <ChakraBox animate={textAnimation} transition={transition}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'main'} as={'span'}>
                Ouroboros
              </Text>{' '}
              <br />{' '}
              <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: useBreakpointValue({ base: '20%', md: '30%' }), position: 'absolute', bottom: 1, left: 0, bg: 'main', zIndex: -1 }}>
                TradingView to DEX
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It&aposs
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button rounded={'full'} bg={'main'} color={'white'} _hover={{  bg: 'main' }}>
                Create Project
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </ChakraBox>
        </Stack>
      </Flex>
      <Flex flex={1} borderRadius='10%' align={'center'} justify={'center'} bgColor={useColorModeValue('gray.700', 'white')}>
        <ChakraBox animate={imageAnimation} transition={transition}>
          <Image alt={'Ouroboros logo'} src={useColorModeValue("/logo-hero-light.png", "/logo-hero-dark.png")} borderRadius='inherit'/>
        </ChakraBox>
      </Flex>
    </Stack>
  );
};

export default Hero;
