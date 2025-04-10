
import { ArrowDown, Linkedin, Github, Mail, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
            A passionate professional dedicated to creating meaningful and impactful experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="glass-card bg-transparent hover:bg-primary/10">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="glass-card bg-transparent hover:bg-primary/10">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="#" className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full glass-card hover:scale-110 transition-transform duration-200">
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
