
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: React.ReactNode;
  className?: string;
}

export function Dock({ children, className }: DockProps) {
  return (
    <div className={cn("flex flex-col gap-4 p-2", className)}>
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
        "flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-all duration-300 ease-in-out hover:scale-110",
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
  return <div className="h-8 w-8">{children}</div>;
}

interface DockLabelProps {
  children: React.ReactNode;
}

export function DockLabel({ children }: DockLabelProps) {
  return (
    <div className="absolute left-full ml-2 hidden whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white group-hover:block">
      {children}
    </div>
  );
}
