import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Professional engineering experience."
        description="Experience working with software, data, integrations and enterprise systems in a real business environment."
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-7 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-slate-950">
              Junior Software Developer
            </h3>

            <p className="mt-2 font-medium text-violet-600">
              Omega Fleet Services
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Cape Town, Western Cape
            </p>
          </div>

          <p className="text-sm font-medium text-slate-500">
            Jan 2024 — Present
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Build and maintain frontend components using JavaScript, HTML, jQuery and Angular.",
            "Write and optimize SQL queries across PostgreSQL and Oracle databases.",
            "Integrate REST and SOAP services using XML and JSON.",
            "Troubleshoot software defects and investigate root causes.",
            "Contribute to unit testing, UAT and wider test planning.",
            "Participate in code reviews and technical design discussions.",
            "Collaborate with Product Managers, Business Analysts and IT Operations.",
            "Work within agile delivery processes including sprint planning and retrospectives.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600"
            >
              <span className="mr-2 font-bold text-violet-600">→</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
