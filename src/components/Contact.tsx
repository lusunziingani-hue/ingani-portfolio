function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}Ingani%20Mphephu%20CV.pdf`;

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl md:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              Get in touch
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
              Let’s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m open to software development opportunities and projects where
              I can contribute, build and continue growing as an engineer.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:inganimphephu8@gmail.com"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Email me
              </a>

              <a
                href="tel:0699143490"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-900/30"
              >
                Call me
              </a>

              <a
                href={resumeUrl}
                download
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400 hover:bg-violet-900/30"
              >
                Download résumé
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-white/5 p-7">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:inganimphephu8@gmail.com"
                  className="mt-2 block text-sm font-medium text-white hover:text-violet-300"
                >
                  inganimphephu8@gmail.com
                </a>

                <a
                  href="mailto:lusunziingani@gmail.com"
                  className="mt-1 block text-sm font-medium text-slate-400 hover:text-violet-300"
                >
                  lusunziingani@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Phone
                </p>

                <a
                  href="tel:0699143490"
                  className="mt-2 block text-sm font-medium text-white hover:text-violet-300"
                >
                  069 914 3490
                </a>

                <a
                  href="tel:0790952121"
                  className="mt-1 block text-sm font-medium text-slate-400 hover:text-violet-300"
                >
                  079 095 2121
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Online
                </p>

                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/ingani-mphephu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-white hover:text-violet-300"
                  >
                    LinkedIn →
                  </a>

                  <a
                    href="https://github.com/lusunziingani-hue"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-white hover:text-violet-300"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
