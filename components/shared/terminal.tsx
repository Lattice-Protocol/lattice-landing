import { cn } from "@/lib/utils";
import type { TerminalProps } from "@/utils/types/shared.types";

export const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "z-0 h-full text-xs md:text-base rounded-xl border border-border bg-background w-fit",
        className
      )}
    >
      <div className="gap-y-2 border-b border-border p-4 flex flex-row gap-x-2">
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
