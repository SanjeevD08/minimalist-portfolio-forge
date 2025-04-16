
import Section from '@/components/Section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { lazy, useEffect, useState } from 'react';

const Projects = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imgPromises = projects.map((project) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = project.image;
        img.onload = () => resolve(true);
      });
    });

    Promise.all(imgPromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const projects = [
    {
      title: 'Retail Store Performance Analysis Project | Green River Outdoor, Boston Metro Area',
      description: 'This project aimed to enhance data-driven decision-making for Green River Outdoor (GRO), a prominent retailer in the outdoor goods sector. The focus was on analyzing customer satisfaction, transaction data, and profitability across five store locations in the Boston metro area.',
      tags: ['Pandas', 'Python', 'SciPy', 'Statistical Analysis', 'Hypothesis Tests', 'Logistic Regression'],
      image: '/lovable-uploads/3464853a-6072-4a83-8ee8-b7e678764433.png',
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d90805d9998cc4fb47c7259&pm=c'
    },
    {
      title: 'Data Visualizer Pro',
      description: 'An interactive data visualization tool that helps users understand complex datasets through customizable charts and graphs. Includes export options and sharing capabilities.',
      tags: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      image: '/placeholder.svg',
      caseStudyLink: 'https://notion.so/data-visualizer'
    },
    {
      title: 'Smart Home Hub',
      description: 'A central control system for smart home devices that integrates with various IoT products. Features include automation rules, voice control, and mobile app remote access.',
      tags: ['Python', 'Flask', 'React Native', 'Firebase'],
      image: '/placeholder.svg',
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
                  <div className="aspect-video bg-muted overflow-hidden relative group">
                    <AspectRatio ratio={16 / 9}>
                      {imagesLoaded ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted animate-pulse" />
                      )}
                    </AspectRatio>
                    
                    {/* External link icon */}
                    <div className="absolute top-2 right-2 bg-primary/80 text-white p-1.5 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={16} />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">View case study</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
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
