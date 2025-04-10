
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full h-10 w-10"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
