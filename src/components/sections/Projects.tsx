
import Section from '@/components/Section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
  const projects = [
    {
      title: 'Retail Store Performance Analysis',
      description: 'A comprehensive analytics project that measures and visualizes retail store performance metrics. Helped identify key growth opportunities and operational inefficiencies across multiple store locations.',
      tags: ['Python', 'SQL', 'Tableau', 'Excel'],
      image: '/lovable-uploads/3464853a-6072-4a83-8ee8-b7e678764433.png',
      liveLink: '#',
      codeLink: '#',
      caseStudyLink: '#'
    },
    {
      title: 'Data Visualizer Pro',
      description: 'An interactive data visualization tool that helps users understand complex datasets through customizable charts and graphs. Includes export options and sharing capabilities.',
      tags: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      image: '/placeholder.svg',
      liveLink: '#',
      codeLink: '#',
      caseStudyLink: '#'
    },
    {
      title: 'Smart Home Hub',
      description: 'A central control system for smart home devices that integrates with various IoT products. Features include automation rules, voice control, and mobile app remote access.',
      tags: ['Python', 'Flask', 'React Native', 'Firebase'],
      image: '/placeholder.svg',
      liveLink: '#',
      codeLink: '#',
      caseStudyLink: '#'
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
          <Card key={index} className="reveal glass-card overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="aspect-video bg-muted overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="grid grid-cols-3 gap-2 w-full">
                <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} />
                    Live
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Code size={14} />
                    Code
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
                  <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                    <FileText size={14} />
                    Case Study
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
