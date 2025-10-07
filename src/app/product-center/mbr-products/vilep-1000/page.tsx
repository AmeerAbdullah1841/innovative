"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function Vilep1000Page() {
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
          <span className="text-white">{t("pc_prod_vilep_1000")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d7b7767c-100b-498c-a1c7-782e378d2730.png_560xaf.png" alt="ViLEP-1000" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">{t("pc_prod_vilep_1000")}</h1>
            <div className="inline-flex items-center rounded bg-white text-black text-xs font-medium px-4 py-1.5">{t("label_applicable")}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>{t("vilep1000_b1")}</li>
              <li>{t("vilep1000_b2")}</li>
              <li>{t("vilep1000_b3")}</li>
            </ul>
            <div className="mt-4 inline-flex items-center rounded bg-white text-black text-xs font-medium px-4 py-1.5">{t("label_design_flux")}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-200 space-y-2">
              <li>{t("vilep1000_flux_b1")}</li>
              <li>{t("vilep1000_flux_b2")}</li>
            </ul>
          </div>
        </div>

        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("label_product_intro")}</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/d5109449-57e1-45c7-ac59-3d8c67d085d9.webp', title: t('vilep1000_title_1'), desc: t('vilep1000_desc_1') },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fdbba52c-943c-4e42-b0c5-7d2b43320081.png', title: t('vilep1000_title_2'), desc: t('vilep1000_desc_2') }
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

        <section className="mt-6 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("label_membrane_module")}</h2>
          </div>
          <div className="p-4 space-y-6">
            {[
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a32d6bdf-308e-427c-b3cf-7fe5473e900c.webp', title: 'ViLEP-1000 Series R/H', desc: 'ViLEP-1000-25 => L*W*H1*H2=2220mm*1740mm*1900mm*3000mm' },
              { img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/235af540-654c-4f12-b87b-df2f29b8c610.webp', title: 'ViLEP-1000 Series A/F', desc: 'ViLEP-1000-25 => L*W*H1*H2=2220mm*1740mm*2600mm*3700mm'}
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
      </div>
    </div>
  );
}


