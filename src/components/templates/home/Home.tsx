import { Box, Link, Spinner, Td, useColorMode } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, TableContainer, Heading } from '@chakra-ui/react'
import { useState } from 'react';

const Home = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Heading size="md" textAlign="center" marginBottom={6}>
        Last Transactions
      </Heading>
      <TableContainer borderWidth='2px' borderRadius='lg' pl={4} pr={4}>
        {
          transactions && transactions.length > 0 
          ?
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Trx Hash</Th>
                <Th>Block</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {              
                transactions?.map((trx: any) => (
                  <Tr key={trx.hash}>
                    <Td>
                      <Link href={"https://bscscan.com/tx/" + trx.hash} color={colorMode === "dark" ? "#90cdf4" : "#3182ce"} isExternal>
                        {trx.hash.slice(0, 20) + "..."}
                      </Link>
                    </Td>
                    <Td>{trx.block}</Td>
                    <Td>
                      <Link href={"https://bscscan.com/address/" + trx.from} color={colorMode === "dark" ? "#90cdf4" : "#3182ce"} isExternal>
                        {trx.from.slice(0, 20) + "..."}
                      </Link>
                    </Td>
                    <Td>
                      <Link href={"https://bscscan.com/address/" + trx.from} color={colorMode === "dark" ? "#90cdf4" : "#3182ce"} isExternal>
                        {trx.to.slice(0, 20) + "..."}
                      </Link>
                    </Td>
                    <Td>{trx.value} BTCB</Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
          : 
          <Box textAlign="center" p="5">
            <Spinner size='xl' color={colorMode === "dark" ? "#90cdf4" : "#3182ce"}/>
          </Box>
        }
      </TableContainer>
    </Box>
  );
};

export default Home;
