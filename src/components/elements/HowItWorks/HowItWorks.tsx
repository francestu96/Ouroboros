import { Stack, useColorModeValue, Flex, Box, Heading, Center } from "@chakra-ui/react";
import { Image, Text } from '@chakra-ui/react'

const HowItWorks = () => {
  return (
    <>
      <Center mb='6' color='main' as={'span'} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign='center' fontWeight='bold' mt='12' borderTop='1px' borderTopColor="chakra-border-color" borderRadius='xl'>How It Works</Center>
      <Stack bg={useColorModeValue('#2F3849', 'white')} mt='6' pt='6' rounded='lg'>
        <Flex justify="space-between" p='6'>
          <Box p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
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
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/desk.png'/>
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textAlign='center'>
                Attach PineConnector EA on your MT4/5
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  Attach the PineConnector Expert Advisor (EA) on your MT4/5 terminal to connect to our server
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
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
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/connect.png'/>
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
          </Box>
          <Box p={6} maxW={'330px'} w={'full'} bg={useColorModeValue('white', '#2F3849')} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
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
              <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src='/trade.png'/>
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={800} textAlign='center'>
                Automatic execution on your MT4/5
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={400} fontSize={'xl'}>
                  Our EA will process the alert message and execute your instructions within 1 second
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default HowItWorks;
