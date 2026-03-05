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
            <h4 className="text-sm font-semibold mb-3 mt-4">{t("footer_follow_us")}</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/17LuHsBrZk/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/iis-innovative-integrated-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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


