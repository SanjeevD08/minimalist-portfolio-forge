
import { useState } from 'react';
import Section from '@/components/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
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
    {
      title: 'SVM for Classification & Regression',
      subtitle: 'Boston Housing Analysis',
      description: 'Explored Support Vector Machines (SVM) for both classification and regression tasks using Boston housing datasets.',
      tags: ['SVM', 'Machine Learning', 'Classification', 'Regression'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d908046960df86f4a3dd666&pm=c'
    },
    {
      title: 'Topic Modeling for News Articles',
      subtitle: 'Automated Classification with ML',
      description: 'Applied topic modeling and machine learning techniques to automatically classify news articles based on their textual content.',
      tags: ['NLP', 'Topic Modeling', 'Classification', 'Text Analytics'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b8d23124d9080d2af40e98bbca80370&pm=c'
    },
    {
      title: 'Predictive Analytics for Car Valuation',
      subtitle: 'Carvana Case Analysis',
      description: 'Applied predictive analytics to real-world business scenarios for used car valuations in the Carvana marketplace.',
      tags: ['Predictive Analytics', 'Business Intelligence', 'Regression'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b9d23124d9080788200de50cc75727f&pm=c'
    },
    {
      title: 'Twitter Analysis for Tech Influencers',
      subtitle: 'Engagement Dynamics Research',
      description: 'Conducted sophisticated analysis of Twitter data concerning technology influencers to understand and enhance their engagement dynamics.',
      tags: ['Social Media Analytics', 'NLP', 'Sentiment Analysis', 'Engagement Metrics'],
      caseStudyLink: 'https://neat-tumble-2ce.notion.site/Project-Portfolio-1b8d23124d9080199ce5f0f3f9a10662?p=1b9d23124d90807980f6c050fdff228a&pm=c'
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 8);

  return (
    <Section id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>
      <p className="text-muted-foreground max-w-2xl mb-12 reveal">
        A selection of projects that showcase my skills and expertise.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {visibleProjects.map((project, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a 
                href={project.caseStudyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="reveal glass-card overflow-hidden border-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full cursor-pointer">
                  <div className="p-4 flex items-center justify-between bg-gradient-to-r from-primary/10 to-primary/5">
                    <div>
                      <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{project.subtitle}</p>
                    </div>
                    <ExternalLink size={16} className="text-primary/70" />
                  </div>
                  
                  <CardContent className="space-y-3 p-4">
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <Code size={14} className="text-primary/70 shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
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

      {projects.length > 8 && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            className="group"
          >
            {showAllProjects ? (
              <>
                Show Less
                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                Show All Projects
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
