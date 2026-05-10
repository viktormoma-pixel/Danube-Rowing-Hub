import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/rudern/breitensport")({
  head: () => ({
    meta: [
      { title: "Breitensport – Ruderverein" },
      { name: "description", content: "Trainingszeiten und Technikschulungen für Freizeitruderer." },
    ],
  }),
  component: BreitenPage,
});

function BreitenPage() {
  const zeiten = [
    { tag: "Dienstag", zeit: "18:00 – 20:00", was: "Freies Rudern" },
    { tag: "Donnerstag", zeit: "18:00 – 20:00", was: "Technikschulung" },
    { tag: "Samstag", zeit: "09:00 – 12:00", was: "Gemeinsame Ausfahrt" },
    { tag: "Sonntag", zeit: "09:00 – 11:00", was: "Anfänger-Folgetraining" },
  ];
  return (
    <PageShell
      eyebrow="Rudern"
      title="Breitensport"
      intro="Regelmäßiges Training und Technikschulungen für alle Freizeitruderer."
    >
      <section>
        <h2 className="font-serif text-2xl">Trainingszeiten</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {zeiten.map((z) => (
            <div key={z.tag} className="grid grid-cols-3 gap-4 py-4">
              <div className="font-medium">{z.tag}</div>
              <div className="text-muted-foreground">{z.zeit}</div>
              <div>{z.was}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
