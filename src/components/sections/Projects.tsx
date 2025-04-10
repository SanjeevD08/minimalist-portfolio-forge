
import Section from '@/components/Section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Project Name 1',
      description: 'A comprehensive solution for [problem] that helps users [benefit]. Built with modern technologies and best practices.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Project Name 2',
      description: 'An innovative approach to [industry challenge]. This project demonstrates [skills or techniques].',
      tags: ['TypeScript', 'Express', 'PostgreSQL'],
      image: '/placeholder.svg',
      link: '#'
    },
    {
      title: 'Project Name 3',
      description: 'A collaborative effort to create [solution]. Features include [key features] that provide [benefits].',
      tags: ['Python', 'Flask', 'AWS'],
      image: '/placeholder.svg',
      link: '#'
    }
  ];

  return (
    <Section id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 reveal">
        A selection of projects that showcase my skills and expertise. Each project represents 
        unique challenges and solutions that I've implemented.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="reveal overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="aspect-video bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
