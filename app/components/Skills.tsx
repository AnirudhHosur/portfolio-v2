// app/components/Skills.tsx
'use client';
import { Box, Heading, Wrap, WrapItem, Badge } from '@chakra-ui/react';

const skills = [
    'Java', 'Python', 'TypeScript', 'NestJS', 'React', 'MongoDB', 'AWS', 'Docker', 'Kafka', 'GitHub Actions',
];

export default function Skills() {
    return (
        <Box py={10} px={5}>
            <Heading mb={6}>Skills</Heading>
            <Wrap>
                {skills.map((skill, index) => (
                    <WrapItem key={index}>
                        <Badge colorScheme="purple" px={4} py={2} borderRadius="md">
                            {skill}
                        </Badge>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
}
