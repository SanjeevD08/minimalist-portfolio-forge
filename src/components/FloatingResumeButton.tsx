
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
    <div className={`fixed ${isMobile ? 'right-4 bottom-8' : 'right-8 bottom-8'} z-50`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                backgroundColor: isHovered ? 'rgba(8, 145, 178, 0.8)' : 'rgba(8, 145, 178, 0.6)'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(8, 145, 178, 0.9)',
                boxShadow: '0 0 25px rgba(8, 145, 178, 0.7)'
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center justify-center bg-cyan-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 w-16 h-16"
            >
              <FileText size={28} className="text-white" />
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
