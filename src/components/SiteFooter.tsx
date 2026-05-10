import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-lg">Ruderverein</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tradition auf der Donau seit 1898.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Verein</div>
          <ul className="space-y-1 text-sm">
            <li><Link to="/verein">Geschichte</Link></li>
            <li><Link to="/bootshaus">Bootshaus</Link></li>
            <li><Link to="/downloads">Satzung & Downloads</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Rudern</div>
          <ul className="space-y-1 text-sm">
            <li><Link to="/rudern/anfaengerkurse">Anfängerkurse</Link></li>
            <li><Link to="/rudern/breitensport">Breitensport</Link></li>
            <li><Link to="/rudern/wanderrudern">Wanderrudern</Link></li>
            <li><Link to="/rudern/leistungssport">Leistungssport</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Kontakt</div>
          <p className="text-sm text-muted-foreground">
            Bootshaus am Westbad<br />Donauufer<br />info@ruderverein.de
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ruderverein ·{" "}
        <Link to="/impressum" className="hover:text-foreground underline-offset-2 hover:underline">
          Impressum
        </Link>{" "}
        ·{" "}
        <Link to="/datenschutz" className="hover:text-foreground underline-offset-2 hover:underline">
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
