import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Direction from "./components/Direction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profileImage from "./assets/profile.png";

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}Ingani%20Mphephu%20CV.pdf`;

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "PostgreSQL",
    "Oracle",
    "HTML",
    "CSS",
  ];

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
    >
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 md:pb-28 md:pt-36">
          <div className="pointer-events-none absolute right-0 top-20 -z-0 h-80 w-80 rounded-full bg-violet-100/80 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                Cape Town, South Africa
              </p>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 md:text-7xl">
                Ingani{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Mphephu
                </span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold leading-snug text-slate-800 md:text-2xl">
                Software Developer
              </h2>

              <p className="mt-2 text-base font-medium text-slate-500 md:text-lg">
                Applications · Data · Intelligent Systems
              </p>

              <div className="mt-9">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Technical Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  View Projects →
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700"
                >
                  Download CV
                </a>

                <a
                  href="https://github.com/lusunziingani-hue"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* PROFILE */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-200 via-blue-100 to-transparent opacity-80 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-violet-100/60">
                <img
                  src={profileImage}
                  alt="Ingani Mphephu"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="scroll-mt-24 bg-slate-50 py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Selected Projects"
              title="Selected Work."
              description="Software projects and digital products."
            />

            <div className="grid gap-7 lg:grid-cols-2">
              <ProjectCard
                number="01"
                title="After Dark"
                description="A curated underground music experience website built with HTML, CSS, and JavaScript."
                technologies={["HTML", "CSS", "JavaScript"]}
                status="Completed"
                liveUrl="https://lusunziingani-hue.github.io/after-dark/"
                githubUrl="https://github.com/lusunziingani-hue/after-dark"
              />

              <ProjectCard
                number="02"
                title="Tether"
                description="An AI-native commerce intelligence concept connecting user intent, product discovery, recommendations, and digital commerce."
                technologies={["React", "TypeScript", "Tailwind CSS"]}
                status="In Development"
              />
            </div>
          </div>
        </section>

        <About />

        <section className="border-y border-slate-100 bg-slate-50">
          <Experience />
        </section>

        <TechStack />

        <section className="border-y border-slate-100 bg-slate-50">
          <Certifications />
        </section>

        <Direction />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
