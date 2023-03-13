import { Button, Flex, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'#DA3F5E'} as={'span'}>
              Ouroboros
            </Text>{' '}
            <br />{' '}
            <Text as={'span'} position={'relative'} _after={{ content: "''", width: 'full', height: useBreakpointValue({ base: '20%', md: '30%' }), position: 'absolute', bottom: 1, left: 0, bg: '#DA3F5E', zIndex: -1 }}>
              TradingView to DEX
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded={'full'} bg={'#DA3F5E'} color={'white'} _hover={{  bg: '#DA3F5E' }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Ouroboros logo'}  src="/grid.png" borderRadius='50' />
      </Flex>
    </Stack>
  );
};

export default Hero;
