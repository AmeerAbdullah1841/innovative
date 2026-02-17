"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function ApplicationCasesPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image src="/w.jpg" alt="Background" fill className="object-cover" priority />
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

        {/* Business Cases Categories */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <Link href="/application-cases/construction-engineering" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_construction")}</div>
            </Link>
            <Link href="/application-cases/chemical-supply" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_chemical")}</div>
            </Link>
            <Link href="/application-cases/machinery-equipment" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_machinery")}</div>
            </Link>
            <Link href="/application-cases/architecture-designs" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_architecture")}</div>
            </Link>
            <Link href="/application-cases/import-export" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_import")}</div>
            </Link>
            <Link href="/application-cases/general-trading" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_trading")}</div>
            </Link>
            <Link href="/application-cases/sustainability-esg" className="p-4 text-center hover:bg-white hover:text-black text-white rounded-lg transition-colors">
              <div className="text-sm font-medium font-semibold">{t("ac_sustainability")}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
