import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Faq = () => {
  return (
    <>
      <Text mb='6' color='main' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} align='center' fontWeight='bold' mt='12'>Frequently Asked Questions</Text>
      <Accordion>
        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Faq;
