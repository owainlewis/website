import type { Metadata } from "next";
import { KitForm } from "@/components/kit-form";

export const metadata: Metadata = {
  title: "Free Agent Skills — Owain Lewis",
  description:
    "The exact agent skills I use to spec, build, review, and ship every project. Works with Claude Code, Codex, and Pi.",
};

export default function LinkedInPage() {
  return (
    <main className="flex min-h-dvh items-start sm:items-center justify-center px-6 py-10 sm:py-12">
      <div className="w-full max-w-lg text-center">
        <p className="eyebrow mb-6 justify-center">From LinkedIn</p>

        <h1 className="font-serif text-[clamp(1.85rem,4.4vw,2.85rem)] tracking-[-0.02em] leading-[1.08] mb-5">
          Agent skills to <em className="italic">build better software</em>{" "}
          with AI.
        </h1>

        <p className="text-[17px] sm:text-[18px] text-secondary leading-[1.65] mb-6">
          Install once and get an instant upgrade to your entire dev workflow —
          from writing requirements to shipping production code.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-8">
          <span>Works with</span>
          <span className="text-foreground font-medium">Claude Code</span>
          <span className="text-border">·</span>
          <span className="text-foreground font-medium">Codex</span>
          <span className="text-border">·</span>
          <span className="text-foreground font-medium">Pi</span>
        </div>

        <div className="max-w-md mx-auto mb-4">
          <KitForm buttonText="Get the free skills" />
        </div>

        <p className="text-[12px] text-muted mb-10">
          Enter your email and get instant access. Plus a short weekly email when
          new skills and builds are published.
        </p>

        <div className="text-left max-w-sm mx-auto space-y-2">
          {[
            ["Spec → Plan", "Turn rough notes into atomic, reviewable tasks"],
            ["Implement & Review", "Make the smallest correct change, then review it"],
            ["TDD & Browser Verify", "Test-first development, verify UI in a real browser"],
            ["Git & PR Feedback", "Branches, commits, and PR review fixes built in"],
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
