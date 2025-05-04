'use client';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <Box id="experience" bg="gray.50" _dark={{ bg: "gray.900" }} py={20}><Experience /></Box>
        <Box id="projects" bg="white" _dark={{ bg: "gray.700" }} py={20}><Projects /></Box>
        <Box id="skills" bg="gray.50" _dark={{ bg: "gray.900" }} py={20}><Skills /></Box>
        <Box id="certifications" bg="white" _dark={{ bg: "gray.700" }} py={20}><Certifications /></Box>
        <Box id="education" bg="gray.50" _dark={{ bg: "gray.900" }} py={20}><Education /></Box>
        <Box id="contact" bg="white" _dark={{ bg: "gray.700" }} py={20}><Contact /></Box>
      </main>

    </>
  );
}
