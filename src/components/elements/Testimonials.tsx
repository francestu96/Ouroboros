import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} boxShadow={'lg'} p={8} rounded={'xl'} align={'center'} pos={'relative'} _after={{ content: `""`, w: 0, h: 0, borderLeft: 'solid transparent', borderLeftWidth: 16, borderRight: 'solid transparent', borderRightWidth: 16, borderTop: 'solid', borderTopWidth: 16, borderTopColor: useColorModeValue('white', 'gray.800'), pos: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)' }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Link href={`https://youtube.com/${title}`} isExternal>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                        {title}
                    </Text>
                </Link>
            </Stack>
        </Flex>
    );
};

export default function Testimonials() {
    return (
        <Box id="testimonials" bg={useColorModeValue('white', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Text textAlign="center" fontSize="4xl" fontWeight="bold" fontFamily="CustomFont" px="10" backgroundImage={'linear-gradient(to right, #DA3F5E, #9945FF, #00cdff)'} backgroundClip="text" fill="transparent">
                        Our Testimonials Speak
                    </Text>
                    <Text>We have been working with clients around the world</Text>
                </Stack>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Game Changing</TestimonialHeading>
                            <TestimonialText>
                                I&apos;ve been involved in the crypto trading industry for years, and I can honestly say that Ouroboros is a game-changer, moreover after the big CEX crush of these years!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar src={'https://yt3.googleusercontent.com/wCeDwYIAUj8oB84lbZ6Qr1y24cM2D86XutQGwE_WEltQucjTV4mZD2G0IXo-ZXfPZMtMXDfjyw=s160-c-k-c0x00ffffff-no-rj'} name={'Alexander Lexx'} title={'@AlexanderLexx92'} />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Intuitive Design</TestimonialHeading>
                            <TestimonialText>
                                I have been using Ouroboros for a few months now, and I am blown away by its reliability and ease of use.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar src={'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa'} name={'Jane Cooper'} title={'@TBD.'} />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText>
                                I was skeptical at first about using an automated trading platform, but uroborus exceeded my expectations.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar src={'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7'} name={'Stephen Arnold'} title={'@TBD.'} />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}