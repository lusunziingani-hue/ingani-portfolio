import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Frontend Development",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "jQuery",
    ],
  },
  {
    title: "Databases & Data",
    items: ["SQL", "PostgreSQL", "Oracle", "JSON", "XML"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST APIs", "SOAP", "API Integration"],
  },
  {
    title: "Software Engineering",
    items: [
      "Git",
      "Debugging",
      "Unit Testing",
      "User Acceptance Testing",
      "Agile",
    ],
  },
  {
    title: "Intelligent Systems",
    items: [
      "AI Fundamentals",
      "AI-Assisted Development",
      "AI Systems Concepts",
    ],
  },
];

function TechStack() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-28"
    >
      <SectionHeading
        eyebrow="Technical Skills"
        title="Technologies & Tools."
        description="A structured overview of my development technologies, data tools, integration concepts, and areas of technical interest."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40"
          >
            <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
