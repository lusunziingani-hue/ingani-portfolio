type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-500 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
