import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Ruderverein" },
      { name: "description", content: "Kontaktformular und Ansprechpartner für Verwaltung, Jugend und Sport." },
    ],
  }),
  component: KontaktPage,
});

const ansprech = [
  { rolle: "Verwaltung", email: "info@ruderverein.de" },
  { rolle: "Jugend", email: "jugend@ruderverein.de" },
  { rolle: "Sport", email: "sport@ruderverein.de" },
];

function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${nachricht}`);
    window.location.href = `mailto:info@ruderverein.de?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <PageShell eyebrow="Kontakt" title="Vielen Dank!">
        <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
          <CheckCircle2 className="mt-1 h-6 w-6 text-accent" />
          <p>
            Ihre Nachricht wurde in Ihrem E-Mail-Programm vorbereitet. Bitte senden Sie die E-Mail ab – wir melden uns so schnell wie möglich.
          </p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      eyebrow="Kontakt"
      title="Wir freuen uns auf Sie"
      intro="Schreiben Sie uns – egal ob Mitgliedschaft, Schnupperkurs oder Pressefrage."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm" htmlFor="kontakt-name">Name <span className="text-accent">*</span></label>
            <input
              id="kontakt-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="kontakt-email">E-Mail <span className="text-accent">*</span></label>
            <input
              id="kontakt-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="kontakt-nachricht">Nachricht <span className="text-accent">*</span></label>
            <textarea
              id="kontakt-nachricht"
              rows={5}
              required
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90">
            Senden
          </button>
        </form>
        <div>
          <h2 className="font-serif text-2xl">Ansprechpartner</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {ansprech.map((a) => (
              <li key={a.rolle} className="flex items-center justify-between py-4">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{a.rolle}</span>
                <a href={`mailto:${a.email}`} className="text-sm hover:underline">{a.email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
