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
              href={LINKS.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[13px] text-secondary hover:text-foreground transition-colors hidden sm:block"
            >
              Newsletter
            </a>
            <a
              href={LINKS.community}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-foreground text-white text-[12px] sm:text-[13px] font-medium hover:bg-foreground/85 transition-colors"
            >
              Join AI Engineer
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12m0 0L8 2m5 5L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — introduce who you are */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0">
          <Image
            src="/FX300089-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-foreground/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-6 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
          <div className="max-w-2xl">
            <h1 className="anim-fade-up anim-d1 font-serif text-white text-[clamp(2rem,4.2vw,3.4rem)] font-normal tracking-[-0.02em] leading-[1.08] mb-7">
              AI systems to give your business{" "}
              <span className="whitespace-nowrap">
                an <em className="italic text-accent">unfair advantage</em>.
              </span>
            </h1>

            <p className="anim-fade-up anim-d2 text-[18px] sm:text-[19px] text-white/70 leading-[1.65] max-w-[560px] mb-10">
              20 years of shipping production software. Now I run AI Engineer
              — a community for engineers building real AI systems — and ship
              production AI through my agency.
            </p>

            <div className="anim-fade-up anim-d3 flex flex-wrap gap-3">
              <a
                href={LINKS.community}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-accent text-foreground font-semibold rounded-full hover:brightness-95 active:scale-[0.98] transition-all text-[15px]"
              >
                Join AI Engineer →
              </a>
              <a
                href={LINKS.gradientWork}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-white/20 bg-white/[0.06] text-white font-semibold rounded-full hover:bg-white/[0.12] hover:border-white/35 active:scale-[0.98] transition-all text-[15px]"
              >
                Work with me
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
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.15rem)] tracking-[-0.02em] leading-[1.15] mb-5">
              Two decades of shipping, now all-in on AI.
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
              , and inside{" "}
              <a
                href={LINKS.community}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                AI Engineer
              </a>
              , the community I run for engineers building real AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="mx-auto max-w-[1120px] px-6 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24">
        <p className="eyebrow mb-6">Two ways to work together</p>
        <div className="grid sm:grid-cols-[1.15fr_1fr] gap-6">
          <a
            href={LINKS.community}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-foreground text-white rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:shadow-foreground/10 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
              AI Engineer
            </p>
            <h3 className="font-serif text-[clamp(1.5rem,2.6vw,1.85rem)] tracking-[-0.02em] leading-[1.2] mb-4">
              Master AI engineering and{" "}
              <span className="text-accent">build better software with AI.</span>
            </h3>
            <p className="text-[17px] text-white/60 leading-[1.7] mb-8 flex-1">
              Engineers learning to build, ship, and monetise real AI systems.
              Live builds, code reviews, courses, and project templates from
              someone shipping this stuff every week.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 group-hover:text-accent group-hover:gap-3 transition-all duration-300">
              aiengineer.co
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
            href={LINKS.gradientWork}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/[0.04] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary mb-5">
              Agency
            </p>
            <h3 className="font-serif text-[clamp(1.5rem,2.6vw,1.85rem)] tracking-[-0.02em] leading-[1.2] mb-4">
              Get AI working in your business.
            </h3>
            <p className="text-[17px] text-secondary leading-[1.7] mb-8 flex-1">
              You have a problem AI can solve. I&apos;ll design, build, and
              ship a production system tailored to your business — in weeks,
              not months.
            </p>
            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-foreground group-hover:gap-3 transition-all duration-300">
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
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <Image
            src="/FX300090-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-transparent to-foreground/60" />
        </div>

        <div className="relative mx-auto max-w-[1120px] px-6 sm:px-8 py-24 sm:py-32">
          <div className="max-w-xl mx-auto text-center">
            <p className="eyebrow eyebrow-light mb-5 justify-center">Newsletter</p>
            <h2 className="font-serif text-white text-[clamp(1.65rem,2.9vw,2.35rem)] tracking-[-0.02em] leading-[1.15] mb-4">
              A short weekly note,{" "}
              <em className="italic text-accent">straight from the build log.</em>
            </h2>
            <p className="text-[17px] text-white/70 leading-[1.7] mb-8">
              What I&apos;m building, what&apos;s working, and new resources I
              publish. No spam, unsubscribe anytime.
            </p>
            <div className="max-w-md mx-auto">
              <KitForm buttonText="Subscribe" dark />
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
