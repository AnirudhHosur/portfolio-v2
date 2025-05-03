// app/components/Contact.tsx
'use client';
import { Box, Heading, VStack, Text, Link } from '@chakra-ui/react';

export default function Contact() {
    return (
        <Box py={10} px={5}>
            <Heading mb={6}>Contact</Heading>
            <VStack align="start" spacing={2}>
                <Text>Email: <Link href="mailto:anirudhhosur@gmail.com">anirudhhosur@gmail.com</Link></Text>
                <Text>LinkedIn: <Link href="https://www.linkedin.com/in/anirudh-hosur-8b924315b" isExternal>View Profile</Link></Text>
                <Text>GitHub: <Link href="https://github.com/AnirudhHosur" isExternal>View Projects</Link></Text>
            </VStack>
        </Box>
    );
}
