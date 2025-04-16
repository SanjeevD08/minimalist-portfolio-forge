
import Section from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
      <div className="space-y-8 mt-12">
        {experiences.map((exp, index) => (
          <Card key={index} className="slide-from-left border-0 shadow-sm overflow-hidden glass-card">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <CardHeader className="md:border-r border-border">
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
                <p className="text-sm text-primary mt-3 font-medium">Tools: {exp.tools}</p>
              </CardHeader>
              <CardContent className="col-span-3 p-6">
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

