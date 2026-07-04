import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/lead-magnet-page";

export const metadata: Metadata = {
  title: "Free Agent Skills | Owain Lewis",
  description:
    "The exact agent skills I use to spec, build, review, and ship every project. Works with Claude Code, Codex, and Pi.",
};

export default function LinkedInPage() {
  return <LeadMagnetPage source="LinkedIn" />;
}
