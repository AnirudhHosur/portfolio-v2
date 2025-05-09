'use client';

import { Box } from '@chakra-ui/react';
import Certifications from './components/Certification/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project/Projects';
import Skills from './components/Skill/Skills';

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
