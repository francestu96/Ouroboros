import { useColorModeValue, Grid, GridItem, chakra, shouldForwardProp, Flex, Image, HStack, Stack } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion'
import { Text } from '@chakra-ui/react'
import { useRef } from "react";

const animation = { opacity: [0, 1] }
const transition = { duration: "1.5", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const SupportedChains = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })
  const isInView3 = useInView(ref3, { once: true })
  const isInView4 = useInView(ref4, { once: true })
  
  return (
    <>
      <Text mb='6' color='main' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Supported Chains</Text>
      <Grid  templateRows='repeat(2, 1fr)' templateColumns='repeat(8, 1fr)' gap={4} borderWidth='1px' rounded='lg' p='6' fontSize={["xs", "sm", "md"]}>
        <GridItem rowSpan={2} colSpan={2} margin='auto'>
          <Text>This is the list of the currently supported Exchanges. This list is going to be expanded for new customer requests, so do not esistate to contact us!</Text>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
          <ChakraBox ref={ref1} animate={isInView1 ? animation : 'none' } transition={transition} opacity="0">
            <Stack direction={['column', 'column', 'row']}>
              <Flex flex='25' p={['2', '4', '6']}>
                <Image rounded={'lg'} objectFit={'fill'} src='/eth.svg' alt=""/>
              </Flex>
              <Flex flex='75' p={['2', '4', '6']} textColor={useColorModeValue('white', 'black')} alignItems={"center"}>
                The most used chain for DeFi
              </Flex>
            </Stack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
          <ChakraBox ref={ref2} animate={isInView2 ? animation : 'none' } transition={{delay: "0.5", ...transition}} opacity="0">
            <Stack direction={['column', 'column', 'row']}>
              <Flex flex='25' p={['2', '4', '6']}>
                <Image rounded={'lg'} objectFit={'fill'} src='/bsc.svg' alt=""/>
              </Flex>
              <Flex flex='75' p={['2', '4', '6']} textColor={useColorModeValue('white', 'black')} alignItems={"center"}>
                The second most used chain for DeFi
              </Flex>
            </Stack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('gray.700', 'white')}>
         <ChakraBox ref={ref3} animate={isInView3 ? animation : 'none' } transition={{delay: "1", ...transition}} opacity="0">
            <Stack direction={['column', 'column', 'row']}>
              <Flex flex='25' p={['2', '4', '6']}>
                <Image rounded={'lg'} objectFit={'fill'} src='/arbitrum.svg' alt=""/>
              </Flex>
              <Flex flex='75' p={['2', '4', '6']} textColor={useColorModeValue('white', 'black')} alignItems={"center"}>
                The most used Layer 2
              </Flex>
            </Stack>
          </ChakraBox>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')}>
          <ChakraBox ref={ref4} animate={isInView4 ? animation : 'none' } transition={{delay: "1.5", ...transition}} opacity="0">
            <Stack direction={['column', 'column', 'row']}>
              <Flex flex='25' p={['2', '4', '6']}>
                <Image rounded={'lg'} objectFit={'fill'} src='/coming-soon.svg' alt=""/>
              </Flex>
              <Flex flex='75' p={['2', '4', '6']} textColor={useColorModeValue('white', 'black')} alignItems={"center"}>
                More chains arecooming!
              </Flex>
            </Stack>
          </ChakraBox>
        </GridItem>
      </Grid>
    </>
  );
};

export default SupportedChains;
