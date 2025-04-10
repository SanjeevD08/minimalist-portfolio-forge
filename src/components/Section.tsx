
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className, children, fullHeight = false }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealElements = entry.target.querySelectorAll('.reveal');
            revealElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
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
