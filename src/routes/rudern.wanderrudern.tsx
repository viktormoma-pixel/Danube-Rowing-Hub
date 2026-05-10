import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/rudern/wanderrudern")({
  head: () => ({
    meta: [
      { title: "Wanderrudern – Ruderverein" },
      { name: "description", content: "Fahrtenprogramm 2026 und Berichte vergangener Touren." },
    ],
  }),
  component: WanderPage,
});

const fahrten = [
  { datum: "Mai 2026", tour: "Frühjahrstour Donau – 2 Tage" },
  { datum: "Juni 2026", tour: "Wanderfahrt Passau – Linz" },
  { datum: "Juli 2026", tour: "Bodensee-Woche" },
  { datum: "September 2026", tour: "Herbstfahrt Altmühl" },
];

function WanderPage() {
  return (
    <PageShell
      eyebrow="Rudern"
      title="Wanderrudern"
      intro="Mehrtägige Fahrten auf Flüssen und Seen – die schönste Art zu reisen."
    >
      <section>
        <h2 className="font-serif text-2xl">Fahrtenprogramm 2026</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {fahrten.map((f) => (
            <div key={f.tour} className="flex items-center justify-between py-4">
              <div>{f.tour}</div>
              <div className="text-sm text-muted-foreground">{f.datum}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Berichte</h2>
        <p className="mt-4 text-muted-foreground">
          Berichte und Fotos vergangener Touren folgen hier in Kürze.
        </p>
      </section>
    </PageShell>
  );
}
