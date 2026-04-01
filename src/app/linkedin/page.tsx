import type { Metadata } from "next";
import { KitForm } from "@/components/kit-form";

export const metadata: Metadata = {
  title: "Free Claude Code Skills — Owain Lewis",
  description:
    "The exact Claude Code skills I use to spec, build, review, and ship every project. Install them and upgrade your workflow instantly.",
};

export default function LinkedInPage() {
  return (
    <main className="flex min-h-dvh items-start sm:items-center justify-center px-6 py-10 sm:py-12">
      <div className="w-full max-w-lg text-center">
        <h1 className="font-display text-[1.5rem] sm:text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4 sm:mb-6">
          Free Claude Code skills to build better software with AI
        </h1>

        <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed mb-6 sm:mb-8">
          Install these skills in Claude Code and get an instant upgrade to your
          entire dev workflow — from writing requirements to deploying
          production code.
        </p>

        <div className="max-w-md mx-auto mb-4">
          <KitForm buttonText="Get the free skills" />
        </div>

        <p className="text-[12px] text-muted mb-8 sm:mb-10">
          Enter your email and get instant access. Plus a short weekly email when
          new skills and builds are published.
        </p>

        <div className="text-left max-w-sm mx-auto space-y-1 sm:space-y-2">
          {[
            ["Requirements → Plan", "From rough notes to phased, atomic tasks"],
            ["Code Review & Refactor", "Catch real issues, simplify code"],
            ["TDD & Coverage", "Test-first development, fill coverage gaps"],
            ["Git & Linear", "Branching, commits, and issue tracking built in"],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-2.5 sm:gap-3 py-0.5 sm:py-1">
              <span className="text-signal mt-0.5 shrink-0">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="sm:w-[18px] sm:h-[18px]">
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
                <span className="font-semibold text-[13px] sm:text-[14px]">{title}</span>
                <span className="text-[12px] sm:text-[13px] text-secondary"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
