import { Heading, Stack, useColorModeValue, Text, Link } from "@chakra-ui/react"

export const CompletedStep = () => {
    return (
        <Stack display="flex" textAlign={"center"} color={useColorModeValue('white', 'gray.700')}  flexDirection="column" fontWeight="500">
            <Heading fontSize="xl" >
            🎉 Woohoo! You successfully set up Ouroboros!🎉
            </Heading>
            <Text>You are ready to look at you open position whenever you want on <Link color="main" target="_blank" href="https://app.hyperliquid.xyz/trade">Hyperliquid</Link></Text>
        </Stack>
    )
}