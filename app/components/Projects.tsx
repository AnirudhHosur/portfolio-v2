// app/components/Projects.tsx
'use client';
import { Box, Heading, VStack, Text, Link, Badge } from '@chakra-ui/react';

const projects = [
    {
        title: 'NestJS Bookstore Microservices',
        link: 'https://github.com/AnirudhHosur/bookstore-microservices',
        tech: ['NestJS', 'Docker', 'Kafka'],
        description: 'A scalable bookstore system using microservices and message brokers.',
    },
    {
        title: 'AWS CloudFormation Deployment for React Todo App',
        link: 'https://github.com/AnirudhHosur/react-todo-cloud',
        tech: ['React', 'AWS', 'CloudFormation'],
        description: 'Deployed React app on S3 + CloudFront via CloudFormation scripts.',
    },
];

export default function Projects() {
    return (
        <Box py={10} px={5}>
            <Heading mb={6}>Projects</Heading>
            <VStack align="start" spacing={4}>
                {projects.map((project, index) => (
                    <Box key={index}>
                        <Link href={project.link} fontWeight="bold" fontSize="lg" isExternal>
                            {project.title}
                        </Link>
                        <Text>{project.description}</Text>
                        <Box mt={1}>
                            {project.tech.map((t, i) => (
                                <Badge key={i} colorScheme="teal" mr={2}>{t}</Badge>
                            ))}
                        </Box>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
}
