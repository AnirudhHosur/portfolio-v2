'use client';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    Link,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';

const certifications = [
    {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        date: 'May 2023',
        expiry: 'May 2026',
        skills: ['Cloud Computing', 'AWS'],
    },
    {
        name: 'Deep Learning: Getting Started',
        issuer: 'LinkedIn Learning',
        date: 'May 2022',
        skills: ['Deep Learning'],
    },
    {
        name: 'Deep Learning: Model Optimization and Fine Tuning',
        issuer: 'LinkedIn Learning',
        date: 'May 2022',
        skills: ['Model Optimization'],
    },
    {
        name: 'Java EE Concurrency and Multithreading',
        issuer: 'LinkedIn Learning',
        date: 'Nov 2021',
        skills: ['Java EE', 'Multithreading'],
    },
    {
        name: 'Data Science Foundations & Fundamentals',
        issuer: 'LinkedIn Learning',
        date: 'Oct 2021',
        skills: ['Data Science'],
    },
    {
        name: 'Java 9 Functional Programming',
        issuer: 'LinkedIn Learning',
        date: 'Oct 2021',
        skills: ['Java 9', 'Functional Programming'],
    },
    {
        name: 'Oracle Certified Associate, Java SE 8 Programmer',
        issuer: 'Oracle',
        date: 'Oct 2021',
        skills: ['Java SE 8'],
    },
    {
        name: 'Oracle Database',
        issuer: 'Oracle',
        date: 'Sep 2021',
        skills: ['Oracle DB'],
    },
    {
        name: 'Oracle Certified Professional, Java EE 7 Application Developer',
        issuer: 'Oracle',
        date: 'Aug 2021',
        skills: ['Java EE 7'],
    },
];

export default function Certifications() {
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const bgColor = useColorModeValue('gray.50', 'gray.700');

    const credentialsURL =
        'https://www.linkedin.com/in/anirudh-hosur-8b924315b/details/certifications/';

    return (
        <Box py={10} px={5} id="certifications">
            <Box maxW="7xl" mx="auto">
                <Flex justify="space-between" align="center" mb={6} flexWrap="wrap" gap={4}>
                    <Heading textAlign="center" color="teal.400">
                        Certifications
                    </Heading>
                    <Link href={credentialsURL} isExternal>
                        <Button size="sm" colorScheme="teal" variant="outline">
                            Show Credentials
                        </Button>
                    </Link>
                </Flex>

                <Accordion allowMultiple>
                    {certifications.map((cert, idx) => (
                        <AccordionItem
                            key={idx}
                            border="1px solid"
                            borderColor={borderColor}
                            borderRadius="md"
                            mb={3}
                            bg={bgColor}
                        >
                            <h2>
                                <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
                                    <Box flex="1" textAlign="left" fontWeight="bold">
                                        {cert.name}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack align="start" spacing={1}>
                                    <Text fontSize="sm" color="gray.500">
                                        Issuer: {cert.issuer}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Issued: {cert.date}
                                        {cert.expiry ? ` · Expires ${cert.expiry}` : ''}
                                    </Text>
                                    <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
                                        {cert.skills.map((skill, i) => (
                                            <Badge key={i} colorScheme="purple" px={2} borderRadius="md">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </Box>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
        </Box>
    );
}
