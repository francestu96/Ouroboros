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
        Why Hyperliquid
      </Center>
      <Tabs background="gray.800" borderWidth='1px' p='6' colorScheme='pink' isFitted width="80%">
        <TabList>
          <Tab fontWeight='bold' fontSize={["sm", "md"]}>Privacy</Tab>
          <Tab fontWeight='bold' fontSize={["xs", "md"]}>Enhanced Security</Tab>
          <Tab fontWeight='bold' fontSize={["xs", "md"]}>Best performances</Tab>
        </TabList>
        <TabPanels fontSize={["sm", "md"]}>
          <TabPanel px={[0, 2, 4]} textAlign={["center", "center", "left"]}>
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
          <TabPanel  px={[0, 2, 4]} textAlign={["center", "center", "left"]}>
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
          <TabPanel  px={[0, 2, 4]} textAlign={["center", "center", "left"]}>
          <ChakraBox ref={tab2_ref} animate={isInView2 ? animation : 'none' } transition={transition} opacity="0">
              <Stack direction={['column', 'row']}>
                <Text p={["0", "2", "4", "6"]} flex="50">
                    <b>Hyperliquid DEX</b> offers a seamless trading experience with ultra-fast execution, zero gas fees, and deep liquidity all on a fully decentralized, high-performance layer-1.<br/><br/>
                    It combines the <b>speed and efficiency</b> of centralized exchanges with the security and transparency of <b>DeFi</b>, making it ideal for both professional traders and everyday users. 
                    With a scalable and optimized architecture, <b>Hyperliquid</b> ensures consistent performance even under heavy network demand.<br/><br/>
                    Built for <b>high-throughput trading</b>, it enables precise order matching and minimal slippage across markets.<br/>
                    Its permissionless design empowers users with full custody of assets while eliminating intermediaries.<br/><br/>
                    By removing gas fees and improving capital efficiency, <b>Hyperliquid</b> creates a frictionless trading environment that pushes DeFi toward its next evolution.
                </Text>
                <Box flex='50'>
                  <Image src="/performance.jpg" borderRadius='3xl' alt=""/>
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
