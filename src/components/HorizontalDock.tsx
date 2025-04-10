
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-white' />
    ),
    href: '#home',
  },
  {
    title: 'About',
    icon: (
      <Package className='h-full w-full text-white' />
    ),
    href: '#about',
  },
  {
    title: 'Experience',
    icon: (
      <Component className='h-full w-full text-white' />
    ),
    href: '#experience',
  },
  {
    title: 'Projects',
    icon: (
      <Activity className='h-full w-full text-white' />
    ),
    href: '#projects',
  },
  {
    title: 'Resume',
    icon: (
      <ScrollText className='h-full w-full text-white' />
    ),
    href: '#resume',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w-full text-white' />
    ),
    href: '#contact',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-white' />
    ),
    href: '#',
  },
];

export function HorizontalDock() {
  return (
    <div className='fixed bottom-6 left-1/2 z-50 -translate-x-1/2'>
      <Dock>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="group relative transition-all"
          >
            <a href={item.href} className="flex items-center justify-center w-full h-full">
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </a>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
