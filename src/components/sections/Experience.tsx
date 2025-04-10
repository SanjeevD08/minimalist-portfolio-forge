
import Section from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Position',
      company: 'Company Name',
      period: 'Jan 2021 - Present',
      description: 'Led cross-functional teams to deliver projects on time and within budget. Improved process efficiency by 30% through implementation of new methodologies.',
      achievements: [
        'Spearheaded the development of a new product feature that increased user engagement by 25%',
        'Managed a team of 8 professionals across different departments',
        'Reduced operational costs by 15% through process optimization'
      ]
    },
    {
      role: 'Mid-level Position',
      company: 'Previous Company',
      period: 'Mar 2018 - Dec 2020',
      description: 'Collaborated with stakeholders to understand requirements and deliver solutions that met business objectives.',
      achievements: [
        'Successfully delivered 12 projects with an average client satisfaction rating of 4.8/5',
        'Implemented new workflow that increased team productivity by 20%',
        'Recognized as Employee of the Quarter twice'
      ]
    },
    {
      role: 'Junior Position',
      company: 'First Company',
      period: 'Jun 2016 - Feb 2018',
      description: 'Assisted in the development and implementation of various projects, gaining valuable industry experience.',
      achievements: [
        'Contributed to 5 major projects that helped establish the company in new markets',
        'Developed and maintained documentation that improved onboarding process',
        'Participated in client meetings and presented project updates'
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-secondary/50">
      <h2 className="section-title reveal">Work Experience</h2>
      <div className="space-y-8 mt-12">
        {experiences.map((exp, index) => (
          <Card key={index} className="reveal border-0 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              <CardHeader className="md:border-r border-border">
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
              </CardHeader>
              <CardContent className="col-span-3 p-6">
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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
