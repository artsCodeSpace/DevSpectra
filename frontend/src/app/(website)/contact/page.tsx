import { ArrowRight } from 'lucide-react';

export default function Contact(){
    return (
        <>
          <section id="contact" className="px-6 py-24">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 p-10 text-center backdrop-blur sm:p-16">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Let's build something real.</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
                Tell us about your project — we'll get back within 24 hours with a plan.
            </p>
            <a
                href="mailto:hello@devspectra.in"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
                hello@devspectra.in <ArrowRight className="h-4 w-4" />
            </a>
            </div>
        </section>
        </>
    )
}

