
import Section from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Briefcase, Building2, Calendar, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineElements = entry.target.querySelectorAll('.timeline-line');
            timelineElements.forEach((el) => {
              el.classList.add('grow-line');
            });
            
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      role: 'Forecasting Analyst - Supply Chain',
      company: 'Thermo Fisher Scientific',
      period: 'Aug 2024 - Dec 2024',
      description: 'Designed predictive models using Python (including RNNs & collaborative filter) to forecast customer growth and recommend "next best" products across 400+ product categories, 700+ SKUs, and 62,000+ customers, driving data-backed sales strategies.',
      tools: 'Python, Machine Learning, SQL, Tableau',
      achievements: [
        'Uncovered $1.2M+ in revenue potential by analyzing invoice data and SKU trends, driving targeted sales recommendations',
        'Optimized inventory planning, reducing stockouts by 12% through refined demand forecasting models',
        'Automated data workflows by engineering scalable Python ETL pipelines and a 3NF SQL database, reducing preparation time by 35%',
        'Analyzed purchasing patterns using K-Means, DBSCAN, and cosine similarity to identify growth profiles for personalized recommendations',
        'Streamlined processing of 12+ months of sales data through optimized storage and retrieval systems'
      ]
    },
    {
      role: 'Business Analyst - Supply Chain Optimization',
      company: 'Vestas Pharmaceuticals',
      period: 'May 2023 - Nov 2023',
      description: 'Revamped supply chain and procurement workflows, resolving bottlenecks and increasing process efficiency by 20% through data-driven analysis and optimization strategies.',
      tools: 'Tableau, Excel, SQL, Agile',
      achievements: [
        'Improved supplier reliability by 12% through performance metrics and sourcing optimization',
        'Engineered real-time inventory reports using Tableau, Excel, and SQL, improving stock accuracy by 15%',
        'Managed inventory for fast-moving SKUs using ABC analysis and Kanban, reducing stockouts by 10%',
        'Designed a sales forecasting model, improving resource allocation and cost budgeting accuracy by 15%',
        'Conducted market research on supplier trends and pricing, enabling data-driven procurement decisions',
        'Developed a landed cost estimation template and established 3PL strategic partnership, streamlining supplier selection'
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-secondary/30" ref={sectionRef}>
      <h2 className="section-title reveal">Work Experience</h2>
      <div className="relative flex flex-col space-y-8 mt-12">
        {/* Timeline Line */}
        <div className="absolute left-8 top-3 bottom-3 w-px bg-border/50 hidden md:block" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="slide-from-left flex flex-col md:flex-row gap-4 relative">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -left-3 top-3 items-center">
                <div className="timeline-dot w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
              </div>
              
              {/* Timeline Line Growth Animation */}
              <div className="timeline-line absolute left-0 top-9 bottom-0 w-px bg-primary/20 origin-top scale-y-0 transition-transform duration-1000" />
              
              {/* Card */}
              <Card className="w-full glass-card hover:scale-[1.02] transition-transform duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <CardHeader className="md:border-r border-border space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                              href="#" 
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2 text-sm text-primary font-medium cursor-pointer">
                          <Briefcase className="w-4 h-4" />
                          <span>Tools: {exp.tools}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-medium">Technical Skills & Tools</h4>
                          <p className="text-sm text-muted-foreground">{exp.tools}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardHeader>
                  
                  <CardContent className="col-span-3 p-6">
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="hover:text-foreground transition-colors">{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
