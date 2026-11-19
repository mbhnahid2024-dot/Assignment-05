import type { Technology } from "../types/technology";

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const badgeColors = [
  "bg-sky-50 text-sky-600 border-sky-200",
  "bg-emerald-50 text-emerald-600 border-emerald-200",
  "bg-orange-50 text-orange-500 border-orange-200",
  "bg-violet-50 text-violet-600 border-violet-200",
  "bg-amber-50 text-amber-600 border-amber-200",
  "bg-cyan-50 text-cyan-600 border-cyan-200",
];

export default function TechnologyCard({ tech, isAdded, onAdd }: Props) {
  const colorIndex =
    tech.id.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) %
    badgeColors.length;

  return (
    <div
      className={`flex h-full min-w-0 flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${
        isAdded ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"
      }`}
    >
      {/* Icon + badge */}
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-9 w-9 object-contain"
          onError={(e) => (e.currentTarget.style.visibility = "hidden")}
        />
        <span
          className={`rounded-full border px-3 py-0.5 text-xs font-medium ${badgeColors[colorIndex]}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      {/* Meta row (pushed to bottom so all cards line up) */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-100 pt-3 text-xs text-slate-500">
        <span className="rounded bg-gray-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="truncate">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {tech.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2.5 text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-red-50 text-red-600"
            : "cursor-pointer bg-[#0b0f1a] text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}