import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Angular",
      "React",
      "jQuery",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data",
    items: ["SQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "Integration",
    items: ["REST", "SOAP", "XML", "JSON"],
  },
  {
    title: "Engineering",
    items: ["Git", "Code Review", "Unit Testing", "UAT", "Debugging", "Agile"],
  },
  {
    title: "AI / Emerging",
    items: ["AI Fundamentals", "AI Productivity", "Prompting", "AI Systems"],
  },
];

function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Technical capabilities"
        title="Technologies & tools."
        description="A combination of technologies I use professionally and areas I am actively developing."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-violet-200 hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
