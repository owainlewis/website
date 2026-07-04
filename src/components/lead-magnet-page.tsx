import Image from "next/image";
import { KitForm } from "@/components/kit-form";
import { LINKS } from "@/lib/constants";

const SKILL_POINTS = [
  {
    title: "Spec to plan",
    text: "Turn rough notes into clear, reviewable implementation tasks.",
  },
  {
    title: "Implement and review",
    text: "Make the smallest correct change, then check it with a second pass.",
  },
  {
    title: "TDD and browser verify",
    text: "Use tests and real browser checks when the work needs proof.",
  },
  {
    title: "Git and PR feedback",
    text: "Create branches, commits, and fixes for review comments.",
  },
] as const;

export function LeadMagnetPage({ source }: { source: "YouTube" | "LinkedIn" }) {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <section className="mx-auto flex min-h-dvh max-w-[1180px] flex-col px-5 sm:px-8">
        <header className="flex h-16 w-full max-w-[20.5rem] items-center justify-between sm:max-w-none">
          <a href="/" className="type-small font-semibold">
            Owain Lewis
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="type-small text-secondary transition hover:text-foreground"
          >
            Instagram
          </a>
        </header>

        <div className="grid min-w-0 flex-1 gap-12 py-10 sm:py-14 lg:grid-cols-[1fr_0.68fr] lg:items-center lg:py-16">
          <div className="w-full min-w-0 max-w-[20.5rem] sm:max-w-2xl">
            <p className="type-body mb-5 text-secondary">
              Free skills from {source}.
            </p>
            <h1 className="type-title font-display font-semibold [text-wrap:balance]">
              <span className="block sm:hidden">Agent skills for</span>
              <span className="block sm:hidden">building better</span>
              <span className="block sm:hidden">software with AI.</span>
              <span className="hidden sm:block">
                Agent skills for building better software with AI.
              </span>
            </h1>
            <p className="type-lead measure mt-6 max-w-full text-secondary">
              Get the exact skills I use to spec, build, review, and ship real
              projects with AI. They work with Claude Code, Codex, and Pi.
            </p>

            <div className="mt-8 w-full max-w-xl">
              <KitForm buttonText="Get the free skills" />
            </div>

            <p className="type-small mt-4 text-muted">
              Enter your email and get instant access. Plus a short weekly email
              when new skills and builds are published.
            </p>

            <div className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2">
              {SKILL_POINTS.map((point) => (
                <div key={point.title}>
                  <h2 className="type-body font-semibold">{point.title}</h2>
                  <p className="type-small mt-2 text-secondary">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden aspect-[4/5] overflow-hidden bg-surface lg:block">
            <Image
              src="/owain-gradient.jpg"
              alt="Owain Lewis"
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
