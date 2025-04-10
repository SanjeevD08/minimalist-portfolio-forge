
import { useState } from 'react';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    { 
      icon: Mail, 
      title: 'Email', 
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    { 
      icon: Phone, 
      title: 'Phone', 
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    { 
      icon: Linkedin, 
      title: 'LinkedIn', 
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile'
    },
    { 
      icon: Github, 
      title: 'GitHub', 
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername'
    }
  ];

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title reveal">Get In Touch</h2>
          <p className="text-muted-foreground mt-6 mb-8 reveal">
            Have a question or want to work together? Fill out the form and I'll get 
            back to you as soon as possible.
          </p>
          
          <div className="space-y-6 reveal">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <method.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-medium">{method.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="reveal">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
