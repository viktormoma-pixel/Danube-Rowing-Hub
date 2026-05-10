import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/rudern/leistungssport")({
  head: () => ({
    meta: [
      { title: "Leistungssport – Ruderverein" },
      { name: "description", content: "Erfolge, Trainingspläne und Schulrudern-Kooperationen." },
    ],
  }),
  component: LeistungPage,
});

function LeistungPage() {
  return (
    <PageShell
      eyebrow="Rudern"
      title="Leistungssport"
      intro="Ambitionierte Athleten, strukturierte Trainingspläne und enge Kooperation mit Schulen."
    >
      <section>
        <h2 className="font-serif text-2xl">Aktuelle Erfolge</h2>
        <ul className="mt-6 space-y-2 text-muted-foreground">
          <li>· Landesmeisterschaft 2025 – 3× Gold</li>
          <li>· Bundeswettbewerb der Jugend – Finalteilnahme</li>
          <li>· Internationale Regatta München – 2. Platz Achter</li>
        </ul>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Schulrudern</h2>
        <p className="mt-4 text-muted-foreground">
          Wir kooperieren mit lokalen Schulen und bieten regelmäßige Trainingseinheiten für Schülerinnen und Schüler an.
        </p>
      </section>
    </PageShell>
  );
}
