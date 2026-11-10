import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import SherwinWilliamsBannerES from "@/components/SherwinWilliamsBannerES";

export const metadata: Metadata = {
  title: "Pintores en Pleasantville NJ | Perfect Finish Painters",
  description:
    "Pintores en Pleasantville NJ. Pintura interior, exterior y reparación de drywall. Hablamos español. Licenciados y asegurados. Estimados gratis — 609-377-4226.",
  openGraph: {
    title: "Pintores en Pleasantville NJ | Perfect Finish Painters",
    description:
      "Pintores en Pleasantville NJ. Pintura interior, exterior y reparación de drywall. Hablamos español. Licenciados y asegurados. Estimados gratis — 609-377-4226.",
    type: "website",
    locale: "es_US",
    url: "https://perfectfinishpainter.com/pintores-pleasantville-nj",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pintores en Pleasantville NJ | Perfect Finish Painters",
    description:
      "Pintores en Pleasantville NJ. Pintura interior, exterior y reparación de drywall. Hablamos español. Licenciados y asegurados. Estimados gratis — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com/pintores-pleasantville-nj",
    languages: {
      es: "/pintores-pleasantville-nj",
      en: "/painters-pleasantville-nj",
    },
  },
};

export default function PintoresPleasantvilleNJPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta pintar una casa en Pleasantville, NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tamaño y la condición de las paredes. La mayoría de las habitaciones cuestan entre $500 y $1,000. Llama al 609-377-4226 para un estimado gratis.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen servicio de reparación de drywall en Pleasantville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Reparamos huecos, grietas y daño por agua en paredes y techos antes de pintar. Servimos todo Pleasantville y alrededores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Están licenciados para trabajar en New Jersey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Tenemos licencia HIC del estado de NJ y seguro completo. Licenciados y asegurados.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Pintores", item: "https://perfectfinishpainter.com/pintores-cerca-de-mi" },
      { "@type": "ListItem", position: 3, name: "Pintores en Pleasantville NJ", item: "https://perfectfinishpainter.com/pintores-pleasantville-nj" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/pintores-cerca-de-mi" className="hover:text-[#2563eb] transition-colors">Pintores</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Pleasantville, NJ</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Pintores en Pleasantville, NJ — Hablamos Español
          </h1>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            Somos tu equipo de pintores en Pleasantville. Conocemos el área — las casas de la comunidad, los vecindarios cerca de Black Horse Pike y Delilah Road, y los proyectos que más necesitan los residentes de aquí. Hablamos español, damos estimados gratuitos el mismo día, y garantizamos nuestro trabajo. No importa si es una habitación o toda la casa — llegamos, lo hacemos bien, y lo dejamos limpio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Obtener Estimado Gratis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Llamar Ahora — 609-377-4226
            </a>
          </div>
        </div>
      </section>

      {/* Sherwin-Williams Banner */}
      <ScrollReveal>
        <SherwinWilliamsBannerES />
      </ScrollReveal>

      {/* Servicios de Pintura */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Servicios de Pintura en Pleasantville, NJ</h2>
          </ScrollReveal>
          <p className="text-[#64748b] mb-4">
            Ofrecemos pintura interior y exterior para casas y negocios en Pleasantville. Desde paredes y techos hasta molduras y puertas — preparamos cada superficie correctamente y usamos pintura de alta calidad para un acabado que dura.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "Pintura de interiores — paredes, techos y molduras",
              "Pintura de exteriores — protección contra el clima",
              "Pintura de puertas, marcos y ventanas",
              "Preparación completa de superficies",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0]">
                <svg className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/interior-painting" className="text-[#2563eb] hover:text-[#1d4ed8] font-medium transition-colors underline decoration-[#2563eb]/30">
              Ver más sobre nuestros servicios de pintura interior →
            </Link>
          </div>
        </div>
      </section>

      {/* Reparación de Drywall */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Reparación de Drywall en Pleasantville, NJ</h2>
          </ScrollReveal>
          <p className="text-[#64748b] mb-4">
            Las casas en Pleasantville a veces tienen grietas, huecos o daño por agua en las paredes. Reparamos todo tipo de problemas en drywall — desde parches pequeños hasta secciones completas — y dejamos las paredes listas para pintar.
          </p>
          <p className="text-[#64748b] mb-4">
            No pintamos sobre problemas. Los arreglamos primero para que el resultado se vea profesional y dure años.
          </p>
          <div className="mt-6">
            <Link href="/drywall-repair" className="text-[#2563eb] hover:text-[#1d4ed8] font-medium transition-colors underline decoration-[#2563eb]/30">
              Ver más sobre reparación de drywall →
            </Link>
          </div>
        </div>
      </section>

      {/* Por Qué Nos Eligen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">¿Por Qué los Residentes de Pleasantville Nos Eligen?</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { title: "Hablamos Español", desc: "Comunicación clara desde el primer día hasta el último. Sin malentendidos, sin confusión." },
              { title: "Conocemos Pleasantville", desc: "Trabajamos en esta comunidad regularmente. Conocemos los tipos de casas y los retos comunes." },
              { title: "Licenciados y Asegurados", desc: "Licencia HIC del estado de New Jersey y seguro completo para tu tranquilidad." },
              { title: "Estimados Gratis el Mismo Día", desc: "Llama hoy y te damos un estimado detallado — sin compromiso, sin presión." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#64748b] mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Preguntas Frecuentes — Pintores en Pleasantville NJ</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto cuesta pintar una casa en Pleasantville, NJ?",
                a: "Depende del tamaño y la condición de las paredes. La mayoría de las habitaciones cuestan entre $500 y $1,000. Llama al 609-377-4226 para un estimado gratis personalizado.",
              },
              {
                q: "¿Ofrecen servicio de reparación de drywall en Pleasantville?",
                a: "Sí. Reparamos huecos, grietas y daño por agua en paredes y techos antes de pintar. Servimos todo Pleasantville y las áreas cercanas.",
              },
              {
                q: "¿Están licenciados para trabajar en New Jersey?",
                a: "Sí. Tenemos licencia HIC del estado de NJ y seguro completo. Tu hogar está protegido con nosotros.",
              },
            ].map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                  <h3 className="text-[#1e3a5f] font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-[#64748b]">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Pintar tu Casa en Pleasantville?</h2>
          <p className="text-white/70 text-lg mb-8">Llama hoy para un estimado gratis — hablamos español.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16093774226" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Llamar Ahora — 609-377-4226
            </a>
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Obtener Estimado Gratis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a
              href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
