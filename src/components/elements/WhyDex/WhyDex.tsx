import { Tab, TabList, TabPanel, TabPanels, Tabs, HStack, Box, chakra, shouldForwardProp } from "@chakra-ui/react";
import { Text, Image } from '@chakra-ui/react'
import { motion, isValidMotionProp, useInView } from 'framer-motion'
import { useRef } from "react";

const animation = { translateX: [-100, 0], opacity: [0, 1] }
const transition = { duration: "1", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const WhyDex = () => {
  const tab1_ref = useRef(null)
  const tab2_ref = useRef(null)
  const isInView1 = useInView(tab1_ref, { once: true })
  const isInView2 = useInView(tab2_ref, { once: true })
  
  return (
    <>
      <Text mb='6' color='main' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Why Dex?</Text>
      <Tabs borderWidth='1px' rounded='lg' p='6' variant='soft-rounded' colorScheme='pink' isFitted>
        <TabList>
          <Tab fontWeight='bold'>Anonimity</Tab>
          <Tab fontWeight='bold'>Not Your Keys, Not Your Coins!</Tab>
          <Tab fontWeight='bold'>Lower Fees</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack>
              <Text p='6' flex='50'> 
                Anonymity is certainly one of the main reasons for trading on a DEX. <br></br><br></br>
                There is <b>no authentication procedure, no KYC, and no personal documents uploaded</b> to servers abroad.<br></br><br></br>
                Usually, a personal address on the respective blockchain is enough, and trading can begin. <br></br><br></br>
                There is no exchange of personal data between the exchange and an authority.
              </Text>
              <Box flex='50'>
                <Image src="/anonymous.png" borderRadius='3xl' alt=""/>
              </Box>
            </HStack>
          </TabPanel>
          <TabPanel>
            <ChakraBox ref={tab1_ref} animate={isInView1 ? animation : 'none' } transition={transition}>
              <HStack>
                <Text p='6' flex='50'>
                  The quote says: <b>Not your keys, not your coins!</b>.<br></br><br></br>
                  You cannot trust anyone, <b>Centralized Exchange</b> (CEX) included. <br></br><br></br>
                  Why to give access to your funds to someone and to risk it bankrupt when you can avoid it and holds your keys?<br></br><br></br>
                  A decentralized exchange is free from government requirements, regulations, or monitoring.<br></br><br></br>
                  Users face each other in direct trading, and there is no third party involved in the exchange. <br></br><br></br>
                  Each user has full access to their private keys and, therefore, their crypto assets.
                </Text>
                <Box flex='50'>
                  <Image src="/nyknyc.png" borderRadius='3xl' alt=""/>
                </Box>
              </HStack>
            </ChakraBox>
          </TabPanel>
          <TabPanel>
          <ChakraBox ref={tab2_ref} animate={isInView2 ? animation : 'none' } transition={transition}>
              <HStack>
                <Text p='6' flex='50'>
                The generally low-cost trading with a large number of trading pairs takes place via a decentralized server network. <br></br><br></br>
                This minimizes the risk of a hacker attack enormously and makes inaccessibility due to server failures virtually impossible. <br></br><br></br>
                Since a DEX resides directly on the blockchain, it cannot target an attack on a central server.
                </Text>
                <Box flex='50'>
                  <Image src="/fees.png" borderRadius='3xl' alt=""/>
                </Box>
              </HStack>
            </ChakraBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default WhyDex;
