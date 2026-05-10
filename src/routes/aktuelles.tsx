import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/aktuelles")({
  head: () => ({
    meta: [
      { title: "Aktuelles – Ruderverein" },
      { name: "description", content: "News aus Verein, Regatten und Vereinsleben." },
    ],
  }),
  component: NewsPage,
});

const cats = ["Alle", "Events", "Regatten", "Vereinsleben"];
const posts = [
  { cat: "Events", title: "Saisoneröffnung 2026", date: "12. Mai 2026", excerpt: "Wir starten in die neue Rudersaison mit Anrudern und Bootstaufe." },
  { cat: "Regatten", title: "Erfolg bei der Frühjahrsregatta", date: "28. April 2026", excerpt: "Unsere Achter-Crew belegt einen starken zweiten Platz." },
  { cat: "Vereinsleben", title: "Neuer Steg eingeweiht", date: "10. April 2026", excerpt: "Nach monatelanger Arbeit ist unser neuer Steg fertig." },
];

function NewsPage() {
  const [activecat, setActivecat] = useState("Alle");

  const filtered = activecat === "Alle" ? posts : posts.filter((p) => p.cat === activecat);

  return (
    <PageShell
      eyebrow="Aktuelles"
      title="News"
      intro="Nachrichten aus dem Vereinsleben, von Regatten und Veranstaltungen."
    >
      <div className="flex flex-wrap gap-2" role="group" aria-label="Kategorie-Filter">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActivecat(c)}
            aria-pressed={c === activecat}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              c === activecat
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted-foreground">Keine Beiträge in dieser Kategorie.</p>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-lg bg-muted" aria-label="Foto folgt" />
              <div className="mt-4 text-xs uppercase tracking-wider text-accent">{p.cat} · {p.date}</div>
              <h3 className="mt-2 font-serif text-2xl group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </PageShell>
  );
}
