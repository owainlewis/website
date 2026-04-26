import type { Metadata } from "next";
import { KitForm } from "@/components/kit-form";

export const metadata: Metadata = {
  title: "Free Claude Code Skills — Owain Lewis",
  description:
    "The exact Claude Code skills I use to spec, build, review, and ship every project. Install them and upgrade your workflow instantly.",
};

export default function YouTubePage() {
  return (
    <main className="flex min-h-dvh items-start sm:items-center justify-center px-6 py-10 sm:py-12">
      <div className="w-full max-w-lg text-center">
        <p className="eyebrow mb-6 justify-center">Free Skills</p>

        <h1 className="font-serif text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em] leading-[1.05] mb-5">
          Claude Code skills to{" "}
          <em className="italic">build better software</em> with AI.
        </h1>

        <p className="text-[17px] sm:text-[18px] text-secondary leading-[1.65] mb-8">
          Install these skills in Claude Code and get an instant upgrade to your
          entire dev workflow — from writing requirements to deploying
          production code.
        </p>

        <div className="max-w-md mx-auto mb-4">
          <KitForm buttonText="Get the free skills" />
        </div>

        <p className="text-[12px] text-muted mb-10">
          Enter your email and get instant access. Plus a short weekly email when
          new skills and builds are published.
        </p>

        <div className="text-left max-w-sm mx-auto space-y-2">
          {[
            ["Requirements → Plan", "From rough notes to phased, atomic tasks"],
            ["Code Review & Refactor", "Catch real issues, simplify code"],
            ["TDD & Coverage", "Test-first development, fill coverage gaps"],
            ["Git & Linear", "Branching, commits, and issue tracking built in"],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3 py-1">
              <span className="text-accent mt-0.5 shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 9l3.5 3.5L14 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="font-semibold text-[15px]">{title}</span>
                <span className="text-[14px] text-secondary"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
