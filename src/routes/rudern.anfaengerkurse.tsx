import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/rudern/anfaengerkurse")({
  head: () => ({
    meta: [
      { title: "Anfängerkurse – Ruderverein" },
      { name: "description", content: "Schnupperkurse für Erwachsene und Jugend mit FAQ für Einsteiger." },
    ],
  }),
  component: AnfaengerPage,
});

const kurse = [
  { titel: "Schnupperkurs Erwachsene", termin: "Mai – Juni 2026", plaetze: "12 Plätze" },
  { titel: "Schnupperkurs Jugend (12–17)", termin: "Juni 2026", plaetze: "10 Plätze" },
  { titel: "Sommerkurs Intensiv", termin: "Juli 2026", plaetze: "8 Plätze" },
];

const faq = [
  { q: "Brauche ich Vorerfahrung?", a: "Nein. Unsere Trainer führen Sie Schritt für Schritt ein." },
  { q: "Was muss ich mitbringen?", a: "Sportkleidung, Schuhe mit dünner Sohle und Wechselsachen." },
  { q: "Muss ich schwimmen können?", a: "Ja, sicheres Schwimmen über 200 m ist Voraussetzung." },
];

function AnfaengerPage() {
  return (
    <PageShell
      eyebrow="Rudern"
      title="Anfängerkurse"
      intro="Steigen Sie ein. Unsere Schnupperkurse bringen Erwachsene und Jugendliche aufs Wasser."
    >
      <section>
        <h2 className="font-serif text-2xl">Aktuelle Kurse</h2>
        <div className="mt-6 space-y-3">
          {kurse.map((k) => (
            <div key={k.titel} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-5">
              <div>
                <div className="font-serif text-lg">{k.titel}</div>
                <div className="text-sm text-muted-foreground">{k.termin} · {k.plaetze}</div>
              </div>
              <Link
                to="/anmeldung"
                search={{ typ: "kurs", kurs: k.titel }}
                className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              >
                Platz buchen
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-2xl">FAQ</h2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {faq.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </PageShell>
  );
}
