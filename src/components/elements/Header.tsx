import { Box, Flex, HStack, IconButton, useColorModeValue, VStack, useDisclosure, Slide, Button, Link } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import ColorModeButton from './ColorModeButton';
import { FaPlay } from 'react-icons/fa';
import { ISubNav } from './SubNav';
import NavItem from './NavItem';
import Logo from './Logo';
import AwareModal from './AwareModal';

const NAV_LINKS: ISubNav[] = [
    { label: 'Home', href: '/' },
    { label: 'Documentation', src: 'https://cisco0x60.gitbook.io/ouroboros/' },
    { label: 'F.A.Q.', href: '/#faq' },
    {
        label: 'Community',
        href: '#',
        children: [
            {
                label: 'Telegram',
                subLabel: 'Join our Telegram group',
                href: 'https://t.me/+NYWjXECf435mZmI0',
                logo: '/telegram.png',
            },
            {
                label: 'Discrod',
                subLabel: 'Join our server on Discord',
                href: 'https://discord.gg/t77wzfqG',
                logo: '/discord.png',
            },
        ],
    }
];

const Header = ({ appUrl }: { appUrl: string }) => {
    const { isOpen: isOpenModal, onClose: onCloseModal, onOpen: onOpenModal } = useDisclosure();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box borderBottom="1px" borderBottomColor="chakra-border-color" p='10px 10%'>
            <Flex justify="space-between" display={['none', 'none', 'none', 'flex']} p="2">
                <Logo />
                <HStack gap={'15px'} alignItems="center">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} {...link} />
                    ))}
                </HStack>
                <HStack alignItems="center" gap={'10px'}>
                    <Button size="md" backgroundColor="main" leftIcon={<FaPlay />} onClick={onOpenModal}>Open the App</Button>
                    <ColorModeButton />
                </HStack>
            </Flex>
            <Flex align="center" justify="space-between" display={['flex', 'flex', 'flex', 'none']}>
                <Logo />
                <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon />} onClick={onToggle} />
            </Flex>

            <Slide in={isOpen} transition={{ "enter": { duration: 0.5 }, "exit": { duration: 0.5 } }} style={{ zIndex: 10 }}>
                <Flex w='100vw' bgColor={useColorModeValue('white', 'gray.800')} h="100vh" flexDir="column">
                    <Flex justify="flex-end">
                        <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon />} onClick={onToggle} />
                    </Flex>
                    <VStack gap={'15px'}>
                        <HStack gap={'10px'}>
                            <Button size="lg" backgroundColor="main" onClick={onOpenModal}>Open the App</Button>
                            <ColorModeButton size="lg" />
                        </HStack>
                        {NAV_LINKS.map((link) => (
                            <NavItem key={`link-${link.label}`} {...link} />
                        ))}
                    </VStack>
                </Flex>
            </Slide>
            <AwareModal appUrl={appUrl || ""} isOpen={isOpenModal} onClose={onCloseModal}/>
        </Box>
    );
};

export default Header;
