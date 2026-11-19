import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="h-fit w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
      <h3 className="text-lg font-semibold">Your Stack</h3>
      <p className="mt-1 text-xs text-slate-400">
        {stack.length} Technology Selected
      </p>

      {/* Conditional rendering: empty state vs list */}
      {stack.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center text-sm text-slate-400">
          Your stack is empty. Add technologies from the list to start building.
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-xs font-semibold">{tech.name}</p>
                  <p className="text-[10px] text-slate-400">{tech.category}</p>
                </div>
                <button
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech.id)}
                  className="cursor-pointer p-1 text-slate-400 transition hover:text-red-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-6 w-full cursor-pointer rounded-md border border-red-300 bg-white py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}