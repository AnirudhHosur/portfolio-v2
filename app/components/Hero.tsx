'use client';

import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    Link,
    Stack,
    useColorModeValue,
    Tooltip
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaGlobe, FaYoutube, FaDownload } from 'react-icons/fa';

export default function Hero() {
    const textColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <Box
            as="section"
            id="hero"
            py={{ base: 10, md: 20 }}
            px={6}
        >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
                maxW="7xl"
                mx="auto"
                gap={10}
            >
                {/* Left Section */}
                <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                    <Heading size="2xl" mb={4} color="teal.400">
                        Anirudh Hosur
                    </Heading>
                    <Text fontSize="xl" mb={4} color={textColor}>
                        Software Developer @ IBM | Ex-Oracle | 2.5+ years of full-stack & cloud experience
                    </Text>

                    <Text fontSize="md" mb={6} color={textColor}>
                        Passionate about coding, brainstorming, and building customer-focused software. Strong background in Java, Python, Spring Boot, React, AWS, Docker, and more.
                    </Text>

                    <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-start' }} mb={6}>
                        <Tooltip label="LinkedIn" hasArrow>
                            <Link href="https://www.linkedin.com/in/anirudh-hosur-8b924315b" isExternal><FaLinkedin size="24" /></Link>
                        </Tooltip>
                        <Tooltip label="GitHub" hasArrow>
                            <Link href="https://github.com/AnirudhHosur" isExternal><FaGithub size="24" /></Link>
                        </Tooltip>
                        <Tooltip label="Portfolio Website v1" hasArrow>
                            <Link href="https://anirudhhosur.netlify.app/" isExternal><FaGlobe size="24" /></Link>
                        </Tooltip>
                        <Tooltip label="YouTube Channel" hasArrow>
                            <Link href="https://www.youtube.com/watch?v=pli2FXopbHY&list=PLm-WWsmCj25s1MHP7jnH-4JkYfdvXUFa4" isExternal><FaYoutube size="24" /></Link>
                        </Tooltip>
                    </Stack>

                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
                        <Button colorScheme="teal" variant="solid">
                            Contact Me
                        </Button>
                        <Button
                            as="a"
                            href="/Anirudh_Resume.pdf"
                            download
                            leftIcon={<FaDownload />}
                            colorScheme="teal"
                            variant="outline"
                        >
                            Resume
                        </Button>
                    </Stack>
                </Box>

                {/* Right Section - Profile Image */}
                <Box flexShrink={0}>
                    <Image
                        src="/anirudh.jpg"
                        alt="Anirudh Hosur"
                        boxSize={{ base: '200px', md: '250px' }}
                        borderRadius="full"
                        boxShadow="lg"
                        objectFit="cover"
                    />
                </Box>
            </Flex>
        </Box>
    );
}
