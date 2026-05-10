import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/bootshaus")({
  head: () => ({
    meta: [
      { title: "Bootshaus & Lage – Ruderverein" },
      { name: "description", content: "Unser Bootshaus liegt direkt am Donauufer neben dem Westbad. Galerie und Anfahrt." },
    ],
  }),
  component: BootshausPage,
});

function BootshausPage() {
  return (
    <PageShell
      eyebrow="Bootshaus & Lage"
      title="Am Donauufer, neben dem Westbad"
      intro="Unser historisches Bootshaus ist Heimat von Booten, Werkstatt, Sportraum und Vereinsleben."
    >
      <section>
        <h2 className="font-serif text-2xl">Galerie</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded bg-muted" aria-label="Foto folgt" />
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-2xl">Anfahrt</h2>
        <div className="mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-border">
          <iframe
            title="Karte Bootshaus"
            src="https://www.openstreetmap.org/export/embed.html?bbox=11.55%2C48.13%2C11.58%2C48.15&layer=mapnik"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </section>
    </PageShell>
  );
}
