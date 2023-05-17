import { Default } from 'components/templates/Default';
import { NextPage } from 'next';
import { Documentation } from 'components/templates';
import { Stack, Text, Box, Container, Link, useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

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
    console.log(hash)
    switch(hash) {
      case "pair":
        return (
          <Stack spacing='8'>
            <Text fontSize='3xl' fontWeight="bold">Create your ApolloX key pair</Text>
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              Connect to <Link href="https://www.apollox.finance" target="_blank">ApolloX</Link> and naviate to <b>API</b>
            </Box>
          </Stack>
        )
      case "alert":
        return (
          <Stack>
            alert
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
            <Box bgColor={colorMode == 'light' ? 'gray.600' : 'gray.300'} textColor={colorMode == 'light' ? 'white' : 'black'} borderRadius="xl" background="" p="2rem">
              To Be Defined.
            </Box>
          </Stack>
        )
      default:
        return (
          <Stack>
            tltr
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