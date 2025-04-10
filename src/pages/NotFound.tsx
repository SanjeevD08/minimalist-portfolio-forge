
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 animate-fade-in">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href="/">
            <Home size={18} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
