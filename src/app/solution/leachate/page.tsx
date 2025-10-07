"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function LeachateSolutionPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/case-3.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">{t("nav_home")}</Link>
          <span className="mx-2">›</span>
          <span className="opacity-80">{t("sol_breadcrumb")}</span>
          <span className="mx-2">›</span>
          <span className="text-white">{t("sol_leachate_title")}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
            <Image src="/industry.jpg" alt="Leachate solution" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("sol_leachate_title")}</h1>
          </div>
        </div>

        {/* Technological advantages */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_leachate_h2")}</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"", d:t("sol_leachate_p1")},
      
            ].map((item, i) => (
              <div key={i} className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden">
                <div className="min-w-[160px] bg-black text-white text-sm font-semibold px-4 py-3 flex items-center justify-center text-center whitespace-pre-line">
                  {item.t}
                </div>
                <div className="flex-1 bg-white px-4 py-3 text-sm text-gray-700">
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages summary: title + five points */}
        

        

        {/* Common processes and pain points */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_common_pp")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {title:t("sol_leachate_pain1"), desc:t("sol_leachate_pain1_d")},
              {title:t("sol_leachate_pain2"), desc:t("sol_leachate_pain2_d")},
              {title:t("sol_leachate_pain3"), desc:t("sol_leachate_pain3_d")},
            ].map((c)=> (
              <div key={c.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black text-white text-sm font-semibold px-4 py-2">{c.title}</div>
                <div className="px-4 py-3 text-sm text-gray-700">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptive product series */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-1">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_adaptive_series")}</h2>
          </div>
          <div className="p-6 space-y-10">
            {/* Row 1: Aerated membrane bioreactor */}
            <div>
              <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-6 py-3">{t("sol_leachate_series1")}</div>
              <p className="mt-3 text-sm text-gray-700 max-w-3xl">{t("sol_leachate_series1_desc")}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                {[
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6af3dd8c-9a65-4f7e-8ee4-8acd5d3c6226.gif_560xaf.gif',
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2f83f086-3898-4cc1-af24-4a329e4e01db.jpg_290xaf.jpg'
                ].map((src, i) => (
                  <div key={i} className="relative w-full max-w-xl mx-auto" style={{aspectRatio:'4/ 1'}}>
                    <Image src={src} alt={`aerated-membrane-${i+1}`} fill unoptimized className="object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 1: ViLEP technology */}
            <div>
              <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-6 py-3">{t("sol_leachate_series2")}</div>
              <p className="mt-3 text-sm text-gray-700 max-w-3xl">{t("sol_leachate_series2_desc")}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {[
                  'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/42150a51-bfc8-42ac-956b-8b8f99a4e3d5.gif_560xaf.gif',
                     'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7cbe6a9f-d9cf-4e51-b05a-1baa694f6b58.jpg_290xaf.jpg'
                ].map((src, i) => (
                  <div key={i} className="relative w-full max-w-xl mx-auto" style={{aspectRatio:'4/ 1'}}>
                    <Image src={src} alt={`vilep-tech-${i+1}`} fill unoptimized className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Energy consumption section with paragraph + five images */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_energy_reduced")}</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-700 max-w-4xl">{t("sol_energy_note")}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
              {['https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7323f561-682c-4dbb-a80c-e7a6da82c790.png_1180xaf.png','https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2ae59fe2-2cf4-4835-b90a-d67effb1c118.webp_1180xaf.webp'].map((src, i) => (
                <div key={i} className="relative w-full" style={{aspectRatio:'3 / 1'}}>
                  <Image src={src} alt={`chart-${i+1}`} fill unoptimized className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final section: description with image */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_overview")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-sm text-gray-700 leading-relaxed">
              {t("sol_leachate_final_desc")}
            </div>
            <div className="relative w-full" style={{aspectRatio:'16 / 9'}}>
              <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/95cc2b5a-04bf-4de8-a874-c3b8288a47c2.webp_1180xaf.webp" alt="Solution overview" fill unoptimized className="object-contain" />
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_tech_adv")}</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:t("sol_leachate_adv1_t"), d:t("sol_leachate_adv1_d")},
               {t:t("sol_leachate_adv2_t"), d:t("sol_leachate_adv2_d")},
               {t:t("sol_leachate_adv3_t"), d:t("sol_leachate_adv3_d")},
               {t:t("sol_leachate_adv4_t"), d:t("sol_leachate_adv4_d")},
            ].map((item, i) => (
              <div key={i} className="flex items-stretch border border-gray-200 rounded-lg overflow-hidden">
                <div className="min-w-[160px] bg-black text-white text-sm font-semibold px-4 py-3 flex items-center justify-center text-center whitespace-pre-line">
                  {item.t}
                </div>
                <div className="flex-1 bg-white px-4 py-3 text-sm text-gray-700">
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_we_provide")}</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
              {[
                t('sol_we_provide_list_1'),
                t('sol_we_provide_list_2'),
                t('sol_we_provide_list_3'),
                t('sol_we_provide_list_4'),
                t('sol_we_provide_list_5'),
              ].map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* Three cards: image + title + description */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_app_highlights")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              {
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/8048c8c4-6051-4f1f-8465-6a8ccc651b7c.webp_560xaf.webp',
                title: t('sol_highlight_1_t'),
                desc: t('sol_highlight_1_d')
                            },
              {
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d6d30694-0975-4788-9ba7-451adf888236.webp_560xaf.webp',
                title: t('sol_highlight_2_t'),
                desc: t('sol_highlight_2_d')
              },
              {
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d957cebc-fc2a-4c36-8351-d456210f83e4.webp_560xaf.webp',
                title: t('sol_highlight_3_t'),
                desc: t('sol_highlight_3_d')

              },
            ].map((card, i) => (
              <div key={i}>
                <div className="relative w-full max-w-md mx-auto" style={{aspectRatio:'2 / 1'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
                <div className="mt-3 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">{card.title}</div>
                <p className="mt-2 text-sm text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


