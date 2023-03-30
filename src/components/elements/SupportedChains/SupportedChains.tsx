import { useColorModeValue, Grid, GridItem, chakra, shouldForwardProp, Flex, Image, HStack } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion'
import { Text } from '@chakra-ui/react'
import { useRef } from "react";

const animation = { opacity: [0, 1] }
const transition = { duration: "1.5", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SupportedChains = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <>
      <Text mb='6' color='main' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Supported Chains</Text>
      <Grid  templateRows='repeat(2, 1fr)' templateColumns='repeat(8, 1fr)' gap={4} borderWidth='1px' rounded='lg' p='6'>
        <GridItem rowSpan={2} colSpan={2} margin='auto'>
          <Text>This is the list of the currently supported Exchanges. This list is going to be expanded for new customer requests, so do not esistate to contact us!</Text>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
          <ChakraBox ref={ref} animate={isInView ? animation : 'none' } transition={transition}>
            <HStack>
              <Flex flex='25' p='6'>
                <Image rounded={'lg'} objectFit={'cover'} src='/eth.svg' alt=""/>
              </Flex>
              <Flex flex='75' p='6' textColor={useColorModeValue('white', 'black')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Flex>
            </HStack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
          <ChakraBox ref={ref} animate={isInView ? animation : 'none' } transition={{delay: "0.5", ...transition}}>
            <HStack>
              <Flex flex='25' p='6'>
                <Image rounded={'lg'} objectFit={'cover'} src='/bsc.svg' alt=""/>
              </Flex>
              <Flex flex='75' p='6' textColor={useColorModeValue('white', 'black')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Flex>
            </HStack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
         <ChakraBox ref={ref} animate={isInView ? animation : 'none' } transition={{delay: "1", ...transition}}>
            <HStack>
              <Flex flex='25' p='6'>
                <Image rounded={'lg'} objectFit={'cover'} src='/arbitrum.svg' alt=""/>
              </Flex>
              <Flex flex='75' p='6' textColor={useColorModeValue('white', 'black')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Flex>
            </HStack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')}>
          <ChakraBox ref={ref} animate={isInView ? animation : 'none' } transition={{delay: "1.5", ...transition}}>
            <HStack>
              <Flex flex='25' p='6'>
                <Image rounded={'lg'} objectFit={'cover'} src='/coming-soon.svg' alt=""/>
              </Flex>
              <Flex flex='75' p='6' textColor={useColorModeValue('white', 'black')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </Flex>
            </HStack>
          </ChakraBox>
        </GridItem>
      </Grid>
    </>
  );
};

export default SupportedChains;
