"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/career", label: "Career" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight">DevSpectra</span>
          <span className="text-xs text-muted">/ studio</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-ink/80 transition hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/services" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent md:inline-block">
            Get a quote
          </Link>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line md:hidden">
          <div className="mx-auto flex max-w-screen flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm hover:bg-surface">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
