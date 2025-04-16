
import { BrainCog, Truck, Puzzle, Users } from 'lucide-react';
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';

const Skills = () => {
  const skills = {
    technical: {
      icon: <BrainCog className="w-6 h-6 text-primary" />,
      title: "Technical & Analytics",
      description: "Skills focused on data handling, analysis, and modeling",
      items: [
        'Python (Pandas, NumPy)',
        'SQL',
        'R',
        'Tableau',
        'Excel (Power Query, Pivot Tables)',
        'VBA',
        'Predictive Modeling',
        'Sentiment Analysis',
        'Descriptive Statistics',
        'Data Visualization'
      ]
    },
    supplyChain: {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Supply Chain Expertise",
      description: "Skills tied to planning, operations, sourcing, and optimization",
      items: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Procurement Strategy',
        'Supplier Evaluation',
        'Sourcing & Resource Allocation',
        'ABC Analysis',
        '6S, DMAIC, VSM',
        'Gantt Charts'
      ]
    },
    tools: {
      icon: <Puzzle className="w-6 h-6 text-primary" />,
      title: "Tools & Platforms",
      description: "Software and platforms for executing work",
      items: [
        'Jira',
        'Microsoft Visio',
        'Power BI',
        'Git',
        'Toast POS'
      ]
    },
    business: {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Business & Project Methodologies",
      description: "Methods and frameworks applied professionally",
      items: [
        'Agile (Scrum, Kanban)',
        'Lean Six Sigma',
        'Stakeholder Engagement',
        'Cross-Team Collaboration',
        'Root Cause Analysis'
      ]
    }
  };

  return (
    <Section id="skills">
      <h2 className="section-title mb-6">My Skills</h2>
      <Separator className="mb-12" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([key, category]) => (
          <div key={key} className="glass-card p-8 rounded-xl space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {category.items.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 bg-primary/5 hover:bg-primary/10 rounded-full text-sm font-medium transition-colors duration-200"
                  tabIndex={0}
                >
                  <span className="mr-2 text-primary">🔹</span>
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
