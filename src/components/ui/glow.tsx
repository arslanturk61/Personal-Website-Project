import { cn } from "@/lib/utils";
import React from "react";

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "top" | "bottom" | "left" | "right" | "center";
}

export function Glow({ variant = "center", className, ...props }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        variant === "top" && "top-[-200px] left-0 right-0 h-[400px]",
        variant === "bottom" && "bottom-[-200px] left-0 right-0 h-[400px]",
        variant === "left" && "left-[-200px] top-0 bottom-0 w-[400px]",
        variant === "right" && "right-[-200px] top-0 bottom-0 w-[400px]",
        variant === "center" && "inset-[-200px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-20 blur-[100px]",
          variant === "top" && "bg-gradient-to-b from-primary to-transparent",
          variant === "bottom" && "bg-gradient-to-t from-primary to-transparent",
          variant === "left" && "bg-gradient-to-r from-primary to-transparent",
          variant === "right" && "bg-gradient-to-l from-primary to-transparent",
          variant === "center" && "bg-gradient-radial from-primary to-transparent"
        )}
      />
    </div>
  );
}