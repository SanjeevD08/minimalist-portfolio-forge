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

      // Animate skills with staggered effect
      gsap.fromTo('.skill-item', {
        y: 20,
        opacity: 0
      }, {
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
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return <div ref={sectionRef}>
      <Section id="about">
        <h2 className="section-title mb-10">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Photo Column - LEFT SIDE */}
          <div ref={photoRef} className="md:col-span-4 flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-1 relative mb-8 md:mb-0">
              <Avatar className="w-full h-full rounded-full">
                <AvatarImage alt="Profile Photo" src="/lovable-uploads/7a691368-6e45-4821-b37c-8ac9fbdddacd.jpg" className="w-full h-full object-cover" />
                <AvatarFallback className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <span>Your Photo</span>
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          {/* About Me Text - RIGHT SIDE */}
          <div ref={contentRef} className="md:col-span-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">Hey, I’m Sanjeev a supply chain and business analytics professional with a passion for solving real-world problems using data. </p>
              <p className="text-muted-foreground">My journey started in automobile engineering, where I led logistics and inventory efforts for SRM University’s quad bike team. That hands-on experience planted the seed for my interest in supply chain, though I didn’t realize it at the time. After working in consulting, I landed a role at Vestas Pharmaceuticals  and that’s where everything clicked. I was deep into data and operations, and I knew I’d found my space. The pandemic pushed me further into data. I spent time exploring analytics, reading MIT Sloan papers, and sharpening my skills leading to my master’s in Business Analytics at Northeastern. Along the way, I’ve worked on forecasting models, AI-driven decision tools, and supply chain optimization projects at Thermo Fisher and ZoomRx. What drives me? The challenge of making supply chains smarter using AI, machine learning, and predictive insights. I enjoy blending creativity with process - finding patterns, building models, and turning numbers into action.</p>
              <p className="text-muted-foreground">Outside of work, I train dogs, work on my machine, review films on my page Dr. Review, and chase new trails on my motorcycle whenever I get the chance.</p>
            </div>
            
            {/* Skills */}
            <div className="mt-8 skills-container">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <Separator className="mb-6" />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => <span key={index} className="skill-item px-3 py-1.5 glass-card rounded-md font-medium text-sm" tabIndex={0}>
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};
export default About;