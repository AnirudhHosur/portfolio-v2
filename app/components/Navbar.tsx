// app/components/Navbar.tsx
'use client';
import { Box, Flex, HStack, Link, Spacer, Heading } from '@chakra-ui/react';

const links = [
    { label: 'Home', href: '#' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <Box as="nav" bg="gray.800" color="white" px={5} py={3} position="sticky" top={0} zIndex={10}>
            <Flex align="center">
                <Heading size="md">Anirudh Hosur</Heading>
                <Spacer />
                <HStack spacing={4}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} _hover={{ color: 'teal.300' }}>
                            {link.label}
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
}
