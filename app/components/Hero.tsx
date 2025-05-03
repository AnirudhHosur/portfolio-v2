// app/components/Hero.tsx
'use client';
import { Box, Flex, Heading, Text, Button, Image, Link, Stack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';

export default function Hero() {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" p={10}>
            <Box flex="1" mb={{ base: 8, md: 0 }}>
                <Heading as="h1" size="2xl" mb={4}>
                    Anirudh Hosur
                </Heading>
                <Text fontSize="lg" mb={4}>
                    Passionate Software Engineer with 2.5+ years of experience in full-stack development, cloud computing, and scalable systems.
                </Text>
                <Stack direction="row" spacing={4}>
                    <Link href="https://www.linkedin.com/in/anirudh-hosur-8b924315b" isExternal><FaLinkedin size="24" /></Link>
                    <Link href="https://github.com/AnirudhHosur" isExternal><FaGithub size="24" /></Link>
                    <Link href="https://anirudhhosur.netlify.app/" isExternal><FaGlobe size="24" /></Link>
                    <Link href="https://www.youtube.com/watch?v=pli2FXopbHY&list=PLm-WWsmCj25s1MHP7jnH-4JkYfdvXUFa4" isExternal><FaYoutube size="24" /></Link>
                </Stack>
            </Box>
            <Image src="/anirudh.jpg" alt="Anirudh Hosur" boxSize="250px" borderRadius="full" />
        </Flex>
    );
}
