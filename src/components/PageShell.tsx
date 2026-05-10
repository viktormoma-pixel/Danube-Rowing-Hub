import { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {eyebrow && (
        <div className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </div>
      )}
      <h1 className="font-serif text-4xl font-semibold md:text-6xl">{title}</h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      )}
      <div className="mt-12 space-y-8">{children}</div>
    </main>
  );
}
