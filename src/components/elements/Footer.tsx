import { Box, chakra, Container, Link, SimpleGrid, Stack, Text, VisuallyHidden, Input, IconButton, useColorModeValue, HStack, Tooltip } from '@chakra-ui/react';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { ReactNode } from 'react';
import Logo from './Logo';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
        <chakra.button bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} rounded={'full'} w={8} h={8} cursor={'pointer'} as={'a'} href={href} display={'inline-flex'} alignItems={'center'} justifyContent={'center'} transition={'background 0.3s ease'} _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box borderTop="1px" borderColor="chakra-border-color" bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
                    <Stack spacing={6}>
                        <HStack>
                            <Logo />
                            <Text pt={'10px'} fontWeight='bold' fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color='main'>Ouroboros</Text>
                        </HStack>
                        <Text fontSize={'sm'}>
                            © {new Date().getFullYear()} Ouroboros. All rights reserved
                        </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Telegram'} href={'https://t.me/+NYWjXECf435mZmI0'}>
                                <FaTelegram />
                            </SocialButton>
                            <SocialButton label={'Discord'} href={'https://discord.gg/t77wzfqG'}>
                                <FaDiscord />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={"https://t.me/+NYWjXECf435mZmI0"} isExternal>Contact us</Link>
                        <Link href={'#testimonials'}>Testimonials</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={"https://t.me/+NYWjXECf435mZmI0"} isExternal>Help Center</Link>
                        <Link href={'/termsOfService'}>Terms of Service</Link>
                        <Link href={'/privacyPolicy'}>Privacy Policy</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input placeholder={'Your email address'} bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} border={0} _focus={{ bg: 'whiteAlpha.300', }} />
                            <Tooltip label="Coming soon!" hasArrow>
                                <IconButton bg='main' aria-label="Subscribe" icon={<BiMailSend />} _hover={{"cursor": "not-allowed", "bgColor": "whiteAlpha.300"}}/>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}