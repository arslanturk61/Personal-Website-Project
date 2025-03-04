import { cn } from "@/lib/utils";
import React from "react";

interface MockupFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export function MockupFrame({
  size = "medium",
  className,
  children,
  ...props
}: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background shadow-md",
        size === "small" && "max-w-[800px]",
        size === "medium" && "max-w-[1000px]",
        size === "large" && "max-w-[1200px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "browser" | "phone" | "responsive";
  children: React.ReactNode;
}

export function Mockup({
  type = "browser",
  className,
  children,
  ...props
}: MockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        type === "browser" && "rounded-md",
        type === "phone" && "max-w-[320px] rounded-[32px] border-[8px]",
        className
      )}
      {...props}
    >
      {type === "browser" && (
        <div className="flex items-center gap-1 border-b bg-muted/50 px-3 py-2">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <div className="ml-2 h-4 w-full rounded-full bg-muted px-2 text-[8px] text-muted-foreground" />
        </div>
      )}
      {type === "phone" && (
        <div className="flex justify-center border-b py-2">
          <div className="h-2 w-16 rounded-full bg-muted" />
        </div>
      )}
      <div className="overflow-auto">{children}</div>
    </div>
  );
}