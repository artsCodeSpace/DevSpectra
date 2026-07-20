import Link from "next/link";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  Heart,
  Zap,
  Code2,
  Users,
  Trophy,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "About — DevSpectra",
  description:
    "DevSpectra is a design and engineering studio building fast, accessible web experiences, e-commerce platforms and brands that scale.",
  openGraph: {
    title: "About — DevSpectra",
    description:
      "Meet the team behind DevSpectra — a studio crafting custom web development, e-commerce, UI/UX and digital marketing solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const VALUES = [
  {
    icon: Rocket,
    title: "Ship fast, ship right",
    body: "We move quickly without cutting corners. Every release is measured against real Core Web Vitals, not vibes.",
  },
  {
    icon: Heart,
    title: "Craft over hype",
    body: "Pixel-perfect UI, type-safe code, thoughtful motion. The details compound into products people trust.",
  },
  {
    icon: Target,
    title: "Outcomes, not outputs",
    body: "Conversions, retention, revenue. We tie every design and engineering decision to a business metric.",
  },
  {
    icon: Zap,
    title: "Partners, not vendors",
    body: "We embed with your team, share the roadmap, and stay long after launch to iterate on what actually works.",
  },
];

const STATS = [
  { value: "50+", label: "Projects shipped" },
  { value: "25+", label: "Happy clients" },
  { value: "99%", label: "On-time delivery" },
  { value: "4.9★", label: "Avg. client rating" },
];

const STACK = [
  "React",
  "Next.js",
  "TanStack Start",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "Framer Motion",
  "Figma",
  "Cloudflare",
];

const TIMELINE = [
  {
    year: "2022",
    title: "The spark",
    body: "DevSpectra started as a two-person studio building landing pages for local businesses in India.",
  },
  {
    year: "2023",
    title: "Going full-stack",
    body: "Expanded into e-commerce and SaaS builds. First international clients from the US and UAE.",
  },
  {
    year: "2024",
    title: "Design systems era",
    body: "Doubled down on branding, motion and design systems. Launched 20+ production apps.",
  },
  {
    year: "2025",
    title: "A real studio",
    body: "Growing team, dedicated growth & marketing arm, and a portfolio spanning fintech, retail and D2C.",
  },
];

export default function AboutPage(){
  return (
    <div className="relative min-h-screen text-white">
      <AuroraBackground />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles className="h-3 w-3 text-violet-300" />
            About DevSpectra
          </div>
          <h1 className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-5xl font-black leading-[1.05] tracking-tight text-transparent sm:text-7xl">
            We build digital products <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              that actually ship.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            DevSpectra is a design and engineering studio helping ambitious
            founders and brands launch fast, scale reliably, and look sharp
            doing it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300">
              <Globe className="h-3.5 w-3.5" /> Our story
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              A studio born from a simple frustration.
            </h2>
          </div>
          <div className="space-y-5 text-white/70">
            <p>
              Too many agencies deliver pretty mockups and slow, brittle code.
              Too many freelancers ship code that no one else can maintain.
              We started DevSpectra because clients deserved both — beautiful
              product design <em>and</em> production-grade engineering under
              one roof.
            </p>
            <p>
              Today we work with founders, D2C brands, and product teams across
              India, the US, and the Middle East — building web apps,
              e-commerce platforms, brand systems, and growth engines that
              stand up to real traffic.
            </p>
            <p>
              We're small on purpose. Every project runs with senior people,
              transparent updates, and code you can hand to any team the day
              we hand it over.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
            >
              <div className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-300">
              <Heart className="h-3.5 w-3.5" /> What we value
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Principles that show up in every commit.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 ring-1 ring-white/10">
                  <v.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300">
              <Trophy className="h-3.5 w-3.5" /> The journey
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              From two laptops to a studio.
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-fuchsia-500/40 to-cyan-500/60 sm:left-1/2" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-3 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_4px_oklch(0.14_0.02_270)] sm:left-1/2" />
                  <div className="sm:w-1/2" />
                  <div className="ml-8 flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:ml-0 sm:mx-8">
                    <div className="text-xs font-mono text-violet-300">{t.year}</div>
                    <div className="mt-1 text-lg font-semibold">{t.title}</div>
                    <p className="mt-1 text-sm text-white/60">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300">
            <Code2 className="h-3.5 w-3.5" /> Our stack
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Boring tech. Ambitious ideas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            We pick tools that will still be great in five years — battle-tested,
            open, and fast.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team-ish */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 p-10 backdrop-blur sm:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-300">
                <Users className="h-3.5 w-3.5" /> The team
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Senior people. No handoffs to juniors.
              </h2>
              <p className="mt-4 text-white/70">
                Every DevSpectra engagement is led by senior designers and
                engineers who've shipped real products at real scale. You'll
                talk to the people writing the code, not an account manager.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Design", v: "UX, brand, motion" },
                { k: "Frontend", v: "React, TS, Tailwind" },
                { k: "Backend", v: "Node, Postgres, edge" },
                { k: "Growth", v: "SEO, ads, analytics" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <div className="text-sm font-semibold">{c.k}</div>
                  <div className="mt-1 text-xs text-white/50">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Tell us what you're building. We'll get back within 24 hours with a
            plan, a timeline, and honest pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@devspectra.in"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-500/30 transition hover:scale-105"
            >
              hello@devspectra.in <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
            >
              See our services
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} DevSpectra. Crafted with care in India.
      </footer>
    </div>
  );
}
function createFileRoute(_: string) {
  return (config: any) => config;
}

