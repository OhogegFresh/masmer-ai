import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-28 md:pt-48 md:pb-40 bg-background"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      {/* Navy-to-transparent fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Orange glow orb */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "var(--orange)" }}
      />

      {/* Navy depth orb */}
      <div
        className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{ background: "var(--navy)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold mb-8"
          style={{
            borderColor: "var(--orange-border)",
            background: "var(--orange-muted)",
            color: "var(--text-orange)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--orange)" }} />
          Built by a contractor. Built for contractors.
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-extrabold tracking-[-0.04em] leading-[0.95] text-foreground">
          The{" "}
          <span className="text-gradient-orange">AI Brain</span>
          <br />
          Behind Your Business
        </h1>

        {/* Sub */}
        <p className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Answer every call, book every estimate, follow up every lead — automatically.
          Built for contractors who are tired of losing jobs to voicemail.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-bold text-white shadow-orange hover:scale-[1.02] active:scale-[0.99] transition-all"
            style={{ background: "var(--gradient-orange)" }}
          >
            Start for Free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-1.5 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-orange/50"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            See the features
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Social proof micro-line */}
        <p className="mt-8 text-xs" style={{ color: "var(--text-tertiary)" }}>
          No credit card required · First month free for early contractors
        </p>
      </div>
    </section>
  );
}