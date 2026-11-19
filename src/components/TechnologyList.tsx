import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface Props {
  technologies: Technology[];
  loading: boolean;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologyList({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: Props) {
  return (
    <section id="technologies" className="w-full scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          {/* Cards or loading */}
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-24 text-slate-500">
              <span className="loading loading-spinner loading-md"></span>
              Loading technologies...
            </div>
          ) : (
            <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
          )}

          {/* Sidebar */}
          <StackSidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}