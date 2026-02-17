"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-black text-white mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3">Innovative Integrated Solutions
</h4>
            <p className="text-sm text-white/70 leading-relaxed">{t("footer_desc")}</p>
          </div>
          <div>
         <h3 className="text-sm font-semibold mb-3"><Link href="/product-center" className="hover:text-white">{t("nav_product_center")}</Link></h3>
         <h3 className="text-sm font-semibold mb-3"><Link href="/solution/leachate" className="hover:text-white">{t("nav_solutions")}</Link></h3>
         <h3 className="text-sm font-semibold mb-3"><Link href="/application-cases" className="hover:text-white">{t("nav_application_cases")}</Link></h3>

          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer_company_title")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white">{t("nav_home")}</Link></li>
              <li><Link href="/joining-support" className="hover:text-white">{t("nav_join")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer_contact_title")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{t("footer_email")}: Info@Innovative Integrated Solutions
.com</li>
              <li>{t("footer_phone")}: +86 138 1625 6916</li>
              <li>{t("footer_address")}: RM.1801, EASEY COMM. BLDG., 253-261 HENNESSY ROAD, WAN CHAI HONG KONG</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Innovative Integrated Solutions
. {t("footer_rights")}</span>
          <Link href="/admin/login" className="text-white/60 hover:text-white/80 transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}


