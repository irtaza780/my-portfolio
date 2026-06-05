import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import type { DiagramNode } from "@/lib/data";

/** Compact architecture/flow diagram used inside case study cards. */
export function MiniDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="flex flex-wrap items-stretch gap-1.5">
      {nodes.map((node, i) => (
        <Fragment key={node.label}>
          <div className="min-w-[6.5rem] flex-1 rounded-lg border border-border bg-surface px-3 py-2">
            <div className="font-mono text-[11px] font-medium text-foreground">
              {node.label}
            </div>
            {node.sub ? (
              <div className="mt-0.5 font-mono text-[10px] text-faint">{node.sub}</div>
            ) : null}
          </div>
          {i < nodes.length - 1 ? (
            <ChevronRight className="h-4 w-4 shrink-0 self-center text-primary/50" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
