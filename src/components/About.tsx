import SectionHeading from "./SectionHeading";
import profileImage from "../assets/profile.png";

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title="A developer focused on building useful software."
        description="I’m interested in the intersection of software engineering, data, products and intelligent systems."
      />

      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
          <img
            src={profileImage}
            alt="Ingani Mphephu"
            className="h-full min-h-[420px] w-full object-cover object-top"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xl leading-9 text-slate-700">
            I’m a software developer based in Cape Town, focused on building
            practical web applications and exploring intelligent systems.
          </p>

          <p className="mt-6 leading-8 text-slate-500">
            My professional experience includes frontend development, enterprise
            software, SQL databases, REST and SOAP integrations, debugging and
            working with production systems.
          </p>

          <p className="mt-6 leading-8 text-slate-500">
            I also build independent products to strengthen my understanding of
            software architecture, user experience, product thinking and
            AI-enabled systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              Software Engineering
            </span>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Web Applications
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              AI Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
