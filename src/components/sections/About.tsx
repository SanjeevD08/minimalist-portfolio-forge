import { useEffect, useRef } from 'react';
import Section from '@/components/Section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current && photoRef.current && contentRef.current) {
      gsap.fromTo(photoRef.current, {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
      gsap.fromTo(contentRef.current, {
        x: 50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return <div ref={sectionRef}>
      <Section id="about">
        <h2 className="section-title mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div ref={photoRef} className="md:col-span-4 flex flex-col items-center justify-start sticky top-24">
            <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-1 relative mb-8 md:mb-0">
              <Avatar className="w-full h-full rounded-full">
                <AvatarImage alt="Profile Photo" src="/lovable-uploads/7a691368-6e45-4821-b37c-8ac9fbdddacd.jpg" className="w-full h-full object-cover" />
                <AvatarFallback className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <span>Your Photo</span>
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div ref={contentRef} className="md:col-span-8">
            <div className="space-y-8">
              <p className="text-xl font-medium text-primary/80 italic leading-relaxed">
                "Blending creativity with process to build smarter, data-driven supply chains."
              </p>
              
              <div className="space-y-6 leading-relaxed">
                <p className="text-muted-foreground">Hey, I'm Sanjeev Dhanush Challapalli a supply chain and business analytics professional with a passion for solving real-world problems using data. My journey started in automobile engineering, where I led logistics and inventory efforts for SRM University's quad bike team. That hands-on experience planted the seed for my interest in supply chain, though I didn't realize it at the time.</p>
                
                <p className="text-muted-foreground">
                  After working in consulting, I landed a role at Vestas Pharmaceuticals and that's where everything clicked. I was deep into data and operations, and I knew I'd found my space. The pandemic pushed me further into data. I spent time exploring analytics, reading MIT Sloan papers, and sharpening my skills leading to my master's in Business Analytics at Northeastern.
                </p>
                
                <p className="text-muted-foreground">
                  Along the way, I've worked on forecasting models, AI-driven decision tools, and supply chain optimization projects at Thermo Fisher and ZoomRx. What drives me? The challenge of making supply chains smarter using AI, machine learning, and predictive insights. Outside of work, I train dogs, work on my machine, review films on my page Dr. Review, and chase new trails on my motorcycle whenever I get the chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};
export default About;