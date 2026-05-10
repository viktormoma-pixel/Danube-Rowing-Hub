import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Ruderverein" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <PageShell eyebrow="Rechtliches" title="Datenschutzerklärung">
      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="font-serif text-xl">1. Datenschutz auf einen Blick</h2>
          <h3 className="mt-4 font-medium">Allgemeine Hinweise</h3>
          <p className="mt-2 text-muted-foreground">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <h3 className="mt-4 font-medium">Datenerfassung auf unserer Website</h3>
          <p className="mt-2 text-muted-foreground">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">2. Verantwortliche Stelle</h2>
          <p className="mt-3 text-muted-foreground">
            {/* TODO: Vollständige Vereinsdaten eintragen */}
            Ruderverein Donau e.V.<br />
            Musterstraße 1, 12345 Musterstadt<br />
            E-Mail:{" "}
            <a href="mailto:info@ruderverein.de" className="underline hover:text-foreground">
              info@ruderverein.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">3. Erhebung und Speicherung personenbezogener Daten</h2>
          <h3 className="mt-4 font-medium">Kontakt- und Anmeldeformulare</h3>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie uns über das Kontaktformular oder die Anmeldemaske Anfragen zukommen lassen,
            werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
            bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2 text-muted-foreground">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <h3 className="mt-4 font-medium">Server-Logfiles</h3>
          <p className="mt-2 text-muted-foreground">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Logfiles (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit).
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">4. Externe Dienste</h2>
          <h3 className="mt-4 font-medium">Google Fonts</h3>
          <p className="mt-2 text-muted-foreground">
            {/* TODO: Entweder Google Fonts lokal hosten (empfohlen) oder Einwilligungsbanner einbauen */}
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google
            Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in seinen
            Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen. Dabei wird Ihre
            IP-Adresse an Google-Server übertragen. Google Fonts werden lokal bereitgestellt –
            es erfolgt keine Verbindung zu Google-Servern.
          </p>
          <p className="mt-2 text-muted-foreground text-amber-700 font-medium">
            ⚠️ Hinweis für den Entwickler: Google Fonts werden derzeit noch extern von
            fonts.googleapis.com geladen. Dies muss vor dem Go-Live auf Self-Hosting umgestellt
            werden (siehe LG München I, Az. 3 O 17493/20).
          </p>
          <h3 className="mt-4 font-medium">OpenStreetMap</h3>
          <p className="mt-2 text-muted-foreground">
            Auf der Seite „Bootshaus" binden wir eine Karte von OpenStreetMap (OSM) ein.
            Dabei wird Ihre IP-Adresse an Server der OpenStreetMap Foundation übertragen.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">5. Ihre Rechte</h2>
          <p className="mt-3 text-muted-foreground">
            Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten,
            auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            sowie das Recht auf Widerspruch. Wenden Sie sich dazu an:{" "}
            <a href="mailto:info@ruderverein.de" className="underline hover:text-foreground">
              info@ruderverein.de
            </a>
          </p>
          <p className="mt-3 text-muted-foreground">
            Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
            beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className="mt-3 text-muted-foreground">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die
            Weiterentwicklung unserer Website können Änderungen notwendig werden.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
