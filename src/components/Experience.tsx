
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-28"
    >
      <SectionHeading
        eyebrow="Career History"
        title="Professional Experience."
        description="Practical experience in business operations, coordination, and the transport industry."
      />

      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-start">
          <div>
            <h3 className="text-xl font-bold text-slate-950 md:text-2xl">
              Assistant Operations Manager
            </h3>

            <p className="mt-2 font-semibold text-violet-700">
              Omega Line Coaches
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Transport Operations · South Africa
            </p>
          </div>

          <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
            Approximately 2020–2023
          </span>
        </div>

        <div className="mt-7">
          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
            Responsibilities & Experience
          </h4>

          <ul className="mt-5 space-y-4">
            {[
              "Supported day-to-day transport operations and operational coordination.",
              "Worked around fleet maintenance and bus repair support processes.",
              "Handled operational tickets and assisted with the coordination of parts, stock, and supplies when required.",
              "Gained practical insight into how operational workflows, resources, and business needs connect.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 md:text-base">
                <span className="mt-0.5 font-bold text-violet-600">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl bg-violet-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            Connection to Software Development
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            My operations background informs my interest in building practical
            software, workflow tools, and intelligent systems that address
            real business problems.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Experience;
