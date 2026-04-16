import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  children: ReactNode;
};

export function LegalPageLayout(props: {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 border-b border-slate-200 pb-8 dark:border-slate-800">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">
            {props.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{props.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {props.intro}
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Ultima atualizacao: {props.updatedAt}
          </p>
        </div>

        <div className="space-y-8">
          {props.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {section.children}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
