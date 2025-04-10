
import Section from '@/components/Section';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'TypeScript', 'Node.js', 
    'Python', 'SQL', 'Git', 'Figma',
    'Product Management', 'UI/UX Design', 'Data Analysis'
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* About Me Text */}
        <div className="lg:col-span-8 order-2 lg:order-1">
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
        
        {/* Profile Photo Column */}
        <div className="lg:col-span-4 flex flex-col items-center justify-start order-1 lg:order-2">
          <div className="w-64 h-64 rounded-full overflow-hidden glass-card p-1 slide-from-left">
            <Avatar className="w-full h-full rounded-full">
              <AvatarImage src="/lovable-uploads/bded5035-7033-4a35-991f-e08e3d46e5be.png" alt="Profile Photo" className="w-full h-full object-cover" />
              <AvatarFallback className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                <span>Your Photo</span>
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
