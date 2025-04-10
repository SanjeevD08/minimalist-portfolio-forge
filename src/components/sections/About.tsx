
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 
    'Python', 'SQL', 'Git', 'Figma',
    'Product Management', 'UI/UX Design', 'Data Analysis'
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Profile Photo Column */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-1 mb-6">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Your Photo Here</span>
            </div>
          </div>
        </div>
        
        {/* About Me Text */}
        <div className="lg:col-span-2">
          <h2 className="section-title reveal">About Me</h2>
          <div className="space-y-4 mt-6 reveal">
            <p className="text-muted-foreground">
              With a background in [your field], I have developed expertise in [your specialties]. 
              My journey began with [brief background] and I've since worked on [types of projects] 
              that have helped me grow as a professional.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about [your interests] and constantly looking to expand my 
              knowledge in [areas of learning]. My approach combines analytical thinking with 
              creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-muted-foreground">
              When I'm not working, you can find me [your hobbies/interests outside of work].
            </p>
          </div>
          
          {/* Skills */}
          <div className="mt-8 reveal">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <Separator className="mb-6" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 glass-card rounded-md font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
