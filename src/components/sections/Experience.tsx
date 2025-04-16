
import Section from '@/components/Section';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const experiences = [
    {
      role: 'Forecasting Analyst - Supply Chain',
      company: 'Thermo Fisher Scientific',
      period: 'Aug 2024 - Dec 2024'
    },
    {
      role: 'Business Analyst - Supply Chain Optimization',
      company: 'Vestas Pharmaceuticals',
      period: 'May 2023 - Dec 2023'
    },
    {
      role: 'Associate Consultant Business Analyst',
      company: 'ZoomRx',
      period: 'Feb 2021 - May 2023'
    },
    {
      role: 'Data Analyst Intern',
      company: 'Chevrolet',
      period: 'Feb 2020 - July 2020'
    }
  ];

  return (
    <Section id="experience" className="bg-secondary/30">
      <h2 className="section-title reveal">Work Experience</h2>
      <div className="relative flex flex-col space-y-8 mt-12">
        {/* Timeline Line */}
        <div className="absolute left-8 top-3 bottom-3 w-px bg-border/50 hidden md:block" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="slide-from-left flex flex-col md:flex-row gap-4 relative">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -left-3 top-3 items-center">
                <Circle className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>
              
              {/* Timeline Line Growth Animation */}
              <div className="timeline-line absolute left-0 top-9 bottom-0 w-px bg-primary/20 origin-top scale-y-0 transition-transform duration-1000" />
              
              {/* Content */}
              <div className="ml-16 space-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

