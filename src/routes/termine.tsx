import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/termine")({
  head: () => ({
    meta: [
      { title: "Terminkalender – Ruderverein" },
      { name: "description", content: "Alle Vereinstermine. Synchronisierbar mit Google Kalender und iCal." },
    ],
  }),
  component: TerminePage,
});

const items = [
  { date: "12.05.2026", title: "Saisoneröffnung am Bootshaus", tag: "Verein" },
  { date: "24.05.2026", title: "Schnupperkurs Erwachsene", tag: "Kurs" },
  { date: "07.06.2026", title: "Wanderfahrt Donau – Passau", tag: "Wandern" },
  { date: "21.06.2026", title: "Internationale Regatta", tag: "Regatta" },
  { date: "10.07.2026", title: "Sommerfest", tag: "Verein" },
  { date: "05.09.2026", title: "Herbstfahrt Altmühl", tag: "Wandern" },
];

function TerminePage() {
  return (
    <PageShell
      eyebrow="Kalender"
      title="Terminkalender"
      intro="Alle Vereinstermine auf einen Blick – einfach mit Ihrem Kalender synchronisieren."
    >
      <div className="flex flex-wrap gap-3">
        <a href="#" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">+ Google Kalender</a>
        <a href="#" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">iCal abonnieren</a>
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((i) => (
          <li key={i.title} className="grid grid-cols-12 gap-4 py-5">
            <div className="col-span-3 font-serif text-base md:col-span-2">{i.date}</div>
            <div className="col-span-7 md:col-span-8">{i.title}</div>
            <div className="col-span-2 text-right text-xs uppercase tracking-wider text-muted-foreground">{i.tag}</div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
