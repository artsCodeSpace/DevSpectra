import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom web development, e-commerce, UI/UX & branding, and digital marketing services from DevSpectra.",
};

const deliverables: Record<string, string[]> = {
  "Custom Web Development": ["Discovery & architecture", "Design system", "Full-stack build", "CI/CD & hosting"],
  "E-commerce": ["Storefront design", "Cart & checkout", "Payments (Stripe/UPI)", "Admin dashboard"],
  "UI/UX & Branding": ["Brand identity", "Design tokens", "Component library", "Prototyping"],
  "Digital Marketing": ["Technical SEO audit", "Keyword strategy", "Content calendar", "Analytics setup"],
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-screen px-6 pb-16 pt-20 md:pt-28">
        <SectionHeading eyebrow="Services" title="What we do, in detail." lead="Every engagement is scoped to your goals — pick a service or combine them into a retainer." />
      </section>
      <section className="mx-auto max-w-screen px-6 pb-24">
        <div className="divide-y divide-line border-y border-line">
          {services.map((s, i) => (
            <article key={s.title} className="grid gap-8 py-14 md:grid-cols-12">
              <div className="md:col-span-1 font-serif text-2xl text-muted">{String(i + 1).padStart(2, "0")}</div>
              <div className="md:col-span-5">
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">{s.title}</h2>
                <p className="mt-3 text-muted">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="text-xs uppercase tracking-widest text-accent">Deliverables</div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {deliverables[s.title].map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-danger" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
