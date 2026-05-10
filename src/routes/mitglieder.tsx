import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/mitglieder")({
  head: () => ({
    meta: [
      { title: "Interner Bereich – Ruderverein" },
      { name: "description", content: "Mitglieder-Login für Bootsreservierung und vereinsinterne Dokumente." },
    ],
  }),
  component: MitgliederPage,
});

function MitgliederPage() {
  return (
    <PageShell
      eyebrow="Mitglieder"
      title="Interner Bereich"
      intro="Bootsreservierung, Arbeitsdienst-Stunden und vereinsinterne Dokumente."
    >
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center gap-2 text-accent">
          <Lock className="h-4 w-4" />
          <span className="text-xs uppercase tracking-wider">Login erforderlich</span>
        </div>
        <h2 className="mt-3 font-serif text-2xl">Mitglieder-Login</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm">E-Mail</label>
            <input type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm">Passwort</label>
            <input type="password" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          {/* TODO: Echte Login-Logik einbauen (z.B. Supabase Auth) */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert("Der Mitgliederbereich wird noch eingerichtet. Bitte wenden Sie sich an info@ruderverein.de.");
            }}
            className="w-full rounded-md bg-primary py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Anmelden
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Noch kein Zugang? Bitte beim Vorstand melden.
        </p>
      </div>
    </PageShell>
  );
}
