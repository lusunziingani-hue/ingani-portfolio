type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
};

function ProjectCard({
  number,
  title,
  description,
  technologies,
  status,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/60">
      {/* Project preview */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-blue-100" />

        <div className="relative text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-500">
            Project {number}
          </span>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">{title}</h3>
        </div>

        <div className="absolute right-5 top-5 rounded-full border border-white bg-white px-3 py-1.5 text-xs font-medium text-violet-700 shadow-sm">
          {status}
        </div>
      </div>

      <div className="p-7">
        <p className="leading-7 text-slate-500">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
            >
              Live Site →
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
