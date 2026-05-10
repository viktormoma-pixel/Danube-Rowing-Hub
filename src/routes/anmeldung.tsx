import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "../components/PageShell";
import { CheckCircle2 } from "lucide-react";

type Search = { typ?: "mitglied" | "kurs"; kurs?: string };

export const Route = createFileRoute("/anmeldung")({
  head: () => ({
    meta: [
      { title: "Anmeldung – Ruderverein" },
      { name: "description", content: "Online-Anmeldung für Mitgliedschaft und Schnupperkurse." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): Search => ({
    typ: s.typ === "kurs" ? "kurs" : "mitglied",
    kurs: typeof s.kurs === "string" ? s.kurs : undefined,
  }),
  component: AnmeldungPage,
});

function AnmeldungPage() {
  const { typ, kurs } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    geburtsjahr: "",
    nachricht: "",
    schwimmer: false,
    datenschutz: false,
  });

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const isKurs = typ === "kurs";
  const titel = isKurs ? "Anmeldung Schnupperkurs" : "Mitglied werden";
  const intro = isKurs
    ? "Sichern Sie sich Ihren Platz im Schnupperkurs. Wir bestätigen Ihre Anmeldung per E-Mail."
    : "Werden Sie Teil unserer Rudergemeinschaft seit 1898.";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.datenschutz) return;

    const subject = encodeURIComponent(
      isKurs ? `Kursanmeldung: ${kurs ?? "Schnupperkurs"}` : "Mitgliedsantrag"
    );
    const lines = [
      `Anmeldung: ${isKurs ? "Schnupperkurs" : "Mitgliedschaft"}`,
      kurs ? `Kurs: ${kurs}` : null,
      "",
      `Name: ${form.vorname} ${form.nachname}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.telefon}`,
      `Geburtsjahr: ${form.geburtsjahr}`,
      `Schwimmer (200 m): ${form.schwimmer ? "Ja" : "Nein"}`,
      "",
      "Nachricht:",
      form.nachricht,
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    const target = isKurs ? "kurse@ruderverein.de" : "info@ruderverein.de";
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <PageShell eyebrow="Anmeldung" title="Vielen Dank!">
        <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
          <CheckCircle2 className="mt-1 h-6 w-6 text-accent" />
          <div>
            <p>
              Ihre Anmeldung wurde in Ihrem E-Mail-Programm vorbereitet. Bitte senden Sie die Mail
              ab – wir melden uns innerhalb weniger Tage.
            </p>
            <Link to="/" className="mt-4 inline-block text-sm underline">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell eyebrow="Anmeldung" title={titel} intro={intro}>
      {isKurs && kurs && (
        <div className="rounded-md border border-border bg-muted px-4 py-3 text-sm">
          Gewählter Kurs: <span className="font-medium">{kurs}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Vorname" required value={form.vorname} onChange={(v) => update("vorname", v)} />
          <Field label="Nachname" required value={form.nachname} onChange={(v) => update("nachname", v)} />
          <Field label="E-Mail" type="email" required value={form.email} onChange={(v) => update("email", v)} />
          <Field label="Telefon" value={form.telefon} onChange={(v) => update("telefon", v)} />
          <Field label="Geburtsjahr" type="number" required value={form.geburtsjahr} onChange={(v) => update("geburtsjahr", v)} />
        </div>
        <div>
          <label className="text-sm">Nachricht</label>
          <textarea
            rows={4}
            value={form.nachricht}
            onChange={(e) => update("nachricht", e.target.value)}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            checked={form.schwimmer}
            onChange={(e) => update("schwimmer", e.target.checked)}
            className="mt-1"
          />
          <span>Ich kann sicher 200 m schwimmen.</span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            required
            checked={form.datenschutz}
            onChange={(e) => update("datenschutz", e.target.checked)}
            className="mt-1"
          />
          <span>
            Ich habe die{" "}
            <Link to="/datenschutz" target="_blank" className="underline hover:text-foreground">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zu.
          </span>
        </label>
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90"
        >
          Anmeldung absenden
        </button>
      </form>
    </PageShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
