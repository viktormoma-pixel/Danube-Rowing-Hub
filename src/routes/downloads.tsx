import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Satzung & Downloads – Ruderverein" },
      { name: "description", content: "Mitgliedsanträge, Satzung und Vereinsordnungen als PDF." },
    ],
  }),
  component: DownloadsPage,
});

const docs = [
  { name: "Mitgliedsantrag (Erwachsene)", file: "#" },
  { name: "Mitgliedsantrag (Jugend)", file: "#" },
  { name: "Vereinssatzung", file: "#" },
  { name: "Bootsordnung", file: "#" },
  { name: "Beitragsordnung", file: "#" },
  { name: "Jugendordnung", file: "#" },
];

function DownloadsPage() {
  return (
    <PageShell
      eyebrow="Satzung & Downloads"
      title="Formulare & Ordnungen"
      intro="Alle wichtigen Vereinsdokumente zum Download."
    >
      <ul className="divide-y divide-border border-y border-border">
        {docs.map((d) => (
          <li key={d.name} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span>{d.name}</span>
            </div>
            <a
              href={d.file}
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <Download className="h-4 w-4" /> PDF
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
