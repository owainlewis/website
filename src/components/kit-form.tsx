"use client";

import { KIT_FORM_ID } from "@/lib/constants";

export function KitForm({
  buttonText = "Subscribe",
  className = "",
  dark = false,
}: {
  buttonText?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <form
      action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
      method="post"
      data-sv-form={KIT_FORM_ID}
      className={`flex flex-col sm:flex-row gap-3 w-full ${className}`}
    >
      <input
        type="email"
        name="email_address"
        placeholder="Your email address"
        required
        className={`flex-1 px-4 py-3 rounded-xl text-[15px] leading-none transition-all focus:outline-none focus:ring-2 ${
          dark
            ? "bg-white/[0.07] border border-white/[0.08] text-white placeholder:text-white/30 focus:ring-white/15 focus:border-white/15"
            : "bg-card border border-border text-foreground placeholder:text-muted focus:ring-accent/15 focus:border-accent/30"
        }`}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-signal text-white font-semibold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap text-[15px] leading-none"
      >
        {buttonText}
      </button>
    </form>
  );
}
