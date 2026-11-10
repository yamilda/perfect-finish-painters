"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Painting",
  "Drywall Repair",
  "Popcorn Ceiling Removal",
  "Deck or Fence Staining",
  "Commercial Painting",
  "Govee Permanent Lighting",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#cbd5e1] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const submissionId = useRef<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const qs = new URLSearchParams(window.location.search);
    // Same ID on a retry after a lost response, so the owner isn't emailed twice.
    submissionId.current ??= crypto.randomUUID();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          service: fd.get("service"),
          notes: fd.get("message"),
          website: fd.get("website"),
          submissionId: submissionId.current,
          utmSource: qs.get("utm_source") || undefined,
          utmMedium: qs.get("utm_medium") || undefined,
          utmCampaign: qs.get("utm_campaign") || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      if (typeof window.fbq === "function") window.fbq("track", "Lead");
      submissionId.current = null;
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Ready to transform your space?
            </h2>
            <p className="text-[#64748b] text-lg mb-8">
              Take our 60-second quiz and get a free, no-obligation estimate for
              your project. Or send us a message and we&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Get Your Free Estimate
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="tel:+16093774226"
                className="border-2 border-[#e2e8f0] hover:border-[#2563eb] text-[#1e3a5f] px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Right: Contact form — POSTs to /api/lead (Senku + owner email, SJ Tech BCC) */}
          <div className="bg-[#f1f5f9] rounded-2xl p-5 sm:p-8">
            {status === "sent" ? (
              <div role="status" className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2563eb]/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Thanks — message sent!</h3>
                <p className="text-[#64748b]">We&apos;ll get back to you within 24 hours. Need us sooner? Call (609) 377-4226.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[#374151] mb-1">Name</label>
                    <input id="contact-name" name="name" type="text" required maxLength={100} autoComplete="name" className={inputClass} placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-[#374151] mb-1">Phone</label>
                      <input id="contact-phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={inputClass} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[#374151] mb-1">
                        Email <span className="text-[#94a3b8] font-normal">(optional)</span>
                      </label>
                      <input id="contact-email" name="email" type="email" maxLength={254} autoComplete="email" className={inputClass} placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-[#374151] mb-1">What do you need?</label>
                    <select id="contact-service" name="service" defaultValue="" className={inputClass}>
                      <option value="">Choose a service (optional)</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#374151] mb-1">Message</label>
                    <textarea id="contact-message" name="message" required rows={4} maxLength={4000} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  {/* Honeypot — hidden from people, filled by bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
