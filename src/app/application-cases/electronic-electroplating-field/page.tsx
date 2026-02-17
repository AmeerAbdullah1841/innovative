"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function ElectronicElectroplatingFieldPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/case-1.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-sm text-white/80 mb-6">
          <Link href="/" className="hover:underline">{t("nav_home")}</Link>
          <span className="mx-2">›</span>
          <Link href="/application-cases" className="hover:underline">{t("ac_breadcrumb")}</Link>
          <span className="mx-2">›</span>
          <span className="text-white">{t("ac_electronic")}</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("ac_hero_title")}</h1>
        </div>

        {/* Business Cases Categories Tabs */}
        <div className="bg-black rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <Link href="/application-cases/construction-engineering" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_construction")}
            </Link>
            <Link href="/application-cases/chemical-supply" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_chemical")}
            </Link>
            <Link href="/application-cases/machinery-equipment" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_machinery")}
            </Link>
            <Link href="/application-cases/architecture-designs" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_architecture")}
            </Link>
            <Link href="/application-cases/import-export" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_import")}
            </Link>
            <Link href="/application-cases/general-trading" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_trading")}
            </Link>
            <Link href="/application-cases/sustainability-esg" className="px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-lg transition-colors">
              {t("ac_sustainability")}
            </Link>
          </div>
        </div>

        {/* Electronic Electroplating Field Content */}
        <section className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">{t("ac_electronic")}</h2>
          </div>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li1")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li2")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li3")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li4")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li5")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white">{t("ac_electronic_li6")}</p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
          
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/deed8c95-b391-4d30-8513-8e926560233a.webp_640xaf.webp"                  alt="Electronic Electroplating Project 1"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b5683d16-6520-404b-9e98-12f7c92f40cb.webp_640xaf.webp"                  alt="Electronic Electroplating Project 2"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Image
src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/da195be7-2111-4c69-811d-d5c8fafdd49f.webp_640xaf.webp"                  alt="Electronic Electroplating Project 3"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
