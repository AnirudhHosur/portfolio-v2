// app/components/Experience.tsx
'use client';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const experiences = [
    {
        role: 'Software Engineer - Intern',
        company: 'IBM',
        duration: 'Mar 2024 – Present',
        description: 'Building NestJS microservices, Dockerized apps, and Kafka consumers. Deployed scalable infra using AWS CDK and GitHub Actions.',
    },
    {
        role: 'Student Intern',
        company: 'Oracle',
        duration: 'Jan 2023 – May 2023',
        description: 'Contributed to an internal Oracle Cloud app. Worked on REST APIs and integrated GraphQL queries.',
    },
];

export default function Experience() {
    return (
        <Box py={10} px={5}>
            <Heading mb={6}>Experience</Heading>
            <VStack align="start" spacing={4}>
                {experiences.map((exp, index) => (
                    <Box key={index}>
                        <Text fontWeight="bold">{exp.role} – {exp.company}</Text>
                        <Text fontSize="sm" color="gray.500">{exp.duration}</Text>
                        <Text>{exp.description}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}
