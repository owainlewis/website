import { KitForm } from "@/components/kit-form";
import { LINKS } from "@/lib/constants";
import Image from "next/image";

const NAV_LINKS = [
  { label: "YouTube", href: LINKS.youtube },
  { label: "Newsletter", href: "#newsletter" },
  { label: "AI Engineer", href: LINKS.community },
] as const;

const ROUTES = [
  {
    label: "YouTube",
    text: "Deep technical videos on building real software with AI.",
    href: LINKS.youtube,
  },
  {
    label: "Newsletter",
    text: "Personal notes from building a one-person AI business.",
    href: "#newsletter",
  },
  {
    label: "AI Engineer",
    text: "The community for developers building useful software with AI.",
    href: LINKS.community,
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <section className="relative min-h-svh overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/24" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,0.62),rgba(26,26,26,0.3)_48%,rgba(26,26,26,0.02))]" />

        <nav className="relative z-10">
          <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
            <a href="/" className="type-small font-semibold">
              Owain Lewis
            </a>
            <div className="hidden items-center gap-7 sm:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="type-small text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1180px] items-center px-5 pb-10 sm:px-8">
          <div className="w-full max-w-[calc(100vw-2.5rem)] sm:max-w-[56rem]">
            <p className="type-body mb-5 measure text-white/68">
              Practical AI engineering for serious builders.
            </p>
            <h1 className="type-display max-w-[56rem] font-display font-medium [text-wrap:balance]">
              <span className="block sm:hidden">Building a one-person</span>
              <span className="block sm:hidden">AI business.</span>
              <span className="hidden sm:block">
                Building a one-person AI business.
              </span>
            </h1>
            <p className="type-lead mt-6 measure-wide text-white/[0.78]">
              <span className="block sm:hidden">
                I teach developers to
              </span>
              <span className="block sm:hidden">
                build real software with AI,
              </span>
              <span className="block sm:hidden">
                grow useful products, work for themselves,
              </span>
              <span className="block sm:hidden">
                and build unstoppable systems.
              </span>
              <span className="hidden sm:block">
                I teach developers how to use AI to build real software, grow
                useful products, work for themselves, and build AI systems that
                make you unstoppable.
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#newsletter"
                className="type-small inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-foreground transition hover:bg-white/88"
              >
                Join the newsletter
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="type-small font-semibold text-white/78 underline decoration-white/22 underline-offset-8 transition hover:text-white hover:decoration-white"
              >
                Watch YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-background">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:aspect-[5/6]">
            <Image
              src="/owain-gradient.jpg"
              alt="Owain Lewis"
              fill
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="type-body mb-4 text-secondary">
              The newsletter
            </p>
            <h2 className="type-title font-display font-semibold [text-wrap:balance]">
              Follow the build.
            </h2>
            <p className="type-lead mt-6 measure text-secondary">
              A personal weekly note on building a one-person AI business,
              using AI to do better work, and turning real builds into useful
              systems.
            </p>
            <div className="mt-8 max-w-xl">
              <KitForm buttonText="Get the email" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1180px] px-5 pb-10 sm:px-8 sm:pb-16">
          <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:pt-14">
            {ROUTES.map((route) => (
              <a
                key={route.label}
                href={route.href}
                target={route.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  route.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group"
              >
                <h3 className="type-body font-semibold">
                  {route.label}
                </h3>
                <p className="type-small mt-3 max-w-sm text-secondary group-hover:text-foreground">
                  {route.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1180px] px-5 pb-16 sm:px-8 sm:pb-24">
          <p className="type-lead measure text-secondary">
            Looking for the free agent skills? Get them from{" "}
            <a
              href="/youtube"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              YouTube
            </a>{" "}
            or{" "}
            <a
              href="/linkedin"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="type-small mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-8 text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} Owain Lewis</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={LINKS.youtube} className="transition hover:text-foreground">
              YouTube
            </a>
            <a
              href={LINKS.instagram}
              className="transition hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href={LINKS.newsletter}
              className="transition hover:text-foreground"
            >
              Newsletter
            </a>
            <a
              href={LINKS.linkedin}
              className="transition hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
