'use client';
import { Box, Heading, VStack, Link, Text } from '@chakra-ui/react';

const certifications = [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon', link: 'https://www.credly.com/badges/3b870938-d94e-440b-bd2f-d3fd26a7b2f3' },
    { name: 'Oracle Cloud Infrastructure Foundations', issuer: 'Oracle' },
    { name: 'JavaScript Essential Training', issuer: 'LinkedIn Learning' },
    { name: 'Deep Learning Fundamentals', issuer: 'CognitiveClass.ai' },
];

export default function Certifications() {
    return (
        <Box py={10} px={5}>
            <Box maxW="7xl" mx="auto">
                <Heading mb={6}>Certifications</Heading>
                <VStack align="start" spacing={3}>
                    {certifications.map((cert, index) => (
                        <Box key={index}>
                            {cert.link ? (
                                <Link href={cert.link} isExternal fontWeight="bold">{cert.name}</Link>
                            ) : (
                                <Text fontWeight="bold">{cert.name}</Text>
                            )}
                            <Text fontSize="sm" color="gray.500">{cert.issuer}</Text>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
}
