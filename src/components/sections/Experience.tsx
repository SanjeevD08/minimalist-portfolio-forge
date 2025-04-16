
import Section from '@/components/Section';
import { CircleDot, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const experiences = [
  {
    role: 'Forecasting Analyst - Supply Chain',
    company: 'Thermo Fisher Scientific',
    period: 'Aug 2024 - Dec 2024',
    linkedIn: 'https://www.linkedin.com/company/thermo-fisher-scientific',
    color: '#0EA5E9', // Blue for tech/scientific
    tags: ['Python', 'SQL', 'Supply Chain']
  },
  {
    role: 'Business Analyst - Supply Chain Optimization',
    company: 'Vestas Pharmaceuticals',
    period: 'May 2023 - Dec 2023',
    linkedIn: 'https://www.linkedin.com/company/vestas-pharmaceuticals',
    color: '#8B5CF6', // Purple for pharma
    tags: ['Data Analysis', 'Supply Chain', 'SQL']
  },
  {
    role: 'Associate Consultant Business Analyst',
    company: 'ZoomRx',
    period: 'Feb 2021 - May 2023',
    linkedIn: 'https://www.linkedin.com/company/zoomrx',
    color: '#F97316', // Orange for consulting
    tags: ['Analytics', 'Consulting', 'Research']
  },
  {
    role: 'Data Analyst Intern',
    company: 'Chevrolet',
    period: 'Feb 2020 - July 2020',
    linkedIn: 'https://www.linkedin.com/company/chevrolet',
    color: '#D946EF', // Pink for automotive
    tags: ['Data Analysis', 'Automotive', 'Excel']
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-secondary/30">
      <h2 className="section-title reveal mb-12">Work Experience</h2>
      
      <div className="relative flex flex-col space-y-8">
        {/* Timeline Line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-border/50" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="group pl-12 relative">
            <div className="slide-from-left">
              {/* Timeline Dot with Custom Color */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className="absolute -left-3 top-2 transition-all duration-300 hover:scale-110"
                    style={{ transform: 'translateX(-4px)' }}
                  >
                    <CircleDot 
                      className="w-8 h-8 transition-colors duration-300 cursor-pointer"
                      style={{ 
                        color: exp.color,
                        filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.1))'
                      }} 
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>View on LinkedIn</TooltipContent>
              </Tooltip>
              
              {/* Animated Timeline Line */}
              <div className="timeline-line absolute left-0 top-8 bottom-0 w-px bg-primary/20 origin-top scale-y-0 transition-transform duration-1000" />
              
              {/* Experience Card */}
              <a 
                href={exp.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="glass-card p-5 rounded-xl hover:scale-[1.02] transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{exp.company}</span>
                        <span className="text-xs">•</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-background/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <ExternalLink 
                      className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" 
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
