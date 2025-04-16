
import { useState } from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleDownload = () => {
    toast({
      title: "Resume downloading",
      description: "Your resume is being downloaded.",
    });
  };

  return (
    <div className={`fixed ${isMobile ? 'right-4 bottom-20' : 'right-6 bottom-8'} z-40`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: 1,
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center justify-center glass-card text-primary p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-10 h-10"
            >
              <FileText size={18} />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-background/80 backdrop-blur-sm border-primary/10">
            <p>Download Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingResumeButton;
