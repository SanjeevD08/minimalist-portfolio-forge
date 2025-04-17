
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { HorizontalDock } from '@/components/HorizontalDock';
import FloatingResumeButton from '@/components/FloatingResumeButton';
import BackgroundEmblem from '@/components/BackgroundEmblem';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  useEffect(() => {
    // Enhance keyboard accessibility
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    };
    
    const handleMouseDown = () => {
      document.body.classList.remove('user-is-tabbing');
    };
    
    window.addEventListener('keydown', handleTabKey);
    window.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      window.removeEventListener('keydown', handleTabKey);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEmblem />
      <ThemeToggle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingResumeButton />
      <BackToTopButton />
      <HorizontalDock />
    </div>
  );
};

export default Index;
