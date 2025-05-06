'use client';
import { Box, Heading, SimpleGrid, Text, Tooltip, useColorModeValue, VStack } from '@chakra-ui/react';
import styles from './Experience.module.css';

const experiences = [
    {
        role: 'Software Developer',
        company: 'IBM',
        duration: 'Oct 2024 – Present',
        description: 'Built geofencing system using NestJS, AWS Step Functions, Kafka, PostgreSQL Aurora. Managed infra with CDK, Redshift, and Databricks.',
    },
    {
        role: 'Lead Developer',
        company: 'Credwise Financial',
        duration: 'Aug 2024 – Oct 2024',
        description: 'Led a team to build a credit insights tool with Angular, Firebase, and GCP. Supported ML/RAG pipeline integration.',
    },
    {
        role: 'Computer Programming Instructor',
        company: 'Red Deer Polytechnic',
        duration: 'Jan 2024 – Oct 2024',
        description: 'Taught cloud/software engineering. Mentored full-stack student projects and developed course content.',
    },
    {
        role: 'Software Consultant',
        company: 'Outlier',
        duration: 'Jan 2024 – May 2024',
        description: 'Worked on LLM optimization, prompt engineering, and ETL/data analytics using Java, Python, and GCP Vertex AI.',
    },
    {
        role: 'Cloud Developer Intern',
        company: 'CloudOps',
        duration: 'Aug 2023 – Dec 2023',
        description: 'Enhanced Apache CloudStack VMs, redesigned Vue.js UI, automated DevOps pipelines with Spring Boot and SQL.',
    },
    {
        role: 'Graduate Teaching Assistant',
        company: 'Dalhousie University',
        duration: 'Sep 2022 – Aug 2023',
        description: 'Conducted labs and guided students in MySQL, React, Spring Boot, Git, CI/CD, and design patterns.',
    },
    {
        role: 'Research Assistant',
        company: 'Dalhousie University',
        duration: 'Jan 2023 – Apr 2023',
        description: 'Explored data ethics and scraped Twitter data for social justice research using Python.',
    },
    {
        role: 'Associate Consultant',
        company: 'Oracle Financial Services',
        duration: 'Jan 2023 – May 2023',
        description: 'Built microservices and REST APIs for Citibank internal apps using Java Spring Boot.',
    },
    {
        role: 'Intern – Java Developer',
        company: 'Quinbay',
        duration: 'Jan 2022 – Mar 2022',
        description: 'Worked on backend modules and Java microservices for internal tools.',
    },
    {
        role: 'Intern – AI Engineer',
        company: 'Myriadcara',
        duration: 'Sep 2021 – Dec 2021',
        description: 'Built NLP pipelines, document classification systems, and fine-tuned transformer models.',
    },
    {
        role: 'Research Intern – Computer Vision',
        company: 'Yuan Ze University',
        duration: 'Jul 2020 – Sep 2020',
        description: 'Developed image enhancement algorithms and object detection experiments.',
    },
    {
        role: 'Intern – ML & OCR',
        company: 'Flipr Labs',
        duration: 'May 2020 – Jul 2020',
        description: 'Built a form parser using Tesseract OCR, Python, and OpenCV.',
    },
    {
        role: 'Intern – ML Engineer',
        company: 'Smartbridge',
        duration: 'Jan 2020 – Mar 2020',
        description: 'Built a chatbot and analytics dashboards using Python and Dialogflow.',
    },
    {
        role: 'Intern – Embedded Systems',
        company: 'ERNET India',
        duration: 'May 2019 – Jul 2019',
        description: 'Worked on IoT-based monitoring systems using Raspberry Pi and sensors.',
    },
];

const startYear = 2019;

const years = Array.from({ length: 2026 - startYear + 1 }, (_, i) => startYear + i);


// Map of year -> tooltip content (you can expand this)
const milestones: Record<number, string> = {
    2019: 'First internship: Started with IoT and Embedded Systems (ERNET India)',
    2020: 'Dive into ML: Built OCR pipeline using Tesseract and OpenCV (Flipr)',
    2021: 'Worked at Oracle',
    2022: 'Started my Master\'s at Dalhousie University',
    2023: 'Taught and assisted in CS courses at Dalhousie',
    2024: 'Lead Developer at Credwise; Instructor at Red Deer Polytechnic',
    2025: 'Current role at IBM',
    2026: 'Future opportunities await!',
};

const Experience = () => {
    const bgFront = useColorModeValue('white', 'gray.700');
    const bgBack = useColorModeValue('purple.700', 'purple.400');
    const colorFront = useColorModeValue('gray.800', 'gray.100');
    const colorBack = useColorModeValue('white', 'gray.900');
    const shadow = useColorModeValue('lg', 'dark-lg');
    const textColor = useColorModeValue('gray.700', 'gray.300');
    const tooltipBg = useColorModeValue('purple.500', 'gray.400');

    return (
        <Box py={10} px={5}>
            <Box maxW="7xl" mx="auto">
                <Heading mb={10} textAlign="center" color={useColorModeValue('purple.700', 'purple.300')}>Experience</Heading>

                <Box mb={10} px={4}>
                    <Box
                        position="relative"
                        height="60px"
                        borderRadius="md"
                        bg={useColorModeValue('purple.100', 'purple.800')}
                        px={4}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {years.map((year) => (
                            <VStack spacing={1} key={year} position="relative">
                                <Tooltip label={milestones[year]} isDisabled={!milestones[year]} hasArrow placement="top">
                                    <Box
                                        w="8px"
                                        h="30px"
                                        bg={milestones[year] ? tooltipBg : 'gray.400'}
                                        borderRadius="full"
                                        className={milestones[year] ? styles.pulse : ''}
                                        _hover={{
                                            transform: 'scale(1.2)',
                                            transition: 'transform 0.2s',
                                            cursor: milestones[year] ? 'pointer' : 'default',
                                        }}
                                    />
                                </Tooltip>
                                <Text fontSize="xs" color={textColor}>
                                    {year}
                                </Text>
                            </VStack>
                        ))}
                    </Box>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {experiences.map((exp, index) => (
                        <Box className={styles.flipCard} key={index}>
                            <Box className={styles.flipCardInner}>
                                {/* Front of the card */}
                                <Box
                                    className={`${styles.flipCardFront} chakra-box`}
                                    p={6}
                                    bg={bgFront}
                                    color={colorFront}
                                    rounded="2xl"
                                    shadow={shadow}
                                >
                                    <Text fontWeight="bold" fontSize="lg">{exp.role}</Text>
                                    <Text>{exp.company}</Text>
                                    <Text fontSize="sm" color="gray.500" mt={2}>{exp.duration}</Text>
                                </Box>

                                {/* Back of the card */}
                                <Box
                                    className={`${styles.flipCardBack} chakra-box`}
                                    p={6}
                                    bg={bgBack}
                                    color={colorBack}
                                    rounded="2xl"
                                    shadow={shadow}
                                >
                                    <Text fontSize="sm">{exp.description}</Text>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default Experience;
