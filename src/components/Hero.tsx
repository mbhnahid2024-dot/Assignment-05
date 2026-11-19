import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="w-full scroll-mt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Text */}
        <div className="min-w-0">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span className="text-brand">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="bg-brand rounded-md px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#footer"
              className="rounded-md border border-gray-200 px-8 py-3 text-sm font-medium text-slate-700 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex min-w-0 justify-center lg:justify-end">
          <img
            src={banner}
            alt="Development stack illustration"
            className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}