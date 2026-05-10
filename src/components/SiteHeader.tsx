import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Verein", to: "/verein" },
  { label: "Bootshaus", to: "/bootshaus" },
  {
    label: "Rudern",
    children: [
      { label: "Anfängerkurse", to: "/rudern/anfaengerkurse" },
      { label: "Breitensport", to: "/rudern/breitensport" },
      { label: "Wanderrudern", to: "/rudern/wanderrudern" },
      { label: "Leistungssport", to: "/rudern/leistungssport" },
    ],
  },
  { label: "Aktuelles", to: "/aktuelles" },
  { label: "Termine", to: "/termine" },
  { label: "Downloads", to: "/downloads" },
  { label: "Mitglieder", to: "/mitglieder" },
  { label: "Kontakt", to: "/kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight">Ruderverein</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">seit 1898</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="text-sm text-foreground/80 transition hover:text-foreground">
                  {item.label}
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-md border border-border bg-card p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block whitespace-nowrap rounded px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-foreground/80 transition hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground font-medium" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </div>
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block py-2 pl-3 text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block py-2 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
