
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  ref?: React.RefObject<HTMLElement>;
}

const Section: React.FC<SectionProps> = ({ id, className, children, fullHeight = false, ref }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const actualRef = ref || sectionRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal animations
            const revealElements = entry.target.querySelectorAll('.reveal');
            revealElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
            });
            
            // Slide from left animations
            const slideElements = entry.target.querySelectorAll('.slide-from-left');
            slideElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (actualRef.current) {
      observer.observe(actualRef.current);
    }

    return () => {
      if (actualRef.current) {
        observer.unobserve(actualRef.current);
      }
    };
  }, [actualRef]);

  return (
    <section
      id={id}
      ref={actualRef}
      className={cn(
        'py-16 md:py-24 px-4',
        fullHeight && 'min-h-screen flex flex-col justify-center',
        className
      )}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
