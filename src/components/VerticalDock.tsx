
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
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#home',
  },
  {
    title: 'About',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#about',
  },
  {
    title: 'Experience',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#experience',
  },
  {
    title: 'Projects',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#projects',
  },
  {
    title: 'Resume',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#resume',
  },
  {
    title: 'Contact',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#contact',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];

export function VerticalDock() {
  return (
    <div className='fixed left-4 top-1/2 z-50 max-h-full -translate-y-1/2'>
      <Dock className='items-center py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className={`group relative aspect-square rounded-full bg-gray-100/50 dark:bg-neutral-800/50 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all delay-${idx * 100}`}
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
