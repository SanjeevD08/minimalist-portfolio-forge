'use client';

import { motion, MotionValue, useMotionValue, useSpring, useTransform, type SpringOptions, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;
type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};
type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
};
type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};
type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  height?: MotionValue<number>;
};
type DocContextType = {
  mouseX: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};
type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};
const DockContext = createContext<DocContextType | undefined>(undefined);
function DockProvider({
  children,
  value
}: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}
function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}
function Dock({
  children,
  className,
  spring = {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4);
  }, [magnification]);
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);
  return <motion.div style={{
    width: height,
    scrollbarWidth: 'none'
  }} className='my-2 flex max-h-full items-center overflow-y-auto flex-col'>
      
    </motion.div>;
}
function DockItem({
  children,
  className,
  href
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    distance,
    magnification,
    mouseX,
    spring
  } = useDock();
  const isHovered = useMotionValue(0);
  const mouseDistance = useTransform(mouseX, val => {
    const domRect = ref.current?.getBoundingClientRect() ?? {
      y: 0,
      height: 0
    };
    return val - domRect.y - domRect.height / 2;
  });
  const heightTransform = useTransform(mouseDistance, [-distance, 0, distance], [40, magnification, 40]);
  const height = useSpring(heightTransform, spring);
  const content = <motion.div ref={ref} style={{
    height
  }} onHoverStart={() => isHovered.set(1)} onHoverEnd={() => isHovered.set(0)} onFocus={() => isHovered.set(1)} onBlur={() => isHovered.set(0)} className={cn('relative inline-flex items-center justify-center', className)} tabIndex={0} role='button' aria-haspopup='true'>
      {Children.map(children, child => {
      if (!child) return null;
      return cloneElement(child as React.ReactElement, {
        height,
        isHovered
      });
    })}
    </motion.div>;
  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}
function DockLabel({
  children,
  className,
  isHovered
}: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isHovered) {
      const unsubscribe = isHovered.on('change', latest => {
        setIsVisible(latest === 1);
      });
      return () => unsubscribe();
    }
    return undefined;
  }, [isHovered]);
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      opacity: 0,
      x: 0
    }} animate={{
      opacity: 1,
      x: 10
    }} exit={{
      opacity: 0,
      x: 0
    }} transition={{
      duration: 0.2
    }} className={cn('absolute -right-20 top-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white', className)} role='tooltip' style={{
      y: '-50%'
    }}>
          {children}
        </motion.div>}
    </AnimatePresence>;
}
function DockIcon({
  children,
  className,
  height
}: DockIconProps) {
  const heightTransform = height ? useTransform(height, val => val / 2) : null;
  return <motion.div style={heightTransform ? {
    height: heightTransform
  } : undefined} className={cn('flex items-center justify-center', className)}>
      {children}
    </motion.div>;
}
export { Dock, DockIcon, DockItem, DockLabel };