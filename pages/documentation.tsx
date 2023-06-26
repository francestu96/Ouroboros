import { Default } from 'components/templates/Default';
import { NextPage } from 'next';
import { Documentation } from 'components/templates';
import { Stack, Text, Box, Container, Link, useColorMode, ListIcon, ListItem, List, Image, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react";
import { useEffect, useState } from 'react';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'

const DocumentationPage: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [hash, setHash] = useState("tltr");
  const router = useRouter();

  useEffect(() => {
    const onHashChangeStart = (url: string) => {
      setHash(url.split("#")[1])
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
        router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);
  
  const renderSwitch = (hash: string) => {
    switch(hash) {
      case "pair":
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Create your ApolloX key pair</Text>
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Create a new account or sign in to <Text as="span" onClick={() => signIn()} color="blue" cursor="pointer">Ouroborus</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Connect <b>your wallet</b> to <Link color="blue" href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX (V1)</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Navigate <b>over your wallet address &gt; API Management</b> to open your API management panel
                </ListItem>
                <ListItem>
                  <Image src="/doc/api.png" boxSize="80%" alt="API Management" margin="auto" borderRadius="3xl"/>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Click on <b>Create API</b>, set a label for the new pair and it will be displayed your keys 
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='orange.500' />
                  <b>INPORTANT NOTE:</b> copy your keys and <b>keep them safe</b> from anyone! 
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Navigate over <b>your profile &gt; My Profile</b> and paste the <b>ApolloX Key</b> and the <b>ApolloX Secret</b>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Click on <b>Update Information</b> and your <b>Authentication key</b> will be generated!
                </ListItem>
                <ListItem>
                  <Image src="/doc/keys.png" boxSize="80%" alt="Keys Management" margin="auto" borderRadius="3xl"/>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='orange.500' />
                  <b>INPORTANT NOTE:</b> copy your authentication key and <b>keep it safe</b> from anyone! 
                </ListItem>
              </List>
            </Box>
          </Stack>
        )
      case "liquidity":
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Add liquidity to your desired trading pair</Text>
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Select your desired trading pair from <Link color="blue" href="https://www.apollox.finance/en/futures/BTCBUSD" target="_blank">ApolloX (V1)</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Click on <b>Go to Deposit</b>, enter the amount you want to trade and click <b>Deposit</b>
                </ListItem>
                <ListItem>
                  <Image src="/doc/deposit.png" alt="API Management" margin="auto" borderRadius="3xl"/>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='orange.500' />
                  <b>INPORTANT NOTE:</b> you need to have the desired coin/token in your wallet! 
                </ListItem>
              </List>
            </Box>
          </Stack>
        )
      case "alert":
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Create the TradingView alert</Text>
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Create a new account or register to <Link color="blue" href="https://www.tradingview.com/" target="_blank">TradingView</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Select your desired trading pair and <b>apply your best trading strategy</b>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Once you are satisfied by your strategy, click on the right <b>clock icon</b> and click on <b>Create alert</b> 
                </ListItem>
                <ListItem>
                  <Image src="/doc/alert.png" alt="API Management" margin="auto" borderRadius="3xl"/>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  In <b>Condition</b> select your <b>strategy name</b> and set the alert name
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='orange.500' />
                  In the <b>message</b> field you <b>MUST</b> enter the following content:
                </ListItem>
                <ListItem>
                  <Box bgColor="#131722" p="3em" textColor="white" width="65%" margin="auto"  borderRadius="3xl">
                    "auth": "&lt;your_authentication_key_here&gt;",<br></br>
                    "exchange": "&#123;&#123;exchange&#125;&#125;",<br></br>
                    "orderId":"&#123;&#123;strategy.order.id&#125;&#125;",<br></br>
                    "symbol": "&#123;&#123;ticker&#125;&#125;",<br></br>
                    "action": "&#123;&#123;strategy.order.action&#125;&#125;",<br></br>
                    "size": "&#123;&#123;strategy.order.contracts&#125;&#125;"<br></br>
                  </Box>
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='red.500' />
                  <b>IMPORTANT NOTE:</b> be sure to <b>replace the auth value</b> with <b>your Authentication key</b>!
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='green.500' />
                  Move to the <b>Notifications</b> tab and check the <b>Webhook URL</b> checkbox
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoIcon} color='orange.500' />
                  <b>IMPORTANT NOTE:</b> you need at least the <b>TradingView Pro</b> subscription!
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Enter the following URL in the <b>webhook field</b>:
                </ListItem>
                <ListItem>
                  <Box bgColor="#131722" p={["1em", "2em", "2em"]} textColor="white" width={["100%", "100%", "60%"]} fontSize={["2xs", "xs", "inherit"]} margin="auto" borderRadius="3xl">
                    <Text align="center">https://ouroborus-x.vercel.app/webhook</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  <b>CONGRATULATIONS!</b> You have successfully attach your strategy to your wallet!
                </ListItem>
              </List>
            </Box>
          </Stack>
        )
      case "strategy":
        return (
          <Stack>
            strategy
          </Stack>
        )
      case "roadmap":
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Roadmap</Text>
            <Flex bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              <List spacing={3}>
              <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  To Be Defined.
                </ListItem>
              </List>                
            </Flex>
          </Stack>
        )
      default:
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Too Long To Read</Text>
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              Too lazy to read the doc? <br></br> Don&apos;t worry, a <b>video tutorial</b> is cooming soon!
            </Box>
          </Stack>
        )
    }
  }

  return (
    <Default pageName="Ouroboros | Documentation">
      <Container maxW="container.xl" p={-3} marginTop={-50} as="main" minH={["60vh", "62vh"]}>
        <Documentation>
          {renderSwitch(hash)}
        </Documentation>
      </Container>
    </Default>
  );
};

export default DocumentationPage;