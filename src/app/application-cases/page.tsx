"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function ApplicationCasesPage() {
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
          <span className="text-white">{t("ac_breadcrumb")}</span>
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("ac_hero_title")}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t("ac_hero_desc")}
          </p>
        </div>

        {/* Application Categories */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <Link href="/application-cases/leachate-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_leachate")}</div>
            </Link>
            <Link href="/application-cases/municipal-sector" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_municipal")}</div>
            </Link>
            <Link href="/application-cases/printing-dyeing-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_printing")}</div>
            </Link>
            <Link href="/application-cases/coal-chemical-petrochemical" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_coal")}</div>
            </Link>
            <Link href="/application-cases/steel-nonferrous-metals" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_steel")}</div>
            </Link>
            <Link href="/application-cases/seawater-desalination-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_seawater")}</div>
            </Link>
            <Link href="/application-cases/electronic-electroplating-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_electronic")}</div>
            </Link>
            <Link href="/application-cases/drinking-water-field" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_drinking")}</div>
            </Link>
            <Link href="/application-cases/more-areas" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_more")}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
