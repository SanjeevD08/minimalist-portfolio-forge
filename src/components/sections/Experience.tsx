
import Section from '@/components/Section';
import { CircleDot, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const experiences = [
  {
    role: 'Forecasting Analyst - Supply Chain',
    company: 'Thermo Fisher Scientific',
    period: 'Aug 2024 - Dec 2024',
    linkedIn: 'https://www.linkedin.com/in/sanjeev-dhanush08/',
    color: '#0EA5E9',
    tags: ['Python', 'SQL', 'Supply Chain']
  },
  {
    role: 'Business Analyst - Supply Chain Optimization',
    company: 'Vestas Pharmaceuticals',
    period: 'May 2023 - Dec 2023',
    linkedIn: 'https://www.linkedin.com/in/sanjeev-dhanush08/',
    color: '#8B5CF6',
    tags: ['Data Analysis', 'Supply Chain', 'SQL']
  },
  {
    role: 'Associate Consultant Business Analyst',
    company: 'ZoomRx',
    period: 'Feb 2021 - May 2023',
    linkedIn: 'https://www.linkedin.com/in/sanjeev-dhanush08/',
    color: '#F97316',
    tags: ['Analytics', 'Consulting', 'Research']
  },
  {
    role: 'Data Analyst Intern',
    company: 'Chevrolet',
    period: 'Feb 2020 - July 2020',
    linkedIn: 'https://www.linkedin.com/in/sanjeev-dhanush08/',
    color: '#D946EF',
    tags: ['Data Analysis', 'Automotive', 'Excel']
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-secondary/30">
      <h2 className="section-title reveal mb-12">Work Experience</h2>
      
      <div className="relative flex flex-col space-y-12">
        {/* Timeline Line - Now with gradient */}
        <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="group pl-12 relative">
            <div className="slide-from-left">
              {/* Enhanced Timeline Dot with Glow Effect */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className="absolute -left-3 top-2 transition-all duration-300 hover:scale-110"
                    style={{ transform: 'translateX(-4px)' }}
                  >
                    <CircleDot 
                      className="w-8 h-8 transition-all duration-300 cursor-pointer"
                      style={{ 
                        color: exp.color,
                        filter: `drop-shadow(0 0 8px ${exp.color}40)`
                      }} 
                    />
                    {/* Pulse Animation Ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{ 
                        backgroundColor: `${exp.color}10`,
                        border: `1px solid ${exp.color}30`
                      }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>View on LinkedIn</TooltipContent>
              </Tooltip>
              
              {/* Experience Card with Enhanced Design */}
              <a 
                href={exp.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-all duration-200 border border-primary/5 hover:border-primary/10 shadow-lg hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg text-primary/90">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <span className="font-medium">{exp.company}</span>
                            <span className="text-xs opacity-50">•</span>
                            <span className="text-sm opacity-80">{exp.period}</span>
                          </div>
                        </div>
                        <ExternalLink 
                          className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors flex-shrink-0" 
                        />
                      </div>
                      
                      {/* Tags with Enhanced Styling */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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
