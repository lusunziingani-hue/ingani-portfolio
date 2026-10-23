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

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-white text-slate-900"
    >
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="absolute right-0 top-20 -z-0 h-80 w-80 rounded-full bg-violet-100 blur-3xl" />

          <div className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium text-violet-700">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Software Developer · Cape Town
              </div>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                AI Systems & Web Applications
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-7xl">
                Ingani{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Mphephu
                </span>
                .
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
                I build software applications and explore intelligent systems
                that connect technology with real-world problems.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
                >
                  View my work →
                </a>

                <a
                  href="https://github.com/lusunziingani-hue"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                >
                  GitHub
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                >
                  Download résumé
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "Angular",
                  "PostgreSQL",
                  "Oracle",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-200 via-blue-100 to-transparent blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-violet-100">
                <img
                  src={profileImage}
                  alt="Ingani Mphephu"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Software · AI · Systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-24 bg-slate-50 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Things I’ve built."
              description="A selection of projects exploring software development, digital products, operations and intelligent systems."
            />

            <div className="grid gap-7 lg:grid-cols-2">
              <ProjectCard
                number="01"
                title="After Dark"
                description="A curated underground sonic experience website built from the ground up with HTML, CSS and JavaScript."
                technologies={["HTML", "CSS", "JavaScript"]}
                status="Completed"
                liveUrl="https://lusunziingani-hue.github.io/after-dark/"
                githubUrl="https://github.com/lusunziingani-hue/after-dark"
              />

              <ProjectCard
                number="02"
                title="Tether"
                description="An exploration of AI-native commerce intelligence, connecting user intent, products and intelligent systems."
                technologies={["React", "TypeScript", "AI"]}
                status="In development"
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
