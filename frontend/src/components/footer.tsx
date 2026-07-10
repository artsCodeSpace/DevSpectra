import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto max-w-screen px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl">DevSpectra</div>
            <p className="mt-3 max-w-sm text-sm text-muted">
              A small studio building pixel-perfect websites, fast web apps and cloud-native products.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted">Studio</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-accent">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent">Portfolio</Link></li>
              <li><Link href="/career" className="hover:text-accent">Career</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted">Contact</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hello@devspectra.in" className="hover:text-accent">hello@devspectra.in</a></li>
              <li className="text-muted">India · Remote worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <span>© {new Date().getFullYear()} DevSpectra. All rights reserved.</span>
          <span>Made with care · Web · Mobile · Cloud</span>
        </div>
      </div>
    </footer>
  );
}
