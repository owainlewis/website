import type { Metadata } from "next";
import { LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your Free Skills — Owain Lewis",
  description: "The Claude Code skills that power every project I ship. Free.",
};

const SKILLS = [
  {
    command: "/blueprint:requirements",
    name: "Requirements",
    description:
      "Turn rough notes into a structured requirements document. Asks the right questions first, then produces atomic, testable requirements.",
  },
  {
    command: "/blueprint:architecture",
    name: "Architecture",
    description:
      "Convert requirements into a technical architecture. System design, component definitions, data flow, and technical decisions — before you write a line of code.",
  },
  {
    command: "/blueprint:plan",
    name: "Plan",
    description:
      "Break architecture into phased, atomic implementation tasks. Each phase produces working, runnable software — not layers of scaffolding.",
  },
  {
    command: "/blueprint:branch",
    name: "Branch",
    description:
      "Create conventional git branches with proper naming. Supports feature, fix, hotfix, docs, refactor, and more. Prevents overwrites and validates naming.",
  },
  {
    command: "/blueprint:task",
    name: "Task",
    description:
      "Pick up a work item from Linear, Jira, GitHub Issues, or a plain description — then execute it end-to-end. Branch, build, verify, commit.",
  },
  {
    command: "/blueprint:review",
    name: "Code Review",
    description:
      "Review your changes like a senior engineer. Checks correctness, security, simplicity, and robustness. Ignores style nitpicks, catches real issues.",
  },
  {
    command: "/blueprint:commit",
    name: "Commit",
    description:
      "Stage and commit with well-crafted conventional commit messages. Reviews diffs, checks for secrets, and explains the \"why\" not just the \"what.\"",
  },
  {
    command: "/blueprint:create-linear-issue",
    name: "Create Linear Issue",
    description:
      "Create well-defined Linear issues through guided conversation. Keeps issues small, describes intent over implementation, splits complex work automatically.",
  },
  {
    command: "/blueprint:complete-linear-issue",
    name: "Complete Linear Issue",
    description:
      "Pick up a Linear issue, implement it, verify the acceptance criteria, commit with the issue ID, and mark it done. Full lifecycle in one command.",
  },
  {
    command: "/blueprint:refactor",
    name: "Refactor",
    description:
      "Simplify and clean up code without changing behavior. Removes dead code, improves clarity, and makes your codebase more elegant.",
  },
  {
    command: "/blueprint:tdd",
    name: "TDD",
    description:
      "Build features test-first. Write failing tests that define the behavior, then implement until green. Red-green-refactor, automated.",
  },
  {
    command: "/blueprint:coverage",
    name: "Coverage",
    description:
      "Evaluate test coverage for recent code and fill gaps with high-value tests. Only adds tests worth having — no filler.",
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="relative">
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal/10 text-signal text-[13px] font-medium mb-6">
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

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
            Blueprint: Claude Code skills to build better software with AI
          </h1>

          <p className="text-secondary max-w-lg mx-auto leading-relaxed mb-8">
            The exact skills I use to spec, build, review, and ship every
            project. Install them once, use them forever, and check back —
            new skills are added regularly.
          </p>

          <a
            href={LINKS.blueprint}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-opacity text-[15px]"
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
          <h2 className="font-display font-bold text-lg tracking-tight mb-4">
            Quick install
          </h2>
          <p className="text-white/60 text-[14px] leading-relaxed mb-5">
            Run this in your terminal to add Blueprint to Claude Code. All 12
            skills will be available in any project.
          </p>
          <div className="bg-white/[0.06] rounded-lg p-4 font-mono text-[13px] text-white/80 overflow-x-auto">
            claude plugin add owainlewis/blueprint
          </div>
        </div>

        {/* All 9 skills */}
        <h2 className="font-display font-bold text-xl tracking-tight mb-8">
          All skills
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
                    <h3 className="font-display font-bold tracking-tight">
                      {skill.name}
                    </h3>
                    <code className="text-[12px] font-mono text-accent bg-accent/[0.06] px-2 py-0.5 rounded">
                      {skill.command}
                    </code>
                  </div>
                  <p className="text-[14px] text-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="border-t border-border pt-16">
          <h2 className="font-display font-bold text-xl tracking-tight mb-6 text-center">
            Want to go deeper?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={LINKS.gradientWork}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal font-medium mb-2">
                Work with me
              </p>
              <h3 className="font-display font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                Get AI built for your business
              </h3>
              <p className="text-[13px] text-secondary leading-relaxed">
                Production AI systems designed, built, and shipped in weeks.
              </p>
            </a>
            <a
              href={LINKS.skool}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal font-medium mb-2">
                AI Community
              </p>
              <h3 className="font-display font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                Join the AI developer community
              </h3>
              <p className="text-[13px] text-secondary leading-relaxed">
                Courses, live builds, code reviews, and real project templates.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
