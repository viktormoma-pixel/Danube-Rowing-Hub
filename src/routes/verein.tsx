import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/verein")({
  head: () => ({
    meta: [
      { title: "Verein & Geschichte – Ruderverein seit 1898" },
      { name: "description", content: "Über 125 Jahre Tradition: Geschichte, Vorstand und Ehrenmitglieder unseres Rudervereins." },
    ],
  }),
  component: VereinPage,
});

const timeline = [
  { year: "1898", text: "Gründung des Vereins durch sieben Ruderbegeisterte." },
  { year: "1912", text: "Bau des ersten Bootshauses am Donauufer." },
  { year: "1948", text: "Wiederaufbau nach dem Zweiten Weltkrieg." },
  { year: "1972", text: "Erste internationale Regatta-Erfolge." },
  { year: "1998", text: "100-jähriges Jubiläum mit Festwoche." },
  { year: "2018", text: "Modernisierung des Bootshauses am Westbad." },
  { year: "2026", text: "Heute: über 400 aktive Mitglieder." },
];

const vorstand = [
  { name: "Vorsitz", person: "N. N." },
  { name: "Stellv. Vorsitz", person: "N. N." },
  { name: "Kasse", person: "N. N." },
  { name: "Sportwart", person: "N. N." },
  { name: "Jugendwart", person: "N. N." },
  { name: "Bootswart", person: "N. N." },
];

function VereinPage() {
  return (
    <PageShell
      eyebrow="Über uns"
      title="Verein & Geschichte"
      intro="Seit 1898 prägt unser Ruderverein das sportliche Leben an der Donau – getragen von Tradition, Gemeinschaft und sportlichem Anspruch."
    >
      <section>
        <h2 className="font-serif text-2xl">Timeline</h2>
        <ol className="mt-6 border-l border-border">
          {timeline.map((t) => (
            <li key={t.year} className="relative pl-8 pb-8">
              <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-accent" />
              <div className="font-serif text-lg">{t.year}</div>
              <p className="text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Vorstand</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 md:grid-cols-3">
          {vorstand.map((v) => (
            <div key={v.name} className="bg-background p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{v.name}</div>
              <div className="mt-1 font-serif text-lg">{v.person}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Ehrenmitglieder</h2>
        <p className="mt-4 text-muted-foreground">
          Die vollständige Liste unserer Ehrenmitglieder finden Sie im internen Bereich.
        </p>
      </section>
    </PageShell>
  );
}
