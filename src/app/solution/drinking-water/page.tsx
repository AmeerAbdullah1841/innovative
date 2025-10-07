"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function DrinkingWaterPage() {
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
          <span className="text-white">{t("sol_drink_title")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/drink.jpg" alt="Drinking water" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("sol_drink_title")}</h1>
          </div>
        </div>
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("sol_drink_h2")}</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              {t:"",
                d:t("sol_drink_p1")}
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
          <div className="p-2 flex justify-center">
            <div className="relative w-full max-w-4xl" style={{ aspectRatio: "3/ 1" }}>
              <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/35805fbb-9711-4970-8d17-0f0289ff91dd.webp"
                alt="Process overview"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            
          </div>
          <p className="ml-50 text-sm text-gray-700">
          <b >{t("sol_note")}</b> {t("sol_note_text")} </p>
        </section>
        
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t('sol_drink_adv_heading')}</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
              {/* Equipment advantages */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <div className="w-6 h-4 bg-black rounded-sm transform rotate-90"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('sol_drink_equipment_t')}</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• {t('sol_drink_equipment_b1')}</li>
                  <li>• {t('sol_drink_equipment_b2')}</li>
                  <li>• {t('sol_drink_equipment_b3')}</li>
                </ul>
              </div>

              {/* Process advantages */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('sol_drink_process_t')}</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• {t('sol_drink_process_b1')}</li>
                </ul>
              </div>

              {/* High-efficiency filtration */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-black-600 rounded flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-sm relative">
                      <div className="absolute inset-1 border border-white rounded"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('sol_drink_filter_t')}</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• {t('sol_drink_filter_b1')}</li>
                  <li>• {t('sol_drink_filter_b2')}</li>
                  <li>• {t('sol_drink_filter_b3')}</li>
                  <li>• {t('sol_drink_filter_b4')}</li>
                </ul>
              </div>

              {/* Performance advantages */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('sol_drink_perf_t')}</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• {t('sol_drink_perf_b1')}</li>
                  <li>• {t('sol_drink_perf_b2')}</li>
                  <li>• {t('sol_drink_perf_b3')}</li>
                  <li>• {t('sol_drink_perf_b4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="ml-90 h-6 w-1.5 bg-black rounded" />
            <h2 className=" text-lg font-semibold text-gray-900">{t("sol_adaptive_series")}</h2>
          </div>
          <div className="p-2">
            <p className="ml-50 text-gray-700">{t('sol_drink_product_desc')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}


