
import Section from '@/components/Section';
import { Circle, ExternalLink, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const experiences = [
  {
    role: 'Forecasting Analyst - Supply Chain',
    company: 'Thermo Fisher Scientific',
    period: 'Aug 2024 - Dec 2024',
    linkedIn: 'https://www.linkedin.com/company/thermo-fisher-scientific'
  },
  {
    role: 'Business Analyst - Supply Chain Optimization',
    company: 'Vestas Pharmaceuticals',
    period: 'May 2023 - Dec 2023',
    linkedIn: 'https://www.linkedin.com/company/vestas-pharmaceuticals'
  },
  {
    role: 'Associate Consultant Business Analyst',
    company: 'ZoomRx',
    period: 'Feb 2021 - May 2023',
    linkedIn: 'https://www.linkedin.com/company/zoomrx'
  },
  {
    role: 'Data Analyst Intern',
    company: 'Chevrolet',
    period: 'Feb 2020 - July 2020',
    linkedIn: 'https://www.linkedin.com/company/chevrolet'
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-secondary/30">
      <h2 className="section-title reveal mb-12">Work Experience</h2>
      
      <div className="relative flex flex-col space-y-6 md:space-y-8">
        {/* Timeline Line */}
        <div className="absolute left-4 top-3 bottom-3 w-px bg-border/50" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="group pl-12 relative">
            <div className="slide-from-left">
              {/* Timeline Dot with Tooltip */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="absolute -left-3 top-2">
                    <Circle className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-300 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>View on LinkedIn</TooltipContent>
              </Tooltip>
              
              {/* Timeline Line Growth Animation */}
              <div className="timeline-line absolute left-0 top-8 bottom-0 w-px bg-primary/20 origin-top scale-y-0 transition-transform duration-1000" />
              
              {/* Content Card */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a 
                    href={exp.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="glass-card p-4 hover:scale-[1.02] transition-transform duration-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <h3 className="font-semibold">{exp.role}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm">{exp.company}</p>
                          <p className="text-xs text-muted-foreground/80">{exp.period}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground">
                        Click to view full role details, endorsements, and shared connections on LinkedIn
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
