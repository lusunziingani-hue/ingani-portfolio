import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-28"
    >
      <SectionHeading
        eyebrow="Professional Profile"
        title="Software Development Meets Business Operations."
        description="A software developer with a practical understanding of business operations, technology, and the problems software can solve."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
            Background
          </p>

          <h3 className="mt-4 text-xl font-bold text-slate-950">
            Understanding How Businesses Work
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            My professional background includes transport operations and
            fleet-maintenance support. That experience has given me practical
            insight into coordination, operational processes, and the importance
            of reliable systems.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Engineering Direction
          </p>

          <h3 className="mt-4 text-xl font-bold text-slate-950">
            Building Useful Software
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            I develop independent software projects using modern web
            technologies and databases. My interests include application
            development, software architecture, data-driven systems, and
            applying AI to practical business problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
