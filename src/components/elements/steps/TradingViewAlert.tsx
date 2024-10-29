import { Box, Link, List, ListIcon, ListItem, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons"
import { BiSolidParty } from "react-icons/bi"

export const TradingViewAlert = () => {
    return (
        <List spacing={3} textColor={useColorModeValue('white', 'black')} width={"70%"} fontWeight="500">
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Create a new account or register to <Link color="main" href="https://www.tradingview.com/" target="_blank">TradingView</Link>
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Select your desired trading pair and <b>apply the Trading Strategy</b> you want to execute
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Click on the right <b>clock icon</b> and click on <b>Create alert</b>
            </ListItem>
            <ListItem>
                <Image src="/doc/alert.png" alt="API Management" margin="auto" borderRadius="3xl" />
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                In <b>Condition</b>, select your <b>strategy name</b> and set the Alert name
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Set the desired <b>Expiring Date</b>. <u>Remember to update it when needed to avoid it expires!</u>
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                In the <b>message</b> field you <b>MUST</b> enter the following content:
            </ListItem>
            <ListItem>
                <Box bgColor="#131722" p="3em" textColor="white" width="65%" margin="auto" borderRadius="3xl">
                    &quot;auth&quot;: &quot;&lt;your_authentication_key&gt;&quot;,<br></br>
                    &quot;orderId&quot;:&quot;&#123;&#123;strategy.order.id&#125;&#125;&quot;,<br></br>
                    &quot;symbol&quot;: &quot;&#123;&#123;ticker&#125;&#125;&quot;,<br></br>
                    &quot;action&quot;: &quot;&#123;&#123;strategy.order.action&#125;&#125;&quot;,<br></br>
                    &quot;size&quot;: &quot;&#123;&#123;strategy.order.contracts&#125;&#125;&quot;<br></br>
                </Box>
            </ListItem>
            <ListItem>
                <ListIcon as={InfoIcon} color='red.500' />
                <b>IMPORTANT NOTE:</b> be sure to <b>replace the <i>auth</i> value</b> with <b>your Authentication Key</b>! Leave all other fields as weired as they are.<br/><b><u>Testnet available</u></b>, look at <Link href="">the doc</Link> for more info 
            </ListItem>
            <ListItem>
                <ListIcon as={InfoIcon} color='green.500' />
                Move to the <b>Notifications</b> tab and check the <b>Webhook URL</b> checkbox
            </ListItem>
            <ListItem>
                <ListIcon as={InfoIcon} color='red.500' />
                <b>IMPORTANT NOTE:</b> you need at least the <Link href="https://it.tradingview.com/pricing/" color="main">TradingView Essential</Link> subscription!
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
                <ListIcon as={BiSolidParty} color='green.500' />
                <b>CONGRATULATIONS!</b> You have successfully attached your strategy to your wallet!
            </ListItem>
        </List>
    )
}