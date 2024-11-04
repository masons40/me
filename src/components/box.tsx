import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Box = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <div className={cn("rounded-md bg-primary dark:bg-card-foreground grid place-content-center w-10 h-10", className)}>
      {children}
    </div>
  )
}

export default Box