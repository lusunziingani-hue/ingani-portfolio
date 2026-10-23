function Direction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-8 md:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Direction
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            From software engineering to intelligent systems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            I’m building toward a deeper understanding of how software, data,
            APIs, cloud infrastructure and AI systems work together to solve
            complex problems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              "Software Engineering",
              "AI Engineering",
              "AI Systems",
              "Systems Architecture",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </span>

                {index < 3 && <span className="text-violet-500">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Direction;
