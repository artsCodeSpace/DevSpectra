"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES, type ServiceKey } from "./service-data";
import { PhoneFrame } from "./PhoneFrame";
import { PhoneScreen } from "./PhoneScreen";
import { ArrowUpRight, Check } from "lucide-react";

export function InteractiveServices() {
  const [active, setActive] = useState<ServiceKey>("webdev");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Desktop: sync active service with scroll position
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.5) {
            const key = (e.target as HTMLElement).dataset.service as ServiceKey;
            if (key) setActive(key);
          }
        });
      },
      { threshold: [0.5, 0.75], rootMargin: "-30% 0px -30% 0px" },
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          What we do
        </div>
        <h2 className="bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl">
          Services that ship results
        </h2>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          Tap the phone — every service is a live, interactive demo of what we build for our clients.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Left: scrolling content */}
          <div className="space-y-24 lg:space-y-40">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.key}
                  ref={(el) => {
                    sectionRefs.current[s.key] = el;
                  }}
                  data-service={s.key}
                  onMouseEnter={() => setActive(s.key)}
                  className="relative scroll-mt-32"
                >
                  {/* Mobile-only inline phone */}
                  <div className="mb-8 flex justify-center lg:hidden">
                    <div className="scale-90">
                      <PhoneFrame>
                        <PhoneScreen service={s.key} />
                      </PhoneFrame>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/40">
                    <span className="font-mono text-xs">0{i + 1}</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <div
                    className={`mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-white/80">{s.tagline}</p>
                  <p className="mt-4 max-w-lg text-white/60">{s.description}</p>

                  <ul className="mt-6 grid max-w-lg gap-2 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${s.accent}`}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-4">
                    {s.stats.map((st) => (
                      <div
                        key={st.label}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
                      >
                        <div
                          className={`bg-gradient-to-br ${s.accent} bg-clip-text text-xl font-black text-transparent`}
                        >
                          {st.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-white/50">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/70"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>

          {/* Right: sticky phone (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <PhoneFrame>
                <PhoneScreen service={active} />
              </PhoneFrame>

              {/* Progress dots */}
              <div className="mt-8 flex justify-center gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => {
                      setActive(s.key);
                      sectionRefs.current[s.key]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      active === s.key ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={s.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
