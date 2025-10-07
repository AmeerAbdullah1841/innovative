"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function SeawaterDesalinationPage() {
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
          <span className="text-white">{t("sol_sea_title")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-2 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/water.jpg" alt="Seawater desalination" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("sol_sea_title")}</h1>
            <p className="text-gray-700 leading-relaxed"></p>
          </div>
        </div>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_sea_h2")}</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"",
                d:t('sol_sea_p1')}
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
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_common_pp")}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{t("sol_sea_pain")}</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700">
                    • {t('sol_sea_pain_b1')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                    • {t('sol_sea_pain_b2')}</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fe6f4f78-e9f8-42c3-b3b7-4037ab693787.webp"
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-2 flex justify-center">
            <div className="relative w-full max-w-4xl" style={{ aspectRatio: "3/ 1" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/72c9b226-2358-413c-ba8c-d31fecdcfed6.png'
                alt="Process overview"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            
          </div>
          <p className="ml-10 text-sm text-gray-700">{t('sol_sea_p1')}</p>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t('sol_sea_benefit_heading')}</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:t('sol_sea_b1_t'), d:t('sol_sea_b1_d')},
               {t:t('sol_sea_b2_t'), d:t('sol_sea_b2_d')},
               {t:t('sol_sea_b3_t'), d:t('sol_sea_b3_d')},
               {t:t('sol_sea_b4_t'), d:t('sol_sea_b4_d')},
               {t:t('sol_sea_b5_t'), d:t('sol_sea_b5_d')}           
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


