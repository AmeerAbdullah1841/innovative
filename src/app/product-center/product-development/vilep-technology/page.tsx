"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function VilepTechnologyPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/about.jpg" alt="Background" fill className="object-cover" priority />
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
          <span className="opacity-80">{t("pc_cat_product_development")}</span>
          <span className="mx-2">›</span>
          <span className="text-white">{t("pc_prod_vilep_technology")}</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image
            src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b248fa3b-ab67-41df-99a7-04b15cf8beff.png_1180xaf.png"
              alt="ViLEP technology"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("pc_prod_vilep_technology")}</h1>
            <p className="text-gray-300 leading-relaxed">{t("vt_intro")}</p>
            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-700 transition-colors">{t("contact_us")}</Link>
            </div>
          </div>
        </div>

        {/* Development of membrane */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("dev_of_membrane")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: "16 / 9" }}>
              <Image
              src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/af0bb62e-cebc-4e62-b5c2-2870d6b2867c.webp'
                alt="Development of membrane"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            
          </div>
        </section>

        {/* ViLEP membrane fouling control */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("vilep_fouling_control")}</h2>
          </div>
          {/* Aerated membrane bioreactor (top) */}
          <div className="p-6">
            <div className="inline-flex items-center rounded bg-gray-900 text-white text-xs font-medium px-3 py-1 mb-4">{t("aerated_mbr")}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed order-2 lg:order-1">{t("vt_top_text")}</div>
              <div className="order-1 lg:order-2 w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2a02db7e-8442-412a-b405-83d7b9cde3e4.gif'
                    alt='Aerated membrane bioreactor (animation)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7584d142-2a12-46e9-aee2-5d6a69c45b88.png'
                    alt='Aerated membrane bioreactor (illustration)'
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ViLEP technology (bottom) */}
          <div className="px-6 pb-6 pt-0">
            <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-4">{t("pc_prod_vilep_technology")}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed order-2 lg:order-1">{t("vt_bottom_text")}</div>
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src='https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/55d55873-119e-4169-9c14-e2043d59d55d.gif'
                  alt='ViLEP membrane fouling control (animation)'
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="mt-12 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("vilep_advantages")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              {
                title: t('vt_adv_1_title'),
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c4e6314e-03b4-4dd8-b21c-a793db03cd90.gif',
                desc: t('vt_adv_1_desc')
              },
              {
                title: t('vt_adv_2_title'),
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/435cf448-b2d8-43f3-a3ca-c0856dc303b9.gif',
                desc: t('vt_adv_2_desc')
              },
              {
                title: t('vt_adv_3_title'),
                img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c84e5e8f-0942-4ca3-92a4-88387dbf874e.gif',
                desc: t('vt_adv_3_desc')
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-3 py-1 mb-2">{card.title}</div>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


