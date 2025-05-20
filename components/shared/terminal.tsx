import { cn } from "@/lib/utils";
import type { TerminalProps } from "@/utils/types/shared.types";

export const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "border-border bg-background z-0 h-full w-fit rounded-xl border text-xs md:text-base",
        className
      )}
    >
      <div className="border-border flex flex-row gap-x-2 gap-y-2 border-b p-4">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
        <span className="h-2 w-2 rounded-full bg-green-500" />
      </div>

      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
};
