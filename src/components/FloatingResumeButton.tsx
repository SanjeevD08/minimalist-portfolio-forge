
import { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

const FloatingResumeButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    // Add download logic here
    toast({
      title: "Resume downloading",
      description: "Your resume is being downloaded.",
    });
  };

  return (
    <div className="fixed right-6 bottom-24 z-40">
      <TooltipProvider>
        <Tooltip>
          <AnimatePresence>
            {isExpanded ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <FileText size={24} className="text-primary" />
                  <div className="flex flex-col">
                    <p className="font-medium">Resume</p>
                    <p className="text-xs text-muted-foreground">PDF format, last updated April 2023</p>
                  </div>
                  <Button size="sm" className="gap-2 ml-2" variant="default" onClick={handleDownload} asChild>
                    <a href="#" download>
                      <Download size={14} />
                      Download
                    </a>
                  </Button>
                </div>
                <button 
                  className="absolute top-1 right-1 text-muted-foreground hover:text-primary p-1"
                  onClick={() => setIsExpanded(false)}
                >
                  &times;
                </button>
              </motion.div>
            ) : (
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsExpanded(true)}
                  className="flex items-center justify-center glass-card bg-primary/20 text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FileText size={22} />
                </motion.button>
              </TooltipTrigger>
            )}
          </AnimatePresence>
          <TooltipContent side="left">
            <p>Download Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingResumeButton;
