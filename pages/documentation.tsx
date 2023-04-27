import { Default } from 'components/templates/Default';
import { NextPage } from 'next';
import { Documentation } from 'components/templates';
import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const DocumentationPage: NextPage = () => {
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
          <Box>
            pair
          </Box>
        )
      case "alert":
        return (
          <Box>
            alert
          </Box>
        )
      case "strategy":
        return (
          <Box>
            strategy
          </Box>
        )
      case "roadmap":
        return (
          <Box>
            roadmap
          </Box>
        )
      default:
        return (
          <Box>
            tltr
          </Box>
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