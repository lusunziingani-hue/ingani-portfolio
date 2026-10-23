import SectionHeading from "./SectionHeading";

const certifications = [
  {
    provider: "Google",
    title: "Introduction to AI",
    year: "2026",
  },
  {
    provider: "Google",
    title: "Use AI Responsibly",
    year: "2026",
  },
  {
    provider: "Google",
    title: "Maximize Productivity with AI Tools",
    year: "2026",
  },
  {
    provider: "Google",
    title: "Discover the Art of Prompting",
    year: "2026",
  },
  {
    provider: "IBM",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    year: "2026",
  },
];

function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Learning"
        title="Continuous development."
        description="Certifications supporting my development across web technologies and AI."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <div
            key={certification.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-violet-600">
              {certification.provider}
            </p>

            <h3 className="mt-3 font-semibold leading-6 text-slate-900">
              {certification.title}
            </h3>

            <p className="mt-4 text-sm text-slate-400">{certification.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
