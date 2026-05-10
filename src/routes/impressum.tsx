import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Ruderverein" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <PageShell eyebrow="Rechtliches" title="Impressum">
      <div className="prose prose-sm max-w-none space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="font-serif text-xl">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3 text-muted-foreground">
            {/* TODO: Echte Vereinsdaten eintragen */}
            Ruderverein Donau e.V.<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">Vertreten durch</h2>
          <p className="mt-3 text-muted-foreground">
            {/* TODO: Name des Vorstands eintragen */}
            1. Vorsitzender: N. N.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">Registereintrag</h2>
          <p className="mt-3 text-muted-foreground">
            {/* TODO: Vereinsregisternummer eintragen */}
            Eingetragen im Vereinsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: VR XXXXX
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">Kontakt</h2>
          <p className="mt-3 text-muted-foreground">
            {/* TODO: Telefonnummer und E-Mail eintragen */}
            Telefon: +49 (0) XXX XXXXXXX<br />
            E-Mail:{" "}
            <a href="mailto:info@ruderverein.de" className="underline hover:text-foreground">
              info@ruderverein.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">Haftungsausschluss</h2>
          <h3 className="mt-4 font-medium">Haftung für Inhalte</h3>
          <p className="mt-2 text-muted-foreground">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <h3 className="mt-4 font-medium">Haftung für Links</h3>
          <p className="mt-2 text-muted-foreground">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl">Urheberrecht</h2>
          <p className="mt-3 text-muted-foreground">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
