
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down halfway
      const scrolled = document.documentElement.scrollTop;
      const halfwayPoint = document.documentElement.scrollHeight / 4;
      
      if (scrolled > halfwayPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 rounded-full h-14 w-14 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-sm text-white border-0 shadow-lg hover:bg-black/30 dark:hover:bg-black/50 focus:ring-2 focus:ring-primary focus:outline-none flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </Button>
      )}
    </>
  );
};

export default BackToTopButton;
