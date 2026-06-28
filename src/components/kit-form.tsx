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
        className={`type-small flex-1 rounded-full px-5 py-3.5 transition-all focus:outline-none focus:ring-2 ${
          dark
            ? "bg-white/[0.07] border border-white/[0.08] text-white placeholder:text-white/30 focus:ring-white/15 focus:border-white/15"
            : "bg-card border border-border text-foreground placeholder:text-muted focus:ring-accent/30 focus:border-accent/40"
        }`}
      />
      <button
        type="submit"
        className="type-small cursor-pointer whitespace-nowrap rounded-full bg-accent px-7 py-3.5 font-semibold text-foreground transition-all hover:brightness-95 active:scale-[0.98]"
      >
        {buttonText}
      </button>
    </form>
  );
}
