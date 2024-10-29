import { List, ListIcon, ListItem, useColorModeValue, Link, Image } from "@chakra-ui/react"
import { BiSolidParty } from "react-icons/bi";
import { MdCheckCircle } from "react-icons/md";

export const HyperliquidityDeposit = () => {
    return (
        <List spacing={3} textColor={useColorModeValue('white', 'black')} width={"70%"} fontWeight="500">
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Go to <Link color="main" target="_blank" href="https://app.hyperliquid.xyz/trade">Hyperliquid</Link> perpetual DEX and connect your <b>Wallet</b>
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Click on <b><i>Enable Trading</i></b>, than on <b><i>Establish Connection</i></b>
                <Image src="doc/establishConn.png" borderRadius="xl" margin="auto"/>
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Enter the desired <b>USDC</b> amount you want to trade with and click on <b><i>Deposit</i></b>
                <Image src="doc/deposit.png" borderRadius="xl" margin="auto"/>
            </ListItem>
            <ListItem>
                <ListIcon as={BiSolidParty} color='green.500' />
                Approve the transaction on your <b>Wallet</b> to approve the USDC deposit on <b>Hyperliquid</b>!
            </ListItem>
        </List>
    )
}