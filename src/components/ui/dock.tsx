
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: React.ReactNode;
  className?: string;
}

export function Dock({ children, className }: DockProps) {
  return (
    <div className={cn("flex gap-4 p-4 rounded-2xl bg-black/80 backdrop-blur-lg", className)}>
      {children}
    </div>
  );
}

interface DockItemProps {
  children: React.ReactNode;
  className?: string;
}

export function DockItem({ children, className }: DockItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-800/90 transition-all duration-300 ease-in-out hover:scale-125 shadow-md hover:shadow-lg",
        isHovered ? "animate-pulse" : "animate-float",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

interface DockIconProps {
  children: React.ReactNode;
}

export function DockIcon({ children }: DockIconProps) {
  return <div className="h-6 w-6 text-white">{children}</div>;
}

interface DockLabelProps {
  children: React.ReactNode;
}

export function DockLabel({ children }: DockLabelProps) {
  return (
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 hidden whitespace-nowrap rounded-md bg-black/90 px-3 py-1.5 text-xs text-white group-hover:block">
      {children}
    </div>
  );
}
