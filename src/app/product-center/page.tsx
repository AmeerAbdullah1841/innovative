"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

const productCategories = [
  {
    id: "product-development",
    name: "Product development",
    icon: "💧🌱",
    description: "",
    href: "/product-center/product-development",
    subProducts: [
      { name: "ViLEP technology", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b248fa3b-ab67-41df-99a7-04b15cf8beff.png_104xaf.png" ,href: "/product-center/product-development/vilep-technology"},
      { name: "Sumitomo Electric POREFLON film", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/2c6d4aed-ed65-4404-8cea-3ef06ac77a4c.png_1180xaf.png", href: "/product-center/sumitomo-electric-poreflon-film" }
    ]
  },
  {
    id: "mbr-products",
    name: "MBR products",
    icon: "💧",
    description: "",
    href: "/product-center/mbr-products",
    subProducts: [
      { name: "ViLEP-100", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3f990b3-3413-4e40-9c00-37f9fac72470.png" ,href: "/product-center/mbr-products/vilep-10"},
      { name: "ViLEP-1000", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a037fb76-4e67-49e5-9a8e-55ce316861e6.png" ,href: "/product-center/mbr-products/vilep-1000"}
    ]
  },
  {
    id: "ultrafiltration-products",
    name: "Ultrafiltration products",
    icon: "💧🔬",
    description: "",
    href: "/product-center/ultrafiltration-products",
    subProducts: [
      { name: "ViLEP-1500", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/48a62f05-755c-45c8-aa1d-f99cf9c3931a.png" , href: "/product-center/ultrafiltration-products/vilep-1500" },
      { name: "ViLEP-2000", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/98240e63-c705-4174-a437-c26fec47cb25.png" , href: "/product-center/ultrafiltration-products/vilep-2000" }
    ]
  },
  {
    id: "reverse-osmosis-products",
    name: "Reverse osmosis products",
    description: "",
    icon: "💧🔬",
    href: "/product-center/reverse-osmosis-products",
    isHighlighted: true,
    subProducts: [
      { name: "Toyobo reverse osmosis membrane", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/afef06a4-e83d-4346-af44-c6384e4cefad.png" , href: "/product-center/reverse-osmosis-products/toyobo-reverse-osmosis-membrane" }
    ]
  },
  {
    id: "application-products",
    name: "Application products",
    icon: "💧🔬",
    description: "",
    href: "/product-center/application-products",
    subProducts: [
      { name: "Free Aeration low resistance microporous aerator", image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/422a1add-d9d9-45d6-bf2f-baa42fae5a8e.png" , href: "/product-center/application-products/free-aeration-low-resistance-microporous-aerator" }
    ]
  }
  ,
  {
    id: "boiler-products",
    name: "Boiler systems",
    icon: "🔥",
    description: "",
    href: "/product-center/boiler-products",
    subProducts: [
      { name: "Coal‑fired steam boiler", image: "/coal-2.jpg", href: "/product-center/boiler-products/coal-fired-steam-boiler" },
      { name: "Biomass‑fired steam boiler", image: "/biomass-1.jpg", href: "/product-center/boiler-products/biomass-fired-steam-boiler" },
      { name: "Gas & oil‑fired steam boiler", image: "/thermal-2.jpg", href: "/product-center/boiler-products/gas-oil-fired-steam-boiler" },
      { name: "Thermal oil heater", image: "/heater-1.jpg", href: "/product-center/boiler-products/thermal-oil-heater" },
      { name: "Steam generator", image: "/steam-1.jpg", href: "/product-center/boiler-products/steam-generator" },
      { name: "Horizontal coal steam boiler", image: "/bubbling-1.png", href: "/product-center/boiler-products/horizontal-coal-steam-boiler" },
      { name: "Waste heat recovery steam boiler", image: "/waste-1.jpg", href: "/product-center/boiler-products/waste-heat-recovery-steam-boiler" },
      { name: "Chain grate coal/oil boiler", image: "/fuel-1.jpg", href: "/product-center/boiler-products/chain-grate-coal-oil-boiler" },
      { name: "3‑in‑one combo system", image: "/combo-2.jpg", href: "/product-center/boiler-products/three-in-one-combo-system" },
      { name: "Burners", image: "/burner-1.jpg", href: "/product-center/boiler-products/burners" }
    ]
  }
];

export default function ProductCenterPage() {
  const { t } = useI18n();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const translateCategoryName = (name: string) => {
    switch (name) {
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
      case "Boiler systems":
        return t("pc_cat_boilers");
      default:
        return name;
    }
  };

  const translateProductName = (name: string) => {
    switch (name) {
      case "ViLEP technology":
        return t("pc_prod_vilep_technology");
      case "Sumitomo Electric POREFLON film":
        return t("pc_prod_poreflon");
      case "ViLEP-100":
        return t("pc_prod_vilep_100");
      case "ViLEP-1000":
        return t("pc_prod_vilep_1000");
      case "ViLEP-1500":
        return t("pc_prod_vilep_1500");
      case "ViLEP-2000":
        return t("pc_prod_vilep_2000");
      case "Toyobo reverse osmosis membrane":
        return t("pc_prod_toyobo_ro");
      case "Free Aeration low resistance microporous aerator":
        return t("pc_prod_free_aeration");
      case "Coal‑fired steam boiler":
        return t("pc_prod_boiler_coal");
      case "Biomass‑fired steam boiler":
        return t("pc_prod_boiler_biomass");
      case "Gas & oil‑fired steam boiler":
        return t("pc_prod_boiler_gasoil");
      case "Thermal oil heater":
        return t("pc_prod_boiler_thermal_oil_heater");
      case "Steam generator":
        return t("pc_prod_boiler_steam_generator");
      case "Horizontal coal steam boiler":
        return t("pc_prod_boiler_horizontal_coal");
      case "Waste heat recovery steam boiler":
        return t("pc_prod_boiler_whr");
      case "Chain grate coal/oil boiler":
        return t("pc_prod_boiler_chain_grate");
      case "3‑in‑one combo system":
        return t("pc_prod_boiler_combo3");
      case "Hot water generator":
        return t("pc_prod_boiler_hot_water_gen");
      case "Burners":
        return t("pc_prod_boiler_burners");
      default:
        return name;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Product Center Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

   
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 drop-shadow-lg">{t("nav_product_center")}</h1>
        
        {/* Description */}
        <div className="max-w-4xl mb-12">
          <p className="text-lg text-white leading-relaxed drop-shadow-md">{t("pc_intro")}</p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className="group relative flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 md:pb-4"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onTouchStart={() => setHoveredCategory(category.id)}
              onClick={() => setHoveredCategory(category.id)}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-black backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ${
                  category.isHighlighted 
                    ? 'ring-2 ring-blue-500 ring-opacity-70' 
                    : 'ring-1 ring-white/50 group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-opacity-70'
                }`}>
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors drop-shadow-md mt-3">
                  {translateCategoryName(category.name)}
                </h3>
                
                {/* Description */}
                {category.description && (
                  <p className="text-sm text-white/80 group-hover:text-blue-100 transition-colors drop-shadow-sm">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Sub-products list: static on mobile, floating on desktop */}
              {hoveredCategory === category.id && category.subProducts && (
                <div className={`w-full mt-3 md:absolute ${index < 5 ? 'md:bottom-full md:mb-2' : 'md:top-full md:mt-2'} md:left-1/2 md:-translate-x-1/2 md:z-50 md:w-[900px] md:max-w-[90vw]`}>
                  <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-center bg-black/30 md:bg-black/40 rounded-xl p-3">
                    {category.subProducts.map((subProduct, index) => (
                      <div
                        key={index}
                        className="group/sub"
                      >
                        {/* Circular Image Bubble */}
                        <Link href={subProduct.href || '#'} className="block">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-white/50 group-hover/sub:ring-2 group-hover/sub:ring-blue-400 transition-all duration-300 group-hover/sub:scale-110">
                          {subProduct.image ? (
                            <Image
                              src={subProduct.image}
                              alt={subProduct.name}
                              width={90}
                              height={90}
                              unoptimized
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                              {t("no_image")}
                            </div>
                          )}
                          </div>
                        </Link>
                        {/* Subproduct Name */}
                        <div className="mt-2 text-xs text-white text-center max-w-[100px] leading-tight drop-shadow">
                          {translateProductName(subProduct.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Right Icons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-3 z-50">
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
