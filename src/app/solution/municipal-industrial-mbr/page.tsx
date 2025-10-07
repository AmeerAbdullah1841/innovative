"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function MunicipalIndustrialMBRPage() {
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
          <span className="text-white">{t("sol_mbr_title")}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ee7a5cb-15ab-4c87-a960-fbb641c4a066.png" alt="Municipal & industrial MBR" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-2xl font-semibold text-gray-200 mb-4">{t("sol_mbr_title")}</h1>
          </div>
        </div>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_mbr_title")}</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"",
                d:t("sol_mbr_p1")}
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

       

        {/* Common processes and pain points */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_common_pp")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {title:t("sol_mbr_pain1_t"), desc:t("sol_mbr_pain1_d")},
              {title:t("sol_mbr_pain2_t"), desc:t("sol_mbr_pain2_d")},
              {title:t("sol_mbr_pain3_t"), desc:t("sol_mbr_pain3_d")},
              {title:t("sol_mbr_pain4_t"), desc:t("sol_mbr_pain4_d")},
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
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_adaptive_series")}</h2>
          </div>
          <div className="p-6 space-y-10">
            {/* Row 1: Aerated membrane bioreactor */}
            <div>
              <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-6 py-3">{t("sol_leachate_series1")}</div>
              <p className="mt-3 text-sm text-gray-700 max-w-3xl">{t("sol_leachate_series1_desc")}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
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

        {/* Advantages images row */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("mbr_pf_heading")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {[
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a869811e-8df6-4e8c-986f-3f34ed346a27.gif_366xaf.gif', title:t('mbr_pf_c1_t'), desc:t('mbr_pf_c1_d')},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/bc94cc42-ffca-49b5-ab80-e768a1c146a2.gif_366xaf.gif', title:t('mbr_pf_c2_t'), desc:t('mbr_pf_c2_d')},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b37bb65f-975b-464e-8d8c-57745b7356af.gif_366xaf.gif', title:t('mbr_pf_c3_t'), desc:t('mbr_pf_c3_d')},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e729b635-7bf3-4c85-b136-6b46df428eda.gif_366xaf.gif', title:t('mbr_pf_c4_t'), desc:t('mbr_pf_c4_d')},
            ].map((card,i)=> (
              <div key={i}>
                <div className="relative w-full max-w-md mx-auto" style={{aspectRatio:'16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
                <div className="mt-2 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">{card.title}</div>
                <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VILEP membrane fouling control technology images row */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t('mbr_fouling_heading')}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/09af16c0-9a4a-4036-884f-a59d3f730e6f.gif_560xaf.gif', title:t('mbr_fouling_c1_t'), desc:t('mbr_fouling_c1_d')},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b643edae-0025-4ac9-8615-cba0f795a21a.gif_560xaf.gif', title:t('mbr_fouling_c2_t'), desc:t('mbr_fouling_c2_d')},
              {img:'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/548a44be-9817-411f-ac04-161d3e02248c.gif_560xaf.gif', title:t('mbr_fouling_c3_t'), desc:t('mbr_fouling_c3_d')},
            ].map((card,i)=> (
              <div key={i}>
                <div className="relative w-full max-w-md mx-auto" style={{aspectRatio:'16 / 9'}}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
                <div className="mt-2 inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2">{card.title}</div>
                <p className="text-sm text-gray-700 mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
         {/* Gallery: one large image + two small */}
         <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">
        Energy consumption reduced by 85%+
</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left: big image */}
            <div className="relative w-full lg:row-span-2" style={{aspectRatio:'16 / 9'}}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/09f8a08b-d05e-4f12-bacc-003c5d2d9a65.png_1180xaf.png"
                alt="Big project image"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            {/* Right: two small stacked images */}
            <div className="grid grid-rows-2 gap-6">
              <div className="relative w-full" style={{aspectRatio:'3/ 1'}}>
                <Image
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/1ecff957-3d09-4ce8-bd7f-280a3cdcb64a.png_560xaf.png"
                  alt="Small project image 1"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="relative w-full" style={{aspectRatio:'3 / 1'}}>
                <Image
                src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/5f7b620c-198a-44a8-9091-56d328600c80.png_560xaf.png'
                  alt="Small project image 2"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t('sol_tech_adv')}</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:t('sol_mbr_adv1_t'), d:t('sol_mbr_adv1_d')},
               {t:t('sol_mbr_adv2_t'), d:t('sol_mbr_adv2_d')},
               {t:t('sol_mbr_adv3_t'), d:t('sol_mbr_adv3_d')},
               {t:t('sol_mbr_adv4_t'), d:t('sol_mbr_adv4_d')},
               {t:t('sol_mbr_adv5_t'), d:t('sol_mbr_adv5_d')}          
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
      </div>
    </div>
  );
}


