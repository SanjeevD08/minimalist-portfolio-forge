
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <Section id="resume" className="bg-secondary/30">
      <div className="flex flex-col items-center text-center">
        <div className="max-w-xl mb-8">
          <h2 className="section-title reveal">My Resume</h2>
          <p className="text-muted-foreground mt-6 reveal">
            Download my resume to learn more about my education, work experience, 
            and the skills I've developed throughout my career.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6 mt-4 reveal">
          <div className="glass-card p-6 rounded-xl">
            <FileText size={64} className="text-primary/80 mb-4" />
            <Button size="lg" className="gap-2" asChild>
              <a href="#" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">PDF format, last updated April 2023</p>
        </div>
        
        <div className="mt-16 w-full max-w-2xl reveal">
          <h3 className="text-xl font-semibold mb-4 text-left">Professional Overview</h3>
          <p className="text-muted-foreground text-left">
            My resume includes comprehensive details about my professional journey, including:
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-5 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">1</span>
                </div>
                <div>
                  <span className="font-medium">Education and Certifications</span>
                  <p className="text-sm text-muted-foreground mt-1">My academic background and professional certifications</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">2</span>
                </div>
                <div>
                  <span className="font-medium">Work Experience</span>
                  <p className="text-sm text-muted-foreground mt-1">Detailed history of my professional roles and responsibilities</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div>
                  <span className="font-medium">Technical Proficiencies</span>
                  <p className="text-sm text-muted-foreground mt-1">A comprehensive list of technologies and tools I'm proficient in</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-left">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">4</span>
                </div>
                <div>
                  <span className="font-medium">Achievements and Awards</span>
                  <p className="text-sm text-muted-foreground mt-1">Recognition and notable accomplishments from my career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Resume;
