import { Tab, TabList, TabPanel, TabPanels, Tabs, Box, chakra, shouldForwardProp, Stack, VStack, Center } from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from 'framer-motion'
import { Text, Image } from '@chakra-ui/react'
import { useRef } from "react";

const animation = { translateX: [-100, 0], opacity: [0, 1] }
const transition = { duration: "0.5", ease: "easeInOut" }

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const WhyDex = () => {
  const tab1_ref = useRef(null)
  const tab2_ref = useRef(null)
  const isInView1 = useInView(tab1_ref, { once: true })
  const isInView2 = useInView(tab2_ref, { once: true })
  
  return (
    <VStack backgroundImage="abstract.png" backgroundSize="contain" borderTop='1px' borderTopColor="chakra-border-color" borderRadius='3xl' mb="10">
      <Center pt="20" pb="5" fontFamily="CustomFont" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} backgroundImage={"linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)"} backgroundClip="text" fill="transparent">
        Why DEX
      </Center>
      <Tabs background="gray.800" borderWidth='1px' p='6' colorScheme='pink' isFitted width="80%">
        <TabList>
          <Tab fontWeight='bold' fontSize={["sm", "md"]}>Privacy</Tab>
          <Tab fontWeight='bold' fontSize={["xs", "md"]}>Enhanced Security</Tab>
          <Tab fontWeight='bold' fontSize={["sm", "md"]}>Lower Fees</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack direction={['column', 'row']}>
              <Text p={["0", "2", "4", "6"]} flex="50"> 
                Privacy ensures that your financial activities remain confidential.<br/><br/>
                Without exposing personal details or transaction histories, users can execute trades with confidence, free from the scrutiny of third parties.<br/><br/>
                DEXs prioritize user privacy by eliminating the need for personal information like IDs or verification documents.<br/><br/>
                This shields traders from potential data breaches or identity theft, fostering a secure trading environment.<br/><br/>
                Finally, by removing centralized control, DEXs mitigate the risk of targeted attacks or surveillance. This decentralized nature prevents single points of failure and reduces the likelihood of malicious actors exploiting vulnerabilities for nefarious purposes.
              </Text>
              <Box flex='50'>
                <Image src="/anonymous.jpg" borderRadius='3xl' alt=""/>
              </Box>
            </Stack>
          </TabPanel>
          <TabPanel>
            <ChakraBox ref={tab1_ref} animate={isInView1 ? animation : 'none' } transition={transition} opacity="0">
              <Stack direction={['column', 'row']}>
                <Text p={["0", "2", "4", "6"]} flex="50">
                  The quote says: <b>Not Your Keys, Not Your Coins!</b>.<br/><br/>
                  When you possess your own crypto keys, you have sole control over your digital assets. This eliminates the risk of hacking or unauthorized access that centralized platforms may pose.<br/><br/>
                  By holding your keys offline in a secure hardware wallet or using secure software wallets, you minimize the potential for theft or loss.<br/><br/>
                  Cryptocurrency transactions are pseudonymous by nature, but when you control your own keys, you enhance your privacy even further. You're not required to provide personal information to third parties, reducing the risk of your financial data being exposed or exploited.<br/><br/>
                  This privacy protection is especially important in an era of increasing digital surveillance.
                  Centralized platforms can be vulnerable to various risks, including hacking, regulatory intervention, or operational failures. By holding your own keys, you mitigate these risks!
                </Text>
                <Box flex='50'>
                  <Image src="/nyknyc.jpg" borderRadius='3xl' alt=""/>
                </Box>
              </Stack>
            </ChakraBox>
          </TabPanel>
          <TabPanel>
          <ChakraBox ref={tab2_ref} animate={isInView2 ? animation : 'none' } transition={transition} opacity="0">
              <Stack direction={['column', 'row']}>
                <Text p={["0", "2", "4", "6"]} flex="50">
                  Traditional centralized exchanges often involve multiple intermediaries, each charging fees for their services.<br/><br/>
                  DEXs, on the other hand, operate directly on blockchain networks, cutting out the need for intermediaries altogether. This streamlined process results in lower overhead costs and ultimately translates to lower fees for users.<br/><br/>
                  DEXs facilitate peer-to-peer trading, where buyers and sellers interact directly without the involvement of a central authority. Since there's no intermediary facilitating transactions, there are no additional fees associated with order matching or settlement.<br/><br/>
                  This direct interaction between users helps minimize costs and ensures that traders retain a larger portion of their profits.
                </Text>
                <Box flex='50'>
                  <Image src="/fees.png" borderRadius='3xl' alt=""/>
                </Box>
              </Stack>
            </ChakraBox>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default WhyDex;
