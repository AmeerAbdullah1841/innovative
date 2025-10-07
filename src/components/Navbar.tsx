// https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b248fa3b-ab67-41df-99a7-04b15cf8beff.png_104xaf.png
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

type NavChild = { 
  label: string; 
  href: string;
  children?: Array<{ label: string; href: string }>;
};
type NavItem = {
  label: string;
  href?: string;
  description?: string;
  image?: string;
  children?: Array<NavChild>;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Product Center",
    href: "/product-center",
    description: "pc_desc",
    image: "/about.jpg",
    children: [
      { 
        label: "Product development", 
        href: "",
        children: [
          { label: "1) Sumitomo Electric POREFLON film", href: "/product-center/sumitomo-electric-poreflon-film"  },
          { label: "2) VILEP technology", href: "/product-center/product-development/vilep-technology" },
        ]
      },
      { label: "MBR products", href: "",
        children: [
            { label: "1) ViLEP-100", href: "/product-center/mbr-products/vilep-10" },
            { label: "2) VILEP-1000", href: "/product-center/mbr-products/vilep-1000" },
          ]
       },
      { label: "Ultrafiltration products", href: "",
        children: [
          { label: "1) ViLEP-1500", href: "/product-center/ultrafiltration-products/vilep-1500" },
          { label: "2) ViLEP-2000", href: "/product-center/ultrafiltration-products/vilep-2000" },
        ]
       },
      { label: "Reverse osmosis products", href: "",
        children: [
          { label: "Toyobo reverse osmosis membrane", href: "/product-center/reverse-osmosis-products/toyobo-reverse-osmosis-membrane" },
        ]
      },
      { label: "Application products", href: "" ,
        children: [
          { label: "Free Aeration low resistance microporous aerator", href: "/product-center/application-products/free-aeration-low-resistance-microporous-aerator" },
        ]
      },
      { label: "Boiler systems", href: "",
        children: [
          { label: "Coal‑fired steam boiler", href: "/product-center/boiler-products/coal-fired-steam-boiler" },
          { label: "Biomass‑fired steam boiler", href: "/product-center/boiler-products/biomass-fired-steam-boiler" },
          { label: "Gas & oil‑fired steam boiler", href: "/product-center/boiler-products/gas-oil-fired-steam-boiler" },
          { label: "Thermal oil heater", href: "/product-center/boiler-products/thermal-oil-heater" },
          { label: "Fluidized Bed Steam Boilers", href: "/product-center/boiler-products/horizontal-coal-steam-boiler" },
          { label: "Waste heat recovery steam boiler", href: "/product-center/boiler-products/waste-heat-recovery-steam-boiler" },
          { label: "Fuel conversion of boiler", href: "/product-center/boiler-products/chain-grate-coal-oil-boiler" },
          { label: "3‑in‑one combo system", href: "/product-center/boiler-products/three-in-one-combo-system" },
          { label: "Burners", href: "/product-center/boiler-products/burners" },
        ]
      },
    ],
  },
  {
    label: "Solutions",
    description: "solutions_desc",
    href: '/solution/leachate',
    image: "/sol.jpg",
    children: [
      { label: "Leachate treatment", href: "/solution/leachate" },
      { label: "Municipal & industrial MBR", href: "/solution/municipal-industrial-mbr" },
      { label: "Softening & heavy metal removal", href: "/solution/softening-heavy-metal" },
      { label: "  Oilfield reinjection water treatment technology", href: "/solution/difficult-rejection" },
      { label: "Seawater desalination", href: "/solution/seawater-desalination" },
      { label: "High‑quality drinking water", href: "/solution/drinking-water" },
    ],
  },
  {
    label: "Application Cases",
    description: "ac_desc",
    image: "/cases.jpg",
    href: "/application-cases",
    children: [
      { label: "Leachate field", href: "/application-cases/leachate-field" },
      { label: "Municipal sector", href: "/application-cases/municipal-sector" },
      { label: "Coal chemical & petrochemical", href: "/application-cases/coal-chemical-petrochemical" },
      { label: "Steel & nonferrous", href: "/application-cases/steel-nonferrous-metals" },
      { label: "Electronic electroplating", href: "/application-cases/electronic-electroplating-field" },
      { label: "Printing & dyeing", href: "/application-cases/printing-dyeing-field" },
      { label: "Seawater desalination field", href: "/application-cases/seawater-desalination-field" },
      { label: "High-quality drinking water field", href: "/application-cases/drinking-water-field" },
      { label: "More other areas", href: "/application-cases/more-areas" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<NavChild | null>(null);
  const [activeSubChild, setActiveSubChild] = useState<{ label: string; href: string } | null>(null);

  const currentItem = navItems.find((i) => i.label === openDropdown);
  const panelVisible = Boolean(
    currentItem && (
      (currentItem.children && currentItem.children.length) ||
      currentItem.label === "Contact"
    )
  );

  const getDisplayLabel = (label: string) => {
    switch (label) {
      case "Home":
        return t("nav_home");
      case "Product Center":
        return t("nav_product_center");
      case "Solutions":
        return t("nav_solutions");
      case "Application Cases":
        return t("nav_application_cases");
      case "About Sustonix":
        return t("nav_about");
      case "Join Us":
        return t("nav_join");
      case "Contact":
        return t("nav_contact");
      default:
        return label;
    }
  };

  return (
    <nav
      className="border-b border-gray-200 bg-white/50 hover:bg-white transition-colors backdrop-blur supports-[backdrop-filter]:bg-white/40 sticky top-0 z-50"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Sustonix logo"
              width={320}
              height={320}
              className="h-14 w-auto sm:h-16 md:h-20 lg:h-20 object-contain"
            />
          </Link>
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden sm:flex items-stretch gap-2">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <div className="relative group">
                      <Link
                        href={item.href || "/"}
                        className="inline-flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-200 rounded-md"
                        onMouseEnter={() => {
                          setOpenDropdown(item.label);
                          setActiveChild(item.children?.[0] || null);
                        }}
                      >
                        {getDisplayLabel(item.label)}
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.957a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                    {/* Full-width panel rendered below the navbar; see below */}
                  </>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="inline-flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                  >
                    {getDisplayLabel(item.label)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Desktop language switcher */}
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <button className={`px-2 py-1 rounded text-xs ${lang === "en" ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setLang("en")}>
              EN
            </button>
            <button className={`px-2 py-1 rounded text-xs ${lang === "zh" ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setLang("zh")}>
              中文
            </button>
            <button className={`px-2 py-1 rounded text-xs ${lang === "ru" ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setLang("ru")}>
              RU
            </button>
            <button className={`px-2 py-1 rounded text-xs ${lang === "fr" ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setLang("fr")}>
              FR
            </button>
            <button className={`px-2 py-1 rounded text-xs ${lang === "it" ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`} onClick={() => setLang("it")}>
              IT
            </button>
          </div>
        </div>
      </div>

      {/* Desktop mega panel that visually extends the navbar */}
      <div
        className={`hidden sm:grid border-t border-gray-200 bg-white shadow-sm transition-[grid-template-rows,opacity,transform] duration-1000 ease-out ${
          panelVisible ? "opacity-100 translate-y-0 grid-rows-[1fr]" : "pointer-events-none opacity-0 -translate-y-2 grid-rows-[0fr]"
        }`}
        onMouseEnter={() => null}
      >
        <div className="overflow-hidden">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-[420px_256px_280px] gap-8 py-4">
              <div className="min-w-[300px] max-w-[640px] p-3 border-r border-gray-200">
                <h1 className="text-base font-semibold text-gray-900">{getDisplayLabel(currentItem?.label || "")}</h1>
                <div className="mt-2 text-sm leading-6 text-gray-700">
                  {currentItem?.label === "Contact" ? (
                    <ul className="space-y-1">
                      <li>
                        <span className="font-medium">{t("footer_email")}:</span> contact@sustonix.com
                      </li>
                      <li>
                        <span className="font-medium">{t("footer_phone")}:</span> +00 000 0000
                      </li>
                      <li>
                        <span className="font-medium">{t("footer_address")}:</span> 123 Industrial Park, City
                      </li>
                    </ul>
                  ) : (
                    currentItem?.description ? t(currentItem.description) : ""
                  )}
                </div>
                {(activeSubChild?.href || activeChild?.href || currentItem?.label === "Product Center" || currentItem?.label === "Application Cases") && (
                  <div className="mt-3">
                    <Link
                      href={
                        currentItem?.label === "Product Center"
                          ? "/product-center"
                          : currentItem?.label === "Application Cases"
                          ? "/application-cases"
                          : activeSubChild?.href || activeChild?.href || ""
                      }
                      className="inline-flex items-center rounded-full bg-black text-white px-3 py-1.5 text-xs font-medium hover:bg-blue-700"
                    >
                      {t("open_page")}
                    </Link>
                  </div>
                )}
              </div>
              {currentItem?.label !== "Contact" && (
              <div className="w-64 p-10 flex flex-col justify-start">
                {(currentItem?.children || []).map((child) => (
                  <div key={child.label} className="relative">
                    {child.href ? (
                      <Link
                        href={child.href}
                        className={`w-full block rounded-md px-3 py-2 text-sm text-black hover:text-blue-600 hover:bg-transparent ${
                          activeChild?.label === child.label ? "bg-gray-50" : ""
                        }`}
                        onMouseEnter={() => {
                          setActiveChild(child);
                          setActiveSubChild(null);
                        }}
                        onFocus={() => {
                          setActiveChild(child);
                          setActiveSubChild(null);
                        }}
                        onClick={() => setOpenDropdown(null)}
                      >
                            {(() => {
                          // Map known child labels to i18n keys
                          switch (child.label) {
                            case "Product development":
                              return t("pc_cat_product_development");
                            case "MBR products":
                              return t("pc_cat_mbr");
                            case "Ultrafiltration products":
                              return t("pc_cat_ultra");
                            case "Reverse osmosis products":
                              return t("pc_cat_ro");
                            case "Application products":
                              return t("pc_cat_app");
                            case "Company Profile":
                              return t("about_company");
                            case "Development History":
                              return t("about_history");
                            case "Honorary Qualifications":
                              return t("about_honor");
                            case "Corporate Culture":
                              return t("about_culture");
                            case "News":
                              return t("about_news");
                            case "Talent Concept":
                              return t("join_concept");
                            case "Talent Recruitment":
                              return t("join_recruitment");
                            case "Contact Us":
                              return t("join_contact");
                                case "Leachate field":
                                  return t("ac_leachate");
                                case "Municipal sector":
                                  return t("ac_municipal");
                                case "Coal chemical & petrochemical":
                                  return t("ac_coal");
                                case "Steel & nonferrous":
                                  return t("ac_steel");
                                case "Electronic electroplating":
                                  return t("ac_electronic");
                                case "Printing & dyeing":
                                  return t("ac_printing");
                                case "Seawater desalination field":
                                  return t("ac_seawater");
                                case "High-quality drinking water field":
                                  return t("ac_drinking");
                                case "More other areas":
                                  return t("ac_more");
                            case "Leachate treatment":
                              return t("sol_leachate");
                            case "Municipal & industrial MBR":
                              return t("sol_mbr");
                            case "Softening & heavy metal removal":
                              return t("sol_softening");
                            case "  Oilfield reinjection water treatment technology":
                              return t("sol_oilfield");
                            case "Seawater desalination":
                              return t("sol_seawater");
                            case "High‑quality drinking water":
                              return t("sol_drinking");
                            default:
                              return child.label;
                          }
                        })()}
                      </Link>
                    ) : (
                      <div
                        className={`w-full block rounded-md px-3 py-2 text-sm text-gray-600 cursor-default ${
                          activeChild?.label === child.label ? "bg-gray-50" : ""
                        }`}
                        onMouseEnter={() => {
                          setActiveChild(child);
                          setActiveSubChild(null);
                        }}
                        onFocus={() => {
                          setActiveChild(child);
                          setActiveSubChild(null);
                        }}
                      >
                        {(() => {
                          switch (child.label) {
                            case "Product development":
                              return t("pc_cat_product_development");
                            case "MBR products":
                              return t("pc_cat_mbr");
                            case "Ultrafiltration products":
                              return t("pc_cat_ultra");
                            case "Reverse osmosis products":
                              return t("pc_cat_ro");
                            case "Application products":
                              return t("pc_cat_app");
                            case "Company Profile":
                              return t("about_company");
                            case "Development History":
                              return t("about_history");
                            case "Honorary Qualifications":
                              return t("about_honor");
                            case "Corporate Culture":
                              return t("about_culture");
                            case "News":
                              return t("about_news");
                            default:
                              return child.label;
                          }
                        })()}
                      </div>
                    )}
                     {/* Nested children */}
                     {activeChild?.label === child.label && child.children && child.children.length > 0 && (
                       <div className="ml-4 mt-1 space-y-1">
                        {child.children.map((subChild) => (
                          <Link
                            key={subChild.label}
                            href={subChild.href}
                            className={`w-full block rounded-md px-3 py-2 text-sm text-black hover:text-blue-600 hover:bg-transparent ${
                              activeSubChild?.label === subChild.label ? "bg-gray-50" : ""
                            }`}
                            onMouseEnter={() => setActiveSubChild(subChild)}
                            onFocus={() => setActiveSubChild(subChild)}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {(() => {
                              switch (subChild.label) {
                                case "1) Sumitomo Electric POREFLON film":
                                  return t("pc_prod_poreflon");
                                case "2) VILEP technology":
                                  return t("pc_prod_vilep_technology");
                                case "1) ViLEP-100":
                                  return t("pc_prod_vilep_100");
                                case "2) VILEP-1000":
                                  return t("pc_prod_vilep_1000");
                                case "1) ViLEP-1500":
                                  return t("pc_prod_vilep_1500");
                                case "2) ViLEP-2000":
                                  return t("pc_prod_vilep_2000");
                                case "Toyobo reverse osmosis membrane":
                                  return t("pc_prod_toyobo_ro");
                                case "Free Aeration low resistance microporous aerator":
                                  return t("pc_prod_free_aeration");
                                case "Company Profile":
                                  return t("about_company");
                                case "Development History":
                                  return t("about_history");
                                case "Honorary Qualifications":
                                  return t("about_honor");
                                case "Corporate Culture":
                                  return t("about_culture");
                                case "News":
                                  return t("about_news");
                                case "Talent Concept":
                                  return t("join_concept");
                                case "Talent Recruitment":
                                  return t("join_recruitment");
                                case "Contact Us":
                                  return t("join_contact");
                                default:
                                  return subChild.label;
                              }
                            })()}
                          </Link>
                        ))}
                       </div>
                     )}
                  </div>
                ))}
              </div>
              )}
              <div className="hidden sm:flex items-center justify-center">
                {currentItem?.image && (
                  <Image
                    src={currentItem.image}
                    alt={currentItem.label}
                    width={currentItem.label === "Product Center" || currentItem.label === "Solution" || currentItem.label ===  "Application Cases" ? 280 : 180}
                    height={currentItem.label === "Product Center" || currentItem.label === "Solution" || currentItem.label === "Application Cases" ? 180 : 120}
                    className="rounded object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-gray-200">
          <ul className="px-2 py-2">
            {navItems.map((item) => (
              <li key={item.label} className="">
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                      {getDisplayLabel(item.label)}
                      <span className="ml-2">▾</span>
                    </summary>
                    <div className="pl-2">
                      {item.children.map((child) => (
                        <div key={child.label} className="">
                          {child.href ? (
                            <Link
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setMobileOpen(false)}
                            >
                              {(() => {
                                switch (child.label) {
                                  case "Product development":
                                    return t("pc_cat_product_development");
                                  case "MBR products":
                                    return t("pc_cat_mbr");
                                  case "Ultrafiltration products":
                                    return t("pc_cat_ultra");
                                  case "Reverse osmosis products":
                                    return t("pc_cat_ro");
                                  case "Application products":
                                    return t("pc_cat_app");
                                  case "Company Profile":
                                    return t("about_company");
                                  case "Development History":
                                    return t("about_history");
                                  case "Honorary Qualifications":
                                    return t("about_honor");
                                  case "Corporate Culture":
                                    return t("about_culture");
                                  case "News":
                                    return t("about_news");
                                  case "Talent Concept":
                                    return t("join_concept");
                                  case "Talent Recruitment":
                                    return t("join_recruitment");
                                  case "Contact Us":
                                    return t("join_contact");
                                  case "Leachate treatment":
                                    return t("sol_leachate");
                                  case "Municipal & industrial MBR":
                                    return t("sol_mbr");
                                  case "Softening & heavy metal removal":
                                    return t("sol_softening");
                                  case "  Oilfield reinjection water treatment technology":
                                    return t("sol_oilfield");
                                  case "Seawater desalination":
                                    return t("sol_seawater");
                                  case "High‑quality drinking water":
                                    return t("sol_drinking");
                                  case "Leachate field":
                                    return t("ac_leachate");
                                  case "Municipal sector":
                                    return t("ac_municipal");
                                  case "Coal chemical & petrochemical":
                                    return t("ac_coal");
                                  case "Steel & nonferrous":
                                    return t("ac_steel");
                                  case "Electronic electroplating":
                                    return t("ac_electronic");
                                  case "Printing & dyeing":
                                    return t("ac_printing");
                                  case "Seawater desalination field":
                                    return t("ac_seawater");
                                  case "High-quality drinking water field":
                                    return t("ac_drinking");
                                  case "More other areas":
                                    return t("ac_more");
                                  default:
                                    return child.label;
                                }
                              })()}
                            </Link>
                          ) : (
                            <div className="block rounded-md px-3 py-2 text-sm text-gray-800 font-medium">
                              {(() => {
                                switch (child.label) {
                                  case "Product development":
                                    return t("pc_cat_product_development");
                                  case "MBR products":
                                    return t("pc_cat_mbr");
                                  case "Ultrafiltration products":
                                    return t("pc_cat_ultra");
                                  case "Reverse osmosis products":
                                    return t("pc_cat_ro");
                                  case "Application products":
                                    return t("pc_cat_app");
                                  default:
                                    return child.label;
                                }
                              })()}
                            </div>
                          )}
                          {child.children && child.children.length > 0 && (
                            <div className="ml-3 border-l border-gray-200 pl-3">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {(() => {
                                    switch (sub.label) {
                                      case "1) Sumitomo Electric POREFLON film":
                                        return t("pc_prod_poreflon");
                                      case "2) VILEP technology":
                                        return t("pc_prod_vilep_technology");
                                      case "1) ViLEP-100":
                                        return t("pc_prod_vilep_100");
                                      case "2) VILEP-1000":
                                        return t("pc_prod_vilep_1000");
                                      case "1) ViLEP-1500":
                                        return t("pc_prod_vilep_1500");
                                      case "2) ViLEP-2000":
                                        return t("pc_prod_vilep_2000");
                                      case "Toyobo reverse osmosis membrane":
                                        return t("pc_prod_toyobo_ro");
                                      case "Free Aeration low resistance microporous aerator":
                                        return t("pc_prod_free_aeration");
                                      default:
                                        return sub.label;
                                    }
                                  })()}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2 px-3 py-2 text-sm text-gray-700">
              <span>{t("language")}:</span>
              <button className={`px-2 py-1 rounded ${lang === "en" ? "bg-black text-white" : "bg-gray-100"}`} onClick={() => setLang("en")}>EN</button>
              <button className={`px-2 py-1 rounded ${lang === "zh" ? "bg-black text-white" : "bg-gray-100"}`} onClick={() => setLang("zh")}>中文</button>
              <button className={`px-2 py-1 rounded ${lang === "ru" ? "bg-black text-white" : "bg-gray-100"}`} onClick={() => setLang("ru")}>RU</button>
              <button className={`px-2 py-1 rounded ${lang === "fr" ? "bg-black text-white" : "bg-gray-100"}`} onClick={() => setLang("fr")}>FR</button>
              <button className={`px-2 py-1 rounded ${lang === "it" ? "bg-black text-white" : "bg-gray-100"}`} onClick={() => setLang("it")}>IT</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


