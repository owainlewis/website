import type { Metadata } from "next";
import { LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your Free Skills — Owain Lewis",
  description: "The Claude Code skills that power every project I ship. Free.",
};

const SKILLS = [
  {
    command: "/blueprint:spec",
    name: "Spec",
    description:
      "Write an implementation spec when a task has decisions, invariants, or boundaries worth surfacing before coding.",
  },
  {
    command: "/blueprint:plan",
    name: "Plan",
    description:
      "Break a project, phase, spec, or rough request into small agent-ready tasks with acceptance criteria and verification.",
  },
  {
    command: "/blueprint:build",
    name: "Build",
    description:
      "Implement one task or scoped change: make the change, add valuable tests, and verify it works.",
  },
  {
    command: "/blueprint:tdd",
    name: "TDD",
    description:
      "Use test-first development for behavioral changes. Write a failing test, make it pass, then simplify.",
  },
  {
    command: "/blueprint:review",
    name: "Review",
    description:
      "Review a spec or concrete code changes and report evidence-backed bugs, regressions, and risks.",
  },
  {
    command: "/blueprint:refactor",
    name: "Refactor",
    description:
      "Refactor code to simplify it without changing behavior. Removes duplication, dead code, and unnecessary complexity.",
  },
  {
    command: "/blueprint:coverage",
    name: "Coverage",
    description:
      "Evaluate test coverage and fill real gaps with high-value tests. Only adds tests worth having — no filler.",
  },
  {
    command: "/blueprint:debug",
    name: "Debug",
    description:
      "Debug systematically: observe, hypothesize, test, fix, verify. For broken behavior, failing tests, or anything that doesn't match expectations.",
  },
  {
    command: "/blueprint:compress",
    name: "Compress",
    description:
      "Compress agent-facing instructions to the fewest words that preserve behavior, constraints, and clarity. For specs, plans, prompts, AGENTS.md.",
  },
  {
    command: "/blueprint:commit",
    name: "Commit",
    description:
      "Stage and commit the intended changes with a clear message. Reviews the diff, checks for secrets, explains the why.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="relative">
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-foreground text-[13px] font-medium mb-7">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8l3.5 3.5L13 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            You&apos;re in — here are your skills
          </div>

          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.25rem)] tracking-[-0.02em] leading-[1.05] mb-5">
            Blueprint:{" "}
            <em className="italic">Claude Code skills</em> to build better
            software with AI.
          </h1>

          <p className="text-[17px] text-secondary max-w-lg mx-auto leading-[1.65] mb-9">
            The exact skills I use to spec, build, review, and ship every
            project. Install them once, use them forever, and check back —
            new skills are added regularly.
          </p>

          <a
            href={LINKS.blueprint}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-foreground font-semibold rounded-full hover:brightness-95 transition-all text-[15px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Get Blueprint on GitHub
          </a>
        </div>

        {/* Install instructions */}
        <div className="bg-foreground text-white rounded-2xl p-6 sm:p-8 mb-16">
          <h2 className="font-serif text-[22px] tracking-[-0.01em] mb-3">
            Quick <em className="italic text-accent">install.</em>
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.65] mb-5">
            Run this in your terminal to add Blueprint to Claude Code. Every
            skill will be available in any project.
          </p>
          <div className="bg-white/[0.06] rounded-lg p-4 font-mono text-[13px] text-white/80 overflow-x-auto">
            claude plugin add owainlewis/blueprint
          </div>
        </div>

        {/* All skills */}
        <p className="eyebrow mb-3">The skills</p>
        <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2rem)] tracking-[-0.02em] leading-[1.15] mb-8">
          All <em className="italic">ten skills.</em>
        </h2>

        <div className="space-y-4 mb-16">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.command}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted pt-0.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-serif text-[19px] tracking-[-0.01em]">
                      {skill.name}
                    </h3>
                    <code className="text-[12px] font-mono text-foreground bg-accent/15 px-2 py-0.5 rounded">
                      {skill.command}
                    </code>
                  </div>
                  <p className="text-[15px] text-secondary leading-[1.65]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">Next</p>
            <h2 className="font-serif text-[clamp(1.6rem,2.8vw,2rem)] tracking-[-0.02em] leading-[1.15]">
              Want to go <em className="italic">deeper?</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={LINKS.gradientWork}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary font-medium mb-3">
                Work with me
              </p>
              <h3 className="font-serif text-[20px] tracking-[-0.01em] mb-2">
                Get AI <em className="italic">built for your business.</em>
              </h3>
              <p className="text-[14px] text-secondary leading-[1.65]">
                Production AI systems designed, built, and shipped in weeks.
              </p>
            </a>
            <a
              href={LINKS.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-colors"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary font-medium mb-3">
                AI Community
              </p>
              <h3 className="font-serif text-[20px] tracking-[-0.01em] mb-2">
                Join the <em className="italic">AI developer community.</em>
              </h3>
              <p className="text-[14px] text-secondary leading-[1.65]">
                Courses, live builds, code reviews, and real project templates.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
