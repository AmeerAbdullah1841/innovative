"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function SumitomoElectricPoreflonFilmPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">{t("nav_home")}</Link>
          <span className="mx-2">›</span>
          <Link href="/product-center" className="hover:underline">{t("nav_product_center")}</Link>
          <span className="mx-2">›</span>
          <span className="text-white">{t("pc_prod_poreflon")}</span>
        </div>

        {/* Hero Section (matches the attached reference layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="bg-black rounded-lg overflow-hidden shadow">
            <div className="relative w-full" style={{aspectRatio: '4 / 3'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2c6d4aed-ed65-4404-8cea-3ef06ac77a4c.png_1180xaf.png"
                alt="Sumitomo Electric POREFLON film"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">{t("pc_prod_poreflon")}</h1>
            <p className="text-gray-700 leading-relaxed">{t("poreflon_intro")}</p>
            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-700 transition-colors">
                {t("contact_us")}
              </Link>
            </div>
          </div>
        </div>

        {/* Material Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("material")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('m_high_flux_title'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5f70ae32-e7be-4e62-8c53-7dc88b17ced9.gif_366xaf.gif', desc: t('m_high_flux_desc') },
              { title: t('m_stain_res_title'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ebaced0-c7a1-4b81-b13b-30b40be3b388.gif_366xaf.gif', desc: t('m_stain_res_desc') },
              { title: t('m_dur_title'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7df397e7-9c37-461b-8b25-3faf382e0a91.gif_366xaf.gif', desc: t('m_dur_desc') },
              { title: t('m_chem_title'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5cf61813-f00f-455d-a910-4edfae5cd4de.gif_366xaf.gif', desc: t('m_chem_desc') }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{aspectRatio: '16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-2">{card.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("product")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full max-w-sm mx-auto" style={{aspectRatio: '16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/531358f2-f593-4ed0-b7cf-ce8973343b8b.webp_640xaf.webp"
                alt="POREFLON column membrane module"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="overflow-auto">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{t("poreflon_column")}</h3>
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_model")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_material")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_dimensions")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_area")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { model: 'SPMW-1282L', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '164*154*2410', area: '25' },
                    { model: 'SPMW-1283B', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '840*50.8*2200', area: '38' },
                    { model: 'SPMW-1383B', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: '840*50.8*2200', area: '38' },
                
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.model}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.material}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.dim}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("product")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="overflow-auto order-2 lg:order-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">{t("poreflon_external")}</h3>
              <table className="min-w-full text-sm border border-gray-400">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_model")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_material")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_dimensions")}</th>
                    <th className="px-3 py-2 text-left font-medium border border-gray-400">{t("th_area")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { model: 'QPMW-2289-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*1970', area: '59' },
                    { model: 'QPMW-2280-H', material: 'PTFE hydrophilic polytetrafluoroethylene material', dim: 'Φ244.5*2370', area: '80' }
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-gray-50">
                      <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.model}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.material}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.dim}</td>
                      <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="relative w-full max-w-sm mx-auto order-1 lg:order-2" style={{aspectRatio: '16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c2583c7e-285b-4597-a750-13b1538111fd.webp_640xaf.webp"
                alt="External pressure membrane module"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </section>
        
      {/* Footer is globally rendered via layout.tsx */}
      </div>
    </div>
  );
}


