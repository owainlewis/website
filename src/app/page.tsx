import { LINKS } from "@/lib/constants";
import { KitForm } from "@/components/kit-form";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "YouTube", href: LINKS.youtube },
  { label: "Newsletter", href: LINKS.newsletter },
  { label: "Gradient Work", href: LINKS.gradientWork },
  { label: "AI Engineer", href: LINKS.skool },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 h-[56px] flex items-center justify-between">
          <a
            href="/"
            className="font-display font-bold text-[15px] tracking-[-0.02em]"
          >
            Owain Lewis
          </a>
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-secondary hover:text-foreground transition-colors hidden sm:block"
            >
              YouTube
            </a>
            <a
              href={LINKS.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-secondary hover:text-foreground transition-colors hidden sm:block"
            >
              Community
            </a>
            <a
              href={LINKS.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-secondary hover:text-foreground transition-colors hidden sm:block"
            >
              AI Newsletter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="relative mx-auto max-w-[1120px] px-6 sm:px-8 pt-24 sm:pt-36 pb-28 sm:pb-40">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-24 items-center">
            <div>
              <h1 className="anim-fade-up font-display text-[clamp(2rem,4.8vw,3.75rem)] font-extrabold tracking-[-0.035em] leading-[1.08] mb-5">
                Free Claude Code skills
                <br className="hidden sm:block" /> to build better software with AI
              </h1>

              <p className="anim-fade-up anim-d1 text-[17px] text-secondary leading-[1.65] max-w-[500px] mb-10">
                Requirements. Architecture. Planning. Code review. Deployment.
                Install these skills once and use them on every project you
                touch. Built from 20 years of shipping production software.
              </p>

              <div
                id="free"
                className="anim-fade-up anim-d2 max-w-[480px] mb-3"
              >
                <KitForm buttonText="Get the free skills" />
              </div>
              <p className="anim-fade-up anim-d3 text-[13px] text-muted max-w-[480px] leading-relaxed">
                Enter your email for instant access to Blueprint — production-grade
                Claude Code skills covering the full dev lifecycle.
              </p>
            </div>

            {/* Photo */}
            <div className="hidden lg:block anim-scale-in anim-d4">
              <Image
                src="/hero.jpg"
                alt="Owain Lewis"
                width={320}
                height={320}
                className="rounded-2xl object-cover w-full h-auto grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility — inline, not a separate visual section */}
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-6 flex flex-wrap items-center justify-start gap-x-8 gap-y-2 text-[13px] text-muted border-b border-border/40">
        <span>
          <strong className="text-foreground font-semibold">50+</strong>{" "}
          production AI systems
        </span>
        <span className="text-border hidden sm:inline">|</span>
        <span>
          <strong className="text-foreground font-semibold">2,000+</strong>{" "}
          engineers in community
        </span>
        <span className="text-border hidden sm:inline">|</span>
        <span>
          <strong className="text-foreground font-semibold">20 years</strong>{" "}
          shipping software
        </span>
      </div>

      {/* Two paths — deliberately asymmetric */}
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 py-28 sm:py-36">
        <div className="grid sm:grid-cols-[1.15fr_1fr] gap-6">
          {/* Work with me — slightly larger */}
          <a
            href={LINKS.gradientWork}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-foreground text-white rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-display font-bold text-[clamp(1.4rem,2.5vw,1.65rem)] tracking-[-0.03em] leading-[1.2] mb-4">
              Get AI working in your business
            </h3>
            <p className="text-[15px] text-white/55 leading-[1.65] mb-8 flex-1">
              You have a problem that AI can solve. I&apos;ll design, build, and
              ship a production system tailored to your business — in weeks, not
              months.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-300">
              gradientwork.com
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 7h12m0 0L8 2m5 5L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          {/* Community */}
          <a
            href={LINKS.skool}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-display font-bold text-[clamp(1.4rem,2.5vw,1.65rem)] tracking-[-0.03em] leading-[1.2] mb-4 group-hover:text-accent transition-colors duration-300">
              Join 2,000+ AI builders
            </h3>
            <p className="text-[15px] text-secondary leading-[1.65] mb-8 flex-1">
              Engineers learning to build, ship, and monetise AI systems.
              Courses, live builds, code reviews, and real project templates.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-accent group-hover:gap-3 transition-all duration-300">
              Join the community
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 7h12m0 0L8 2m5 5L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] mb-4 leading-[1.12]">
                Your entire dev workflow, upgraded in one command
              </h2>
              <p className="text-secondary leading-relaxed max-w-md">
                Requirements, architecture, planning, code review, branching,
                commits, deployment. Free forever.
              </p>
            </div>
            <div>
              <div className="max-w-[480px] lg:ml-auto">
                <KitForm buttonText="Get the free skills" />
                <p className="text-[12px] text-muted mt-3">
                  Instant access. Plus a short weekly email on new skills and
                  builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-muted">
            &copy; {new Date().getFullYear()} Owain Lewis
          </span>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
