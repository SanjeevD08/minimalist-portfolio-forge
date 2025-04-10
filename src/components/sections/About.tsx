
import { useEffect, useRef } from 'react';
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const skills = ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'Figma', 'Product Management', 'UI/UX Design', 'Data Analysis'];
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current && photoRef.current && contentRef.current) {
      // Create animations for photo and content
      gsap.fromTo(
        photoRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      gsap.fromTo(
        contentRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Animate skills with staggered effect
      gsap.fromTo(
        '.skill-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.skills-container',
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div ref={sectionRef}>
      <Section id="about">
        <h2 className="section-title mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Photo Column - LEFT SIDE */}
          <div ref={photoRef} className="lg:col-span-4 flex flex-col items-center justify-start">
            <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-1">
              <Avatar className="w-full h-full rounded-full">
                <AvatarImage 
                  alt="Profile Photo" 
                  src="/lovable-uploads/7a691368-6e45-4821-b37c-8ac9fbdddacd.jpg" 
                  className="w-full h-full object-cover" 
                />
                <AvatarFallback className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <span>Your Photo</span>
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          {/* About Me Text - RIGHT SIDE */}
          <div ref={contentRef} className="lg:col-span-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                With a background in [your field], I have developed expertise in [your specialties]. 
                My journey began with [brief background] and I've since worked on [types of projects] 
                that have helped me grow as a professional.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about [your interests] and constantly looking to expand my 
                knowledge in [areas of learning]. My approach combines analytical thinking with 
                creative problem-solving to deliver exceptional results.
              </p>
              <p className="text-muted-foreground">
                When I'm not working, you can find me [your hobbies/interests outside of work].
              </p>
            </div>
            
            {/* Skills */}
            <div className="mt-8 skills-container">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <Separator className="mb-6" />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-item px-3 py-1.5 glass-card rounded-md font-medium text-sm"
                    tabIndex={0}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
