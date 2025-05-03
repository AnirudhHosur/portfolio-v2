// app/components/Education.tsx
'use client';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Education() {
    return (
        <Box py={10} px={5}>
            <Heading mb={4}>Education</Heading>
            <Text fontWeight="bold">Dayananda Sagar College of Engineering</Text>
            <Text>B.E. in Computer Science and Engineering, 2021–2025</Text>
        </Box>
    );
}
