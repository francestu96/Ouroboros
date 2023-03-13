import { useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const SupportedChains = () => {
  return (
    <>
      <Text mb='6' color={'#DA3F5E'} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Supported Chains</Text>
      <Grid h='400px' templateRows='repeat(2, 1fr)' templateColumns='repeat(8, 1fr)' gap={4} borderWidth='1px' rounded='lg' p='6'>
        <GridItem rowSpan={2} colSpan={2} margin='auto'>
          <Text>This is the list of the currently supported Exchanges. This list is going to be expanded for new customer requests, so do not esistate to contact us!</Text>
        </GridItem>
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')} />
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')} />
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')} />
        <GridItem colSpan={3} rounded='lg' bg={useColorModeValue('#2F3849', 'white')} />
      </Grid>
    </>
  );
};

export default SupportedChains;
