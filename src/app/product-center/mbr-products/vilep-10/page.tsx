"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function Vilep10Page() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/about.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">{t("nav_home")}</Link>
          <span className="mx-2">›</span>
          <Link href="/product-center" className="hover:underline">{t("nav_product_center")}</Link>
          <span className="mx-2">›</span>
          <span className="opacity-80">{t("pc_cat_mbr")}</span>
          <span className="mx-2">›</span>
          <span className="text-white">{t("pc_prod_vilep_100")}</span>
        </div>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3f990b3-3413-4e40-9c00-37f9fac72470.png_1180xaf.png" alt="ViLEP-10" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("pc_prod_vilep_100")}</h1>
            {/* Applicable Scenarios */}
            <div className="inline-flex items-center rounded bg-white text-black text-sm md:text-base font-medium px-4 py-1.5">{t("label_applicable")}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>{t("vilep100_b1")}</li>
              <li>{t("vilep100_b2")}</li>
              <li>{t("vilep100_b3")}</li>
              <li>{t("vilep100_b4")}</li>
            </ul>
            {/* Design flux */}
            <div className="mt-4 inline-flex items-center rounded bg-white text-black text-sm md:text-base font-medium px-4 py-1.5">{t("label_design_flux")}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>{t("vilep100_flux_b1")}</li>
              <li>{t("vilep100_flux_b2")}</li>
            </ul>
            <div className="mt-4">
              <Link href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-700">{t("contact_us")}</Link>
            </div>
          </div>
        </div>

        {/* Product specs blocks */}
        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("label_product_intro")}</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/c64d6969-2875-40ca-b646-a939aa727109.webp_640xaf.webp', title: t('vilep100_title_1'), desc: t('vilep100_desc_1') },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/06e84f67-14fe-4be9-b201-74422c738722.png', title: t('vilep100_title_2'), desc: t('vilep100_desc_2') }
            ].map((block, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: "4 / 3" }}>
                  <Image src={block.img} alt={block.title} fill unoptimized className="object-contain" />
                </div>
                <div>
                  <h2 className="vilep-10-title text-xl md:text-2xl font-semibold text-gray-900 mb-2">{block.title}</h2>
                  <p className="vilep-10-desc text-xs md:text-sm text-gray-700 leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membrane section */}
        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("label_membrane_module")}</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/8ef7dcdf-2787-41ad-8e20-c6b3c166209c.webp', title: t('vilep100_mm1_title'), desc: t('vilep100_mm1_desc') },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/3c1fb05c-d1ca-4a7d-b598-9ab91f3400bc.webp', title: t('vilep100_mm2_title'), desc: t('vilep100_mm2_desc') }
            ].map((p, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '16 / 9' }}>
                  <Image src={p.img} alt={p.title} fill unoptimized className="object-contain" />
                </div>
                <div>
                  <h2 className="vilep-10-title text-xl md:text-2xl font-semibold text-gray-900 mb-2">{p.title}</h2>
                  <p className="vilep-10-desc text-xs md:text-sm text-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


