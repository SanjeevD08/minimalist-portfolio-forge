
import Section from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Projects = () => {
  const projects = [
    {
      title: 'Retail Store Performance Analysis',
      subtitle: 'Green River Outdoor, Boston Metro Area',
      description: 'Enhanced data-driven decision-making by analyzing customer satisfaction and transaction data across five store locations.',
      tags: ['Pandas', 'Python', 'SciPy', 'Statistical Analysis'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d90805d9998cc4fb47c7259&pm=c'
    },
    {
      title: 'Strategic Negotiation and Partnership',
      subtitle: 'Simply Clean & Northeastern University',
      description: 'Examined negotiation process, key decision factors, contract finalization, and long-term value creation from this strategic partnership.',
      tags: ['RFQ\'S', 'Market Dojo'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d9080528c3cd1cd4c0c4e4f&pm=c'
    },
    {
      title: 'Strategic Pricing & Inventory',
      subtitle: 'PittaRosso Retail Optimization',
      description: 'Analyzed pricing strategy, promotional effectiveness, and inventory management to enhance business performance in a competitive retail landscape.',
      tags: ['Retail Analytics', 'Pricing Strategy', 'Inventory Management'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d90801da069d1c2c71d5b76&pm=c'
    },
    {
      title: 'Supply Chain Optimization',
      subtitle: 'The Coorg Experience – Coffee Strategy',
      description: 'Developed strategy for introducing AAA Arabica Coffee Beans from Coorg, India, into the U.S. market through Walmart partnership.',
      tags: ['Supply Chain', 'Market Entry', 'Retail Partnership'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d9080d8b6e3f5c7e1dd8467&pm=c'
    },
    {
      title: 'ML for Retail Sales Forecasting',
      subtitle: 'Walmart Sales Prediction',
      description: 'Explored machine learning techniques to predict weekly sales for a multinational retail store chain.',
      tags: ['Machine Learning', 'Forecasting', 'Retail Analytics'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b9d23124d90807bb6becc6126c79a8a&pm=c'
    },
  ];

  return (
    <Section id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 reveal">
        A selection of projects that showcase my skills and expertise.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <ExternalLink size={16} className="text-primary/70" />
                  </div>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-primary/70" />
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                  </CardContent>
                </Card>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>View full project details</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
