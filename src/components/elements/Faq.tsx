import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Link, VStack } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
  return (
    <Center mb="10" id='faq' backgroundImage="abstract.png">
      <VStack width="100%">
        <Text textAlign="center" fontSize="4xl" fontWeight="bold" pt="20" pb="10" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)'} backgroundClip="text" fill="transparent">
          Frequently Asked Questions
        </Text>
        <Accordion width="80%" allowToggle={true}>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Which are the Ouroboros pricing plans?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ouroboros, at the moment, is completely free to use and without any additional fee.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Do I need sound technical skills to setup Ouroboros?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <b>Ouroboros</b> is very simple to setup and anyone can do this. The only think you need is a good <b>PineScript</b> strategy to apply to your charts.
              Fortunately the TradingView community is full of strategies you can use.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Do I have to leave my computer 24/7 open and running or rent a VPS?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              No, you do not need any of these services, Ouroborus and TradingView will take care of all for you!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Is any service license subscription required?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              The only required license is (at least) the <b>TradingView Pro</b> license. This is necessary to access the <b>Alert Webhook</b> notification
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Is GMX a reliable service?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Link href="https://gmx.io/" target="_blank" color="main">GMX</Link> is the leader platform in DEX trading. Milions in volumes and thousands of active users are constantly ralying on this amazing platform.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Which are the currently supported chains?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ourobors rely on <Link href="https://gmx.io/" target="_blank" color="main">GMX</Link>, thus it supports all their chains. Their eco-system is constantly growing to provide the best service to all users.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      </VStack>
    </Center>
  );
};

export default Faq;
