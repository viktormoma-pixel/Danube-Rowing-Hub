import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const termine = [
    { date: "12. Mai", title: "Saisoneröffnung am Bootshaus", tag: "Verein" },
    { date: "24. Mai", title: "Schnupperkurs für Erwachsene", tag: "Kurs" },
    { date: "07. Juni", title: "Wanderfahrt Donau – Passau", tag: "Wandern" },
    { date: "21. Juni", title: "Internationale Regatta", tag: "Regatta" },
  ];
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-1080.webm" type="video/webm" media="(min-width: 768px)" />
          <source src="/hero-1080.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/hero-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Seit 1898</div>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[1.05] md:text-7xl">
            Rudern auf der Donau.
            <br />
            Tradition. Bewegung. Gemeinschaft.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Ein Verein für Anfänger, Freizeitruderer, Wanderfahrer und Leistungssportler – mitten am Westbad.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/anmeldung"
              search={{ typ: "mitglied" }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
            >
              Mitglied werden <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/anmeldung"
              search={{ typ: "kurs" }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Schnupperkurs buchen
            </Link>
          </div>
        </div>
      </section>

      {/* Nächste Termine */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Nächste Termine</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Was bald ansteht</h2>
          </div>
          <Link to="/termine" className="hidden items-center gap-1 text-sm text-foreground/70 hover:text-foreground md:inline-flex">
            Alle Termine <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {termine.map((t) => (
            <div key={t.title} className="grid grid-cols-12 items-center gap-4 py-5">
              <div className="col-span-3 font-serif text-xl text-foreground md:col-span-2">{t.date}</div>
              <div className="col-span-7 md:col-span-8">
                <div className="text-base">{t.title}</div>
              </div>
              <div className="col-span-2 text-right text-xs uppercase tracking-wider text-muted-foreground">
                {t.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bereiche */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">Unsere Bereiche</div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Vier Wege, das Rudern zu erleben</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
          {[
            { to: "/rudern/anfaengerkurse", title: "Anfängerkurse", desc: "Schnupperkurse für Erwachsene und Jugend." },
            { to: "/rudern/breitensport", title: "Breitensport", desc: "Trainingszeiten und Technikschulungen." },
            { to: "/rudern/wanderrudern", title: "Wanderrudern", desc: "Mehrtägige Touren auf Donau und mehr." },
            { to: "/rudern/leistungssport", title: "Leistungssport", desc: "Erfolge, Trainingspläne, Schulrudern." },
          ].map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className="group flex flex-col bg-background p-10 transition hover:bg-muted"
            >
              <div className="font-serif text-2xl">{b.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{b.desc}</div>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-foreground/70 transition group-hover:text-foreground">
                Mehr erfahren <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bootshaus Strip */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Bootshaus</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Direkt am Westbad</h2>
            <p className="mt-4 text-muted-foreground">
              Unser historisches Bootshaus liegt unmittelbar am Donauufer neben dem Westbad – mit Steg, Werkstatt und Vereinsraum.
            </p>
            <Link to="/bootshaus" className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              <MapPin className="h-4 w-4" /> Lage & Galerie
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-lg bg-muted" aria-label="Foto Bootshaus folgt" />
        </div>
      </section>
    </>
  );
}
