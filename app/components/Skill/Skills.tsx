'use client';
import {
    Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Tag, useColorModeValue
} from '@chakra-ui/react';
import styles from './Skills.module.css';

const skillCategories = {
    'Programming Languages': ['Java', 'Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
    Backend: ['Spring Boot', 'NestJS', 'Node.js', 'Express'],
    Frontend: ['React', 'Angular', 'HTML', 'CSS'],
    Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    Cloud: ['AWS', 'GCP', 'Firebase'],
    DevOps: ['Docker', 'GitHub Actions', 'CDK', 'CI/CD'],
    LLMs: ['LangChain', 'Gemini API', 'Vertex AI', 'Prompt Engineering'],
    Tools: ['Git', 'Jira', 'VS Code', 'Postman'],
};

export default function Skills() {
    const bgColor = useColorModeValue('whiteAlpha.900', 'gray.700');
    const textColor = useColorModeValue('gray.800', 'gray.100');
    const boxShadow = useColorModeValue('md', '0 0 12px rgba(0, 255, 255, 0.2)');

    return (
        <Box py={10} px={5} id="skills">
            <Box maxW="7xl" mx="auto" bg={bgColor} p={8} rounded="xl" boxShadow={boxShadow}>
                <Heading mb={6} textAlign="center" color="teal.400">
                    Skills
                </Heading>

                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th color={textColor} fontSize="lg">Category</Th>
                            <Th color={textColor} fontSize="lg">Skills</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.entries(skillCategories).map(([category, skills], idx) => (
                            <Tr key={idx}>
                                <Td fontWeight="bold" color={textColor}>
                                    {category}
                                </Td>
                                <Td>
                                    <Box display="flex" flexWrap="wrap" gap={3}>
                                        {skills.map((skill, i) => (
                                            <Tag
                                                key={i}
                                                colorScheme="purple"
                                                px={3}
                                                py={1}
                                                borderRadius="full"
                                                className={styles.shinyTag}
                                            >
                                                {skill}
                                            </Tag>
                                        ))}
                                    </Box>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}
