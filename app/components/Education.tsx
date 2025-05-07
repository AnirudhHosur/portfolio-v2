'use client';
import {
    Box,
    Flex,
    Heading,
    Tag,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem
} from '@chakra-ui/react';

export default function Education() {
    const cardBg = useColorModeValue('gray.50', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box py={16} px={5} id="education">
            <Box maxW="7xl" mx="auto">
                <Heading mb={12} textAlign="center" color="teal.400">
                    Education
                </Heading>

                {/* Horizontal Two Card Layout */}
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    gap={8}
                    mb={12}
                    justify="center"
                >
                    {/* Dalhousie University */}
                    <Box
                        flex="1"
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="lg"
                        bg={cardBg}
                        p={6}
                        boxShadow="md"
                    >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            Dalhousie University
                        </Text>
                        <Text mb={1}>Masters in Applied Computer Science</Text>
                        <Text fontSize="sm" color="gray.500" mb={3}>
                            Sep 2022 – Dec 2023
                        </Text>
                        <Text fontWeight="semibold" mb={1}>
                            Specialization:
                        </Text>
                        <Text mb={4} color="gray.400">
                            Cloud Computing
                        </Text>
                        <Text fontWeight="semibold" mb={2}>
                            Relevant Skills:
                        </Text>
                        <Wrap spacing={2}>
                            {[
                                'Node.js',
                                'DevOps',
                                'JavaScript',
                                'React.js',
                                'AWS',
                                'TypeScript',
                                'Docker',
                                'CI/CD',
                                'Microservices',
                            ].map((skill) => (
                                <WrapItem key={skill}>
                                    <Tag size="md" variant="solid" colorScheme="teal">
                                        {skill}
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>

                    {/* VIT */}
                    <Box
                        flex="1"
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="lg"
                        bg={cardBg}
                        p={6}
                        boxShadow="md"
                    >
                        <Text fontSize="xl" fontWeight="bold" mb={2}>
                            Vellore Institute of Technology
                        </Text>
                        <Text mb={1}>
                            Bachelor of Technology in Electronics and Computers
                        </Text>
                        <Text fontSize="sm" color="gray.500" mb={3}>
                            2017 – 2021
                        </Text>
                        <Text fontWeight="semibold" mb={1}>
                            Specialization:
                        </Text>
                        <Text mb={4} color="gray.400">
                            Machine Learning and Data Science
                        </Text>
                        <Text fontWeight="semibold" mb={2}>
                            Relevant Skills:
                        </Text>
                        <Wrap spacing={2}>
                            {[
                                'Java',
                                'Python',
                                'Machine Learning',
                                'Data Science',
                                'SQL',
                                'Computer Vision',
                                'Spring Boot',
                                'Distributed Systems',
                                'Operating Systems',
                            ].map((skill) => (
                                <WrapItem key={skill}>
                                    <Tag size="md" variant="solid" colorScheme="purple">
                                        {skill}
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
