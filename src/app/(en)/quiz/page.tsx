import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Get Your Free Estimate | Perfect Finish Painters",
  description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
  openGraph: {
    title: "Get Your Free Estimate | Perfect Finish Painters",
    description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/quiz",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Estimate | Perfect Finish Painters",
    description: "Take our 60-second quiz to get a free painting estimate. No obligation — Perfect Finish Painters serves Mays Landing and all of South Jersey.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/quiz" },
  robots: { index: false, follow: false },
};

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Forward any incoming UTM params (e.g. an ad pointed at /quiz) so attribution
  // survives; default to utm_source=website for plain on-site clicks. Points at
  // the canonical senkulab host so the params aren't dropped by a redirect hop.
  const sp = await searchParams;
  const params = new URLSearchParams();
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "service"]) {
    const v = sp[k];
    if (typeof v === "string" && v) params.set(k, v);
  }
  if (!params.has("utm_source")) {
    params.set("utm_source", "website");
    params.set("utm_medium", "referral");
  }
  redirect(`https://app.senkulab.com/quiz/perfect-finish-painters?${params.toString()}`);
}
