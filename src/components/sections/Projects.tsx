
import Section from '@/components/Section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Folder, Code } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Retail Store Performance Analysis Project | Green River Outdoor, Boston Metro Area',
      description: 'This project aimed to enhance data-driven decision-making for Green River Outdoor (GRO), a prominent retailer in the outdoor goods sector. The focus was on analyzing customer satisfaction, transaction data, and profitability across five store locations in the Boston metro area.',
      tags: ['Pandas', 'Python', 'SciPy', 'Statistical Analysis', 'Hypothesis Tests', 'Logistic Regression'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d90805d9998cc4fb47c7259&pm=c'
    },
    {
      title: 'Data Visualizer Pro',
      description: 'An interactive data visualization tool that helps users understand complex datasets through customizable charts and graphs. Includes export options and sharing capabilities.',
      tags: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      caseStudyLink: 'https://notion.so/data-visualizer'
    },
    {
      title: 'Smart Home Hub',
      description: 'A central control system for smart home devices that integrates with various IoT products. Features include automation rules, voice control, and mobile app remote access.',
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
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a 
                href={project.caseStudyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="reveal glass-card overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full cursor-pointer">
                  <div className="p-6 flex items-center justify-between bg-gradient-to-r from-primary/10 to-primary/5">
                    <Folder className="h-8 w-8 text-primary/70" />
                    <ExternalLink size={16} className="text-primary/70" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={16} className="text-primary/70" />
                      <span className="text-sm font-medium text-primary/70">Tech Stack</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Click to view full project on Notion</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
