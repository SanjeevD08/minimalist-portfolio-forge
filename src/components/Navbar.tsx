
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/contexts/ThemeContext';

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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-bold text-xl text-primary">Your Name</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-foreground hover:text-primary font-medium transition-colors text-sm px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-foreground" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>
      
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
