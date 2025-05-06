'use client';
import {
    Box, Flex, HStack,
    IconButton,
    Link,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    // Refined colors
    const bgColor = useColorModeValue('whiteAlpha.900', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const hoverColor = useColorModeValue('teal.600', 'teal.300');
    const boxShadow = useColorModeValue('md', '0 0 12px rgba(0, 255, 255, 0.2)');

    return (
        <Box
            as="nav"
            bg={bgColor}
            color={textColor}
            w="70%"
            position="fixed"
            top={4}
            left={0}
            right={0}
            mx="auto"
            zIndex={1000}
            py={3}
            px={5}
            borderRadius="xl"
            boxShadow={boxShadow}
            border={useColorModeValue('1px solid #e2e8f0', '1px solid rgba(255, 255, 255, 0.1)')}
            backdropFilter="saturate(180%) blur(10px)"
        >
            <Flex align="center" justify="space-between">
                <HStack spacing={4}>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            _hover={{ color: hoverColor }}
                            fontWeight="medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </HStack>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    className={styles.shinyIcon}
                />

            </Flex>
        </Box>
    );
}
