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

        <div className="relative mx-auto max-w-[1120px] px-6 sm:px-8 pt-28 sm:pt-40 pb-32 sm:pb-44">
          <div className="max-w-xl">
            <p className="anim-fade-up font-mono text-[12px] uppercase tracking-[0.15em] text-signal font-medium mb-5">
              AI Engineer &amp; Consultant
            </p>

            <h1 className="anim-fade-up anim-d1 font-display text-[clamp(2rem,4.8vw,3.75rem)] font-extrabold tracking-[-0.035em] leading-[1.08] mb-5 max-w-lg">
              AI systems to give your business an unfair advantage
            </h1>

            <p className="anim-fade-up anim-d2 text-[16px] sm:text-[17px] text-secondary leading-[1.7] max-w-[500px] mb-10">
              20 years of shipping production software. Now I help companies
              build AI systems through my agency, and teach what I learn to a
              an AI developer community.
            </p>

            <div className="anim-fade-up anim-d3 flex flex-wrap gap-4">
              <a
                href={LINKS.gradientWork}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-[15px]"
              >
                Work with me
              </a>
              <a
                href={LINKS.skool}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border bg-card text-foreground font-semibold rounded-xl hover:border-foreground/20 active:scale-[0.98] transition-all text-[15px]"
              >
                Join the community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-muted border-b border-border/40">
        <span>
          An audience of over{" "}
          <strong className="text-foreground font-semibold">60,000</strong>{" "}
          engineers and business owners
        </span>
        <span className="text-border hidden sm:inline">|</span>
        <span>
          <strong className="text-foreground font-semibold">20 years</strong>{" "}
          shipping production software
        </span>
      </div>

      {/* About */}
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 pt-20 sm:pt-24 pb-8">
        <div className="grid sm:grid-cols-[200px_1fr] gap-8 sm:gap-12 items-center max-w-3xl">
          <Image
            src="/editorial.jpg"
            alt="Owain Lewis"
            width={200}
            height={250}
            className="rounded-2xl object-cover w-full h-auto"
          />
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.03em] mb-3">
              About me
            </h2>
            <p className="text-[16px] text-secondary leading-[1.7] mb-4">
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
            <p className="text-[16px] text-secondary leading-[1.7]">
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
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <div className="grid sm:grid-cols-[1.15fr_1fr] gap-6">
          <a
            href={LINKS.gradientWork}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-foreground text-white rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-display font-bold text-[clamp(1.4rem,2.5vw,1.65rem)] tracking-[-0.03em] leading-[1.2] mb-4">
              Get AI working in your business
            </h3>
            <p className="text-[16px] text-white/55 leading-[1.7] mb-8 flex-1">
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

          <a
            href={LINKS.skool}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-foreground/15 hover:shadow-xl hover:shadow-foreground/[0.04] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <h3 className="font-display font-bold text-[clamp(1.4rem,2.5vw,1.65rem)] tracking-[-0.03em] leading-[1.2] mb-4 group-hover:text-accent transition-colors duration-300">
              Join the AI developer community
            </h3>
            <p className="text-[16px] text-secondary leading-[1.7] mb-8 flex-1">
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

      {/* Newsletter signup */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8 py-24 sm:py-28">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.03em] mb-2">
              Stay in the loop
            </h2>
            <p className="text-[15px] text-secondary leading-[1.7] mb-6">
              A short weekly email on what I&apos;m building, what&apos;s
              working, and new resources I publish. No spam, unsubscribe
              anytime.
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
