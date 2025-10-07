"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function DifficultRejectionPage() {
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
          <span className="text-white">{t("sol_oilfield_title")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/oil-water.jpg" alt="Difficult rejection" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("sol_oilfield_title")}</h1>
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
   {/* Problems with membrane filtration technology section */}
             <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_oilfield_common_pp")}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-6">{t('sol_oilfield_p1')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h1')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d1')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h2')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d2')}</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                  src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/ee49a8b9-4aa7-4012-a8ac-c7b848e24448.webp" 
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* Problems with membrane filtration technology section */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_oilfield_prob_heading2")}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                  src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e7f6a2c8-ac68-4262-999d-3af11774c049.webp" 
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">{t('sol_oilfield_p1')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h1')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d1')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h2')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d2')}</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
           <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_oilfield_vilep_heading")}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             
              <div>
                <p className="text-gray-700 mb-6">{t('sol_oilfield_p1')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h1')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d1')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h2')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d2')}</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/112927ef-5258-4626-afd3-b22c3433792a.webp"
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
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_oilfield_features_heading")}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full" style={{ aspectRatio: "4 / 2" }}>
                <Image 
                src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/95aa0868-1c3b-4cbc-b26f-dc753fffb65a.webp"
                  alt="Industrial Process Diagram" 
                  fill 
                  unoptimized 
                  className="object-contain" 
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">{t('sol_oilfield_p1')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h1')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d1')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('sol_oilfield_p1_h2')}</h3>
                    <p className="text-sm text-gray-700">{t('sol_oilfield_p1_d2')}</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>

        {/* Final image section */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-6 flex justify-center">
            <div className="relative w-full max-w-4xl" style={{ aspectRatio: "3/ 1" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d23c99a6-307d-4984-b61c-903c657189c3.png'
                alt="Process overview"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_oilfield_tech_adv_heading")}</h2>
          </div>
          <div className="p-6 space-y-4">
             {[
               {t:t('sol_oilfield_adv1_t'), d:t('sol_oilfield_adv1_d')},
               {t:t('sol_oilfield_adv2_t'), d:t('sol_oilfield_adv2_d')},
               {t:t('sol_oilfield_adv3_t'), d:t('sol_oilfield_adv3_d')},
               {t:t('sol_oilfield_adv4_t'), d:t('sol_oilfield_adv4_d')}           
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


