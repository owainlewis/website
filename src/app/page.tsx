import { LINKS } from "@/lib/constants";
import { KitForm } from "@/components/kit-form";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "YouTube", href: LINKS.youtube },
  { label: "Newsletter", href: LINKS.newsletter },
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
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[13px] text-secondary hover:text-foreground transition-colors"
            >
              YouTube
            </a>
            <a
              href={LINKS.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[13px] text-secondary hover:text-foreground transition-colors hidden sm:block"
            >
              Community
            </a>
            <a
              href={LINKS.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[13px] text-secondary hover:text-foreground transition-colors"
            >
              Newsletter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — introduce who you are */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-6 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="max-w-2xl">
            <h1 className="anim-fade-up anim-d1 font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal tracking-[-0.02em] leading-[1.05] mb-7">
              AI systems to give your business{" "}
              <span className="whitespace-nowrap">
                an <em className="italic">unfair advantage</em>.
              </span>
            </h1>

            <p className="anim-fade-up anim-d2 text-[18px] sm:text-[19px] text-secondary leading-[1.65] max-w-[560px] mb-10">
              20 years of shipping production software. Now I help companies
              build AI systems through my agency, and teach what I learn to an
              AI developer community.
            </p>

            <div className="anim-fade-up anim-d3 flex flex-wrap gap-3">
              <a
                href={LINKS.gradientWork}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-accent text-foreground font-semibold rounded-full hover:brightness-95 active:scale-[0.98] transition-all text-[15px]"
              >
                Work with me →
              </a>
              <a
                href={LINKS.skool}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-foreground/15 bg-card text-foreground font-semibold rounded-full hover:border-foreground/40 active:scale-[0.98] transition-all text-[15px]"
              >
                Join the community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[12px] uppercase tracking-[0.14em] text-muted border-b border-border/40">
        <span>
          Audience of{" "}
          <strong className="text-foreground font-semibold">60,000+</strong>{" "}
          engineers
        </span>
        <span className="text-border hidden sm:inline">·</span>
        <span>
          <strong className="text-foreground font-semibold">20 years</strong>{" "}
          shipping production software
        </span>
      </div>

      {/* About */}
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 pt-20 sm:pt-28 pb-8">
        <div className="grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-14 items-center max-w-3xl">
          <Image
            src="/editorial.jpg"
            alt="Owain Lewis"
            width={220}
            height={275}
            className="rounded-2xl object-cover w-full h-auto"
          />
          <div>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.02em] leading-[1.1] mb-5">
              Two decades of shipping,{" "}
              <em className="italic">now all-in on AI.</em>
            </h2>
            <p className="text-[17px] text-secondary leading-[1.7] mb-4">
              I&apos;m Owain — a software engineer who&apos;s spent two decades
              building production systems. I now focus full-time on AI, building
              real systems for businesses through{" "}
              <a
                href={LINKS.gradientWork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                Gradient Work
              </a>
              .
            </p>
            <p className="text-[17px] text-secondary leading-[1.7]">
              I share everything I learn — on{" "}
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                YouTube
              </a>
              , in my{" "}
              <a
                href={LINKS.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                newsletter
              </a>
              , and with{" "}
              <a
                href={LINKS.skool}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                an AI developer community
              </a>{" "}
              in the AI Engineer community.
            </p>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24">
        <p className="eyebrow mb-6">Two ways to work together</p>
        <div className="grid sm:grid-cols-[1.15fr_1fr] gap-6">
          <a
            href={LINKS.gradientWork}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-foreground text-white rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-serif text-[clamp(1.65rem,3vw,2.1rem)] tracking-[-0.02em] leading-[1.15] mb-4">
              Get AI working{" "}
              <em className="italic text-accent">in your business.</em>
            </h3>
            <p className="text-[17px] text-white/55 leading-[1.7] mb-8 flex-1">
              You have a problem that AI can solve. I&apos;ll design, build, and
              ship a production system tailored to your business — in weeks, not
              months.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 group-hover:text-accent group-hover:gap-3 transition-all duration-300">
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

          <a
            href={LINKS.skool}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/[0.04] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-serif text-[clamp(1.65rem,3vw,2.1rem)] tracking-[-0.02em] leading-[1.15] mb-4">
              Join the{" "}
              <em className="italic">AI developer community.</em>
            </h3>
            <p className="text-[17px] text-secondary leading-[1.7] mb-8 flex-1">
              Engineers learning to build, ship, and monetise AI systems.
              Courses, live builds, code reviews, and real project templates.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground group-hover:gap-3 transition-all duration-300">
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

      {/* Newsletter signup */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-24 sm:py-32">
          <div className="max-w-xl mx-auto text-center">
            <p className="eyebrow mb-5 justify-center">Newsletter</p>
            <h2 className="font-serif text-[clamp(1.85rem,3.5vw,2.75rem)] tracking-[-0.02em] leading-[1.1] mb-4">
              A short weekly note,{" "}
              <em className="italic">straight from the build log.</em>
            </h2>
            <p className="text-[17px] text-secondary leading-[1.7] mb-8">
              What I&apos;m building, what&apos;s working, and new resources I
              publish. No spam, unsubscribe anytime.
            </p>
            <div className="max-w-md mx-auto">
              <KitForm buttonText="Subscribe" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-8 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-muted hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-[12px] text-muted">
            &copy; {new Date().getFullYear()} Owain Lewis
          </span>
        </div>
      </footer>
    </>
  );
}
