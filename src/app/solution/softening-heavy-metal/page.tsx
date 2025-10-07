"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function SofteningHeavyMetalPage() {
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
          <span className="text-white">{t("sol_soft_title")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: "16 / 9" }}>
            <Image src="/soft.jpg" alt="Softening & heavy metal" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("sol_soft_title")}</h1>
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
          <div className="relative mx-auto max-w-5xl" style={{ aspectRatio: "5 / 1" }}>
            <Image 
            src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a5f93a96-bb98-43ac-97a8-b3f03ecd665e.png'
             alt="Municipal & industrial MBR" fill unoptimized className="object-contain" />
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: t('sol_soft_pain1'), desc: t('sol_soft_pain1_d') || "" },
              { title: t('sol_soft_pain2'), desc: t('sol_soft_pain2_d') || "" },
              { title: t('sol_soft_pain3'), desc: t('sol_soft_pain3_d') || "" },
            ].map((c)=> (
              <div key={c.title} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-black text-white text-sm font-semibold px-4 py-2">{c.title}</div>
                <div className="px-4 py-3 text-sm text-gray-700">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_soft_solution")}</h2>
            
          </div>
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative mx-auto w-full max-w-sm" style={{ aspectRatio: "4 / 1" }}>
                <Image 
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b25084d8-5545-4848-9b44-f8d811582212.png_1180xaf.png'
                  alt="Municipal & industrial MBR - diagram 1" fill unoptimized className="object-contain" />
              </div>
              <div className="relative mx-auto w-full max-w-5xl" style={{ aspectRatio: "4/ 1" }}>
                <Image 
                src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/95f116c4-43e9-46ba-9db0-fb64db852570.png_1180xaf.png'
                  alt="Municipal & industrial MBR - diagram 2" fill unoptimized className="object-contain" />
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:t("sol_soft_flow1_t"), d:t('sol_soft_flow1_d')},
               {t:t("sol_soft_flow2_t"), d:t('sol_soft_flow2_d')},
               {t:t("sol_soft_flow3_t"), d:t('sol_soft_flow3_d')},
               {t:t("sol_soft_flow4_t"), d:t('sol_soft_flow4_d')},
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
         {/* Technological advantages - bullet points */}
         <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_tech_adv")}</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
              <li>{t('soft_adv_b1') || 'Broad SS tolerance; minimal pretreatment.'}</li>
              <li>{t('soft_adv_b2') || 'Simplified pretreatment; compact footprint.'}</li>
              <li>{t('soft_adv_b3') || 'No PAC/PAM; less acid/alkali, lower reagent costs.'}</li>
              <li>{t('soft_adv_b4') || 'Negative-pressure suction; hollow fiber PTFE boosts area and saves energy.'}</li>
              <li>{t('soft_adv_b5') || 'Simple control; fully automatic; low investment.'}</li>
            </ul>
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


