'use client';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function Education() {
    return (
        <Box py={10} px={5}>
            <Box maxW="7xl" mx="auto">
                <Heading mb={6}>Education</Heading>
                <VStack spacing={6} align="start">
                    <Box>
                        <Text fontWeight="bold">Dalhousie University</Text>
                        <Text>Masters in Applied Computer Science (Sep 2022 – Dec 2023)</Text>
                        <Text fontSize="sm" color="gray.500">
                            Skills: Node.js · DevOps · JavaScript · React.js
                        </Text>
                    </Box>

                    <Box>
                        <Text fontWeight="bold">Vellore Institute of Technology</Text>
                        <Text>Bachelor of Technology in Electronics and Computers (2017 – 2021)</Text>
                    </Box>

                    <Box>
                        <Text fontWeight="bold">Sri Chaitanya College of Education</Text>
                        <Text>PCMC (2015 – 2017)</Text>
                    </Box>

                    <Box>
                        <Text fontWeight="bold">Ryan International School, Noida</Text>
                        <Text>2006 – 2015</Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}
