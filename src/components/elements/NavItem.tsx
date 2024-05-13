import { Box, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import SubNav, { ISubNav } from './SubNav';
import { useRouter } from 'next/router';
import { FC } from 'react';

const NavItem: FC<ISubNav> = ({ label, children, href, src }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkActiveColor = useColorModeValue('gray.800', 'white');
  const router = useRouter();
  const isCurrentPath = router.asPath === href || (href !== '/' && router.pathname.startsWith(href || '') && !src);

  return (
    <Popover trigger={'hover'} placement={'bottom-start'}>
      <PopoverTrigger>
        <Box>
          <Box
            fontSize={17}
            fontWeight={500}
            color={isCurrentPath ? linkActiveColor : linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkActiveColor,
            }}
            cursor="pointer"
          >
            {children ? (
              <>
                {label} <ChevronDownIcon />
              </>
            ) : src ? (
                <Link target="_blank" href={src} _hover={{textDecoration: 'none'}}>
                  {label}
                </Link>
            ) :
            (
                <Link _hover={{textDecoration: 'none'}} href={href || '/'}>
                    {label}
                </Link>
            )}
          </Box>
        </Box>
      </PopoverTrigger>

      {children && (
        <PopoverContent border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
          <Stack>
            {children.map((child) => (
              <SubNav key={child.label} {...child} />
            ))}
          </Stack>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default NavItem;
