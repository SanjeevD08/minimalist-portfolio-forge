
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, User, Briefcase, FileText, Mail, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Database },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FileText },
    { href: '#contact', label: 'Contact', icon: Mail }
  ];

  // Create the navigation items for the tubelight navbar
  const tubeLightNavItems = navLinks.map(link => ({
    name: link.label,
    url: link.href,
    icon: link.icon
  }));

  // Hide standard navbar on desktop, only show on mobile
  return (
    <>
      {/* Desktop Navigation - TubeLight Navbar */}
      <div className="hidden md:block">
        <NavBar items={tubeLightNavItems} className={cn(
          "transition-all duration-300",
          scrolled ? "top-4" : "top-6"
        )} />
      </div>
      
      {/* Mobile Navigation Button - Only visible on mobile */}
      <div className="md:hidden">
        <nav className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
          scrolled 
            ? "bg-background/90 backdrop-blur-md shadow-md" 
            : "bg-transparent"
        )}>
          <div className="container mx-auto flex items-center justify-between">
            <div className="font-bold text-xl text-primary">Your Name</div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/90 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out pt-24",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center gap-8 p-8">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-xl text-foreground hover:text-primary font-medium" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
