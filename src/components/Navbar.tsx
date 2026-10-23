function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="text-sm font-bold tracking-[0.2em] text-slate-950"
        >
          IMP<span className="text-violet-600">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a href="#work" className="transition hover:text-violet-600">
            Work
          </a>

          <a href="#about" className="transition hover:text-violet-600">
            About
          </a>

          <a href="#experience" className="transition hover:text-violet-600">
            Experience
          </a>

          <a href="#skills" className="transition hover:text-violet-600">
            Skills
          </a>

          <a href="#contact" className="transition hover:text-violet-600">
            Contact
          </a>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}Ingani%20Mphephu%20CV.pdf`}
          download
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
        >
          Résumé
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
