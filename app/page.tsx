'use client';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Projects';
import Skills from './components/Skill/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import { Box } from '@chakra-ui/react';
import Experience from './components/Experience/Experience';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>

        <section id="hero"><Hero /></section>
        <Box id="experience"><Experience /></Box>
        <Box id="projects" py={20}><Projects /></Box>
        <Box id="skills" py={20}><Skills /></Box>
        <Box id="certifications" py={20}><Certifications /></Box>
        <Box id="education" py={20}><Education /></Box>
        <Box id="contact" py={20}><Contact /></Box>
      </main>

    </>
  );
}
