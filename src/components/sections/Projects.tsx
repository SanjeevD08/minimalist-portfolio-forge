
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Folder } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Projects = () => {
  const projects = [
    {
      title: 'Retail Analytics Dashboard',
      subtitle: 'Green River Outdoor, Boston',
      summary: 'Enhanced data-driven decision-making across 5 retail locations by analyzing customer satisfaction and transaction data.',
      tags: ['Python', 'Pandas', 'SciPy', 'Statistical Analysis', 'Hypothesis Tests'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d90805d9998cc4fb47c7259&pm=c'
    },
    {
      title: 'Data Visualizer Pro',
      subtitle: 'Interactive Analytics Tool',
      summary: 'Built a visualization platform for complex datasets with customizable charts, exports and sharing capabilities.',
      tags: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      caseStudyLink: 'https://notion.so/data-visualizer'
    },
    {
      title: 'Smart Home Hub',
      subtitle: 'IoT Control System',
      summary: 'Developed a central system for smart home devices with automation rules, voice control, and mobile access.',
      tags: ['Python', 'Flask', 'React Native', 'Firebase'],
      caseStudyLink: 'https://notion.so/smart-home-hub'
    }
  ];

  return (
    <Section id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 reveal">
        A selection of projects that showcase my skills and expertise. Each project represents 
        unique challenges and solutions that I've implemented.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Card className="reveal glass-card overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full cursor-pointer">
                <a 
                  href={project.caseStudyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="p-4 flex items-center justify-between bg-gradient-to-r from-primary/10 to-primary/5">
                    <Folder className="h-6 w-6 text-primary/70" />
                    <ExternalLink size={14} className="text-primary/70" />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{project.subtitle}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-foreground/80 mb-4">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </a>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="p-2">
              <p className="text-xs">Click to view detailed case study</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
