import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Link } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
  return (
    <>
      <Text id='faq' mb='6' color='main' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Frequently Asked Questions</Text>
      <Accordion>
        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Which are the Ouroboros pricing plans?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Ouroboros, at the moment, is completely free to use
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
            The only required license is (at least) the <b>TradingView Pro</b> license. This is necessary to access the <b>Alert Webhook</b> notification =(
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Is ApolloX a reliable service?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            <Link href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX</Link> is the leader in DEX trading. Sponsored by many big companies and used even by PancakeSwap
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Faq;
