import type { Metadata } from "next";
import { KitForm } from "@/components/kit-form";

export const metadata: Metadata = {
  title: "Free Claude Code Skills — Owain Lewis",
  description:
    "The exact Claude Code skills I use to spec, build, review, and ship every project. Install them and upgrade your workflow instantly.",
};

export default function LinkedInPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-6">
          Free Claude Code skills to build better software with AI
        </h1>

        <p className="text-[16px] text-secondary leading-relaxed mb-8">
          Install these skills in Claude Code and get an instant upgrade to your
          entire dev workflow — from writing requirements to deploying
          production code.
        </p>

        <div className="text-left max-w-sm mx-auto mb-10 space-y-2">
          {[
            ["Requirements", "Turn rough notes into structured specs"],
            ["Architecture", "Design your system before writing code"],
            ["Plan", "Break work into phased, atomic tasks"],
            ["Code Review", "Catch real issues, not style nitpicks"],
            ["+ more", "Branching, commits, task execution, Linear integration"],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3 py-1">
              <span className="text-signal mt-0.5 shrink-0">
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
                <span className="font-semibold text-[14px]">{title}</span>
                <span className="text-[13px] text-secondary"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-4">
          <KitForm buttonText="Get the free skills" />
        </div>

        <p className="text-[12px] text-muted mb-10">
          Enter your email and get instant access. Plus a short weekly email when
          new skills and builds are published.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-[13px] text-secondary">
          <span className="w-2 h-2 rounded-full bg-signal" />
          Used by 2,000+ engineers to ship AI to production
        </div>
      </div>
    </main>
  );
}
