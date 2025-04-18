
import { Database, BarChart, Briefcase, Wrench } from 'lucide-react';
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';

const Skills = () => {
  const skills = {
    technical: {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Technical Skills",
      description: "Data analysis & technical expertise",
      items: [
        'Python', 'SQL', 'R', 
        'Tableau', 'Excel', 'VBA', 
        'Data Modeling', 'Statistics'
      ]
    },
    supplyChain: {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Supply Chain",
      description: "Operations & optimization skills",
      items: [
        'Forecasting', 'Inventory', 
        'Procurement', 'Resource Allocation', 
        'ABC Analysis', '6S Methodology'
      ]
    },
    tools: {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Tools",
      description: "Software & platforms",
      items: [
        'Jira', 'Power BI', 
        'Git', 'Visio', 
        'Toast POS'
      ]
    },
    business: {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Methodologies",
      description: "Professional frameworks",
      items: [
        'Agile', 'Scrum', 
        'Lean Six Sigma', 
        'Stakeholder Engagement', 
        'Collaboration'
      ]
    }
  };

  return (
    <Section id="skills">
      <h2 className="section-title mb-6">My Skills</h2>
      <Separator className="mb-12" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([key, category]) => (
          <div 
            key={key} 
            className="glass-card p-8 rounded-xl space-y-4 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02] 
              bg-gradient-to-br from-white/10 to-white/5 
              border border-white/20 dark:border-white/10
              hover:border-primary/20 hover:shadow-primary/10
              focus-within:ring-2 focus-within:ring-primary/30"
          >
            <div className="flex items-center gap-3">
              {category.icon}
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{category.description}</p>
            
            <div className="flex flex-col gap-2">
              {category.items.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 bg-primary/5 hover:bg-primary/10 rounded-full text-xs font-medium transition-colors"
                  tabIndex={0}
                >
                  <span className="mr-2 text-primary">•</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
