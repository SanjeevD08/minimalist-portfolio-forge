
import { Activity, Component, HomeIcon, Mail, Package, ScrollText, SunMoon, Database } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [{
  title: 'Home',
  icon: <HomeIcon className='h-full w-full text-white' />,
  href: '#home'
}, {
  title: 'About',
  icon: <Package className='h-full w-full text-white' />,
  href: '#about'
}, {
  title: 'Skills',
  icon: <Database className='h-full w-full text-white' />,
  href: '#skills'
}, {
  title: 'Experience',
  icon: <Component className='h-full w-full text-white' />,
  href: '#experience'
}, {
  title: 'Projects',
  icon: <Activity className='h-full w-full text-white' />,
  href: '#projects'
}, {
  title: 'Contact',
  icon: <Mail className='h-full w-full text-white' />,
  href: '#contact'
}, {
  title: 'Theme',
  icon: <SunMoon className='h-full w-full text-white' />,
  href: '#'
}];

export function HorizontalDock() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <Dock className="p-2 rounded-full glass-card bg-background/30 backdrop-blur-md border border-border/50">
        {data.map((item) => (
          <DockItem key={item.title} href={item.href}>
            <DockIcon>
              {item.icon}
            </DockIcon>
            <DockLabel>{item.title}</DockLabel>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
