'use client';
import {
    Box,
    Heading,
    Text,
    Link,
    Badge,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    Spinner,
    useColorModeValue,
    SimpleGrid,
    HStack,
    Icon,
    Wrap,
    WrapItem,
    Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiGithub, FiCalendar, FiCode } from 'react-icons/fi';
import styles from './Project.module.css';

interface Project {
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    language: string;
    topics?: string[]; // Optional, as not all repositories may have topics
}

export default function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const cardBg = useColorModeValue('white', 'gray.700');
    const cardColor = useColorModeValue('gray.800', 'gray.100');
    const drawerBg = useColorModeValue('gray.50', 'gray.800');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('https://api.github.com/users/AnirudhHosur/repos');
                const data: Project[] = await res.json(); // Use the GitHubRepo type here
                const filtered = data
                    .map((repo) => ({
                        ...repo,
                        topics: repo.topics || [], // Ensure topics is always an array
                    }));
                setProjects(filtered);
            } catch (err) {
                console.error('Failed to fetch GitHub projects:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <Box py={10} px={5}>
            <Box maxW="7xl" mx="auto">
                <Flex justify="center" mb={6}>
                    <Heading>Projects</Heading>
                </Flex>
                <Flex justify="center" mt={10} mb={6}>
                    <Button
                        onClick={onOpen}
                        className={styles.shinyButton}
                        size="lg"
                        px={10}
                        py={6}
                        fontWeight="bold"
                        fontSize="xl"
                        colorScheme="teal"
                    >
                        See All Projects
                    </Button>
                </Flex>

                <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
                    <DrawerOverlay />
                    <DrawerContent bg={drawerBg}>
                        <DrawerHeader borderBottomWidth="1px">GitHub Projects</DrawerHeader>
                        <DrawerBody>
                            {loading ? (
                                <Spinner />
                            ) : (
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                                    {projects.map((project, index) => (
                                        <Box
                                            key={index}
                                            bg={cardBg}
                                            color={cardColor}
                                            rounded="2xl"
                                            p={5}
                                            shadow="md"
                                            className={styles.card}
                                        >
                                            <HStack spacing={2} mb={2}>
                                                <Icon as={FiGithub} />
                                                <Link href={project.html_url} fontWeight="bold" fontSize="lg" isExternal>
                                                    {project.name}
                                                </Link>
                                            </HStack>
                                            <Text fontSize="sm" mb={2}>
                                                {project.description || 'No description available.'}
                                            </Text>

                                            <HStack fontSize="sm" color="gray.500" mb={2}>
                                                <Icon as={FiCalendar} />
                                                <Text>
                                                    {new Date(project.created_at).toLocaleString('default', {
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </Text>
                                            </HStack>

                                            <HStack spacing={2} wrap="wrap" mt={2}>
                                                {project.language && (
                                                    <Badge colorScheme="purple">
                                                        <Icon as={FiCode} mr={1} /> {project.language}
                                                    </Badge>
                                                )}
                                            </HStack>

                                            <Wrap mt={3}>
                                                {project.topics?.map((topic, idx) => (
                                                    <WrapItem key={idx}>
                                                        <Badge colorScheme="teal" variant="subtle">
                                                            {topic}
                                                        </Badge>
                                                    </WrapItem>
                                                ))}
                                            </Wrap>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            )}
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    );
}
