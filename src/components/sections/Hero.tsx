
import { ArrowDown, Linkedin, Github, Mail, BookOpen, FileText, Briefcase, Send, Notebook, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Sanjeev</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed md:text-2xl font-semibold">
            Supply Chain & Business Analytics Professional
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" variant="default" className="gap-2">
              <a href="#projects">
                <Briefcase className="w-5 h-5" />
                View My Work
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/files/Sanjeev_SCA_Resume.pdf" download>
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="#contact">
                <Send className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.linkedin.com/in/sanjeev-dhanush08/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:scale-110 transition-all duration-200 hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect on LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://github.com/SanjeevD08" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:scale-110 transition-all duration-200 hover:bg-gray-500/20 hover:shadow-[0_0_10px_rgba(75,85,99,0.5)]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Check out my GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="mailto:challapalli.s@northeastern.edu"
                    className="p-2 rounded-full glass-card hover:scale-110 transition-all duration-200 hover:bg-red-500/20 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send me an email</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:scale-110 transition-all duration-200 hover:bg-gray-500/20 hover:shadow-[0_0_10px_rgba(75,85,99,0.5)]"
                  >
                    <Notebook className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View my Notion Portfolio</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://medium.com/@challapalli.s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass-card hover:scale-110 transition-all duration-200 hover:bg-green-500/20 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  >
                    <PenTool className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Read my Blog on Medium</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="relative z-10 flex items-center justify-center">
            <img
              src="/lovable-uploads/56d3e831-e438-4a5c-843a-3b8b43f4c1cb.png"
              alt="Data Analytics Illustration"
              className="w-full max-w-[600px] mx-auto animate-float opacity-90 shadow-lg rounded-xl p-4 bg-white/5 dark:bg-black/10"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about">
        <ArrowDown className="text-primary" />
      </a>
    </div>
  </section>;
};

export default Hero;
