/**
 * Atmosphere & depth primitives for the "Operator's Command Center" aesthetic:
 * grain, grid texture, mesh light, the signature talent-graph motif, and a
 * large realistic browser mockup used as the product centerpiece.
 */
import cn from "classnames";

export const DotGrid = ({ className }) => (
  <div aria-hidden="true" className={cn("fj-dotgrid", className)} />
);

export const Mesh = ({ soft = false, className }) => (
  <div
    aria-hidden="true"
    className={cn(soft ? "fj-mesh-soft" : "fj-mesh", className)}
  />
);

/**
 * Signature motif — a living talent graph. Nodes pulse; edges connect them.
 * Deterministic layout (no randomness) so it renders identically every time.
 */
const NODES = [
  [12, 22],
  [28, 12],
  [44, 28],
  [22, 46],
  [40, 60],
  [58, 16],
  [70, 38],
  [62, 64],
  [82, 26],
  [88, 58],
  [50, 80],
  [30, 74],
  [76, 78],
  [14, 64],
  [92, 40],
];
const EDGES = [
  [0, 1],
  [1, 2],
  [2, 5],
  [5, 8],
  [8, 14],
  [2, 6],
  [6, 9],
  [9, 12],
  [3, 4],
  [4, 7],
  [7, 10],
  [10, 12],
  [0, 3],
  [3, 13],
  [13, 11],
  [11, 10],
  [2, 3],
  [6, 7],
  [4, 11],
];

export const NetworkField = ({
  className,
  stroke = "rgba(141,245,246,0.35)",
  node = "#8df5f6",
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 100 90"
    preserveAspectRatio="xMidYMid slice"
    className={cn("absolute inset-0 h-full w-full", className)}
  >
    <g>
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          stroke={stroke}
          strokeWidth="0.2"
        />
      ))}
    </g>
    <g>
      {NODES.map(([x, y], i) => (
        <circle
          key={i}
          className="fj-node"
          cx={x}
          cy={y}
          r="2.6"
          fill={node}
          style={{ animationDelay: `${(i % 6) * 0.5}s` }}
        />
      ))}
    </g>
  </svg>
);

/**
 * Large browser mockup with realistic chrome. `tone` switches light/ink.
 */
export const BrowserMockup = ({
  url = "futurejobs.ai",
  tone = "light",
  className,
  children,
}) => {
  const ink = tone === "ink";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl",
        ink
          ? "border border-white/10 bg-[var(--ink-700)] fj-window-ink"
          : "border border-[var(--color-border)] bg-bg-container fj-window",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-4 py-3",
          ink
            ? "border-white/8 bg-white/[0.03]"
            : "border-[var(--color-border)] bg-bg-layout",
        )}
      >
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div
          className={cn(
            "mx-auto flex items-center gap-2 rounded-lg px-3 py-1 text-xs",
            ink
              ? "bg-white/[0.06] text-white/55"
              : "bg-bg-base text-[var(--color-text-tertiary)]",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          {url}
        </div>
      </div>
      <div className={cn(ink ? "text-white" : "")}>{children}</div>
    </div>
  );
};
