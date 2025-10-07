"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

type Slide = { src: string; title: string; description: string };

export default function Home() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);

  const slides: Slide[] = [
    { src: "/back.jpg", title: t("hero_title_1"), description: t("hero_desc_1") },
    { src: "/about.jpg", title: t("hero_title_2"), description: t("hero_desc_2") },
    { src: "/water.jpg", title: t("hero_title_3"), description: t("hero_desc_3") },
    { src: "/global.jpg", title: t("hero_title_4"), description: t("hero_desc_4") },
  ];
  const formatName = (name: string) => {
    const words = name.split(" ").filter(Boolean);
    const first = words.slice(0, 3).join(" ");
    const rest = words.slice(3).join(" ");
    return (
      <>
        {first}
        {rest ? (
          <>
            <br />
            {rest}
          </>
        ) : null}
      </>
    );
  };
  const products = [
    {
      key: "vilep-100",
      name: "ViLEP-100",
      href:"/product-center/mbr-products/vilep-10",
      blurb: t("home_prod_v100_blurb"),
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a3f990b3-3413-4e40-9c00-37f9fac72470.png",
      stats: [
        { label: "Nominal area (m²)", value: "100" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Low footprint" },
      ],
    },
    {
      key: "vilep-1000",
      name: "ViLEP-1000",
      href:"/product-center/mbr-products/vilep-1000",
      blurb: t("home_prod_v1000_blurb"),
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/a037fb76-4e67-49e5-9a8e-55ce316861e6.png",
      stats: [
        { label: "Nominal area (m²)", value: "1000" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Optimized" },
      ],
    },
    {
      key: "vilep-1500",
      name: "ViLEP-1500",
      href:"/product-center/ultrafiltration-products/vilep-1500",
      blurb: t("home_prod_v1500_blurb"),
      image:
        "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/48a62f05-755c-45c8-aa1d-f99cf9c3931a.png",
      stats: [
        { label: "Nominal area (m²)", value: "1500" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "Low footprint" },
      ],
    },
    {
      key: "vilep-2000",
      name: "ViLEP-2000",
      href:"/product-center/ultrafiltration-products/vilep-2000",
      blurb: t("home_prod_v2000_blurb"),
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/98240e63-c705-4174-a437-c26fec47cb25.png",
      stats: [
        { label: "Nominal area (m²)", value: "2000" },
        { label: "Pore size", value: "0.1 μm" },
        { label: "Energy", value: "High efficiency" },
      ],
    },
    {
      key: "toyobo-ro",
      name: "Toyobo reverse osmosis membrane",
      href:"/product-center/reverse-osmosis-products/toyobo-reverse-osmosis-membrane",
      blurb: t("home_prod_toyobo_blurb"),
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/afef06a4-e83d-4346-af44-c6384e4cefad.png",
      stats: [
        { label: "Rejection", value: ">99%" },
        { label: "Design", value: "Spiral-wound" },
        { label: "Applications", value: "RO / BWRO" },
      ],
    },
    {
      key: "free-aeration",
      name: "Free Aeration low resistance microporous aerator",
      href:"/product-center/application-products/free-aeration-low-resistance-microporous-aerator",
      blurb: t("home_prod_fa_blurb"),
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/422a1add-d9d9-45d6-bf2f-baa42fae5a8e.png",
      stats: [
        { label: "OTR", value: "High" },
        { label: "Headloss", value: "Low" },
        { label: "Material", value: "Microporous" },
      ],
    },
    // Boiler products
    {
      key: "boiler-coal",
      name: t("pc_prod_boiler_coal"),
      href:"/product-center/boiler-products/coal-fired-steam-boiler",
      blurb: t("boiler_coal_desc"),
      image: "/coal-2.jpg",
    },
    {
      key: "boiler-biomass",
      name: t("pc_prod_boiler_biomass"),
      href:"/product-center/boiler-products/biomass-fired-steam-boiler",
      blurb: t("boiler_biomass_desc"),
      image: "/biomass-1.jpg",
    },
    {
      key: "boiler-gasoil",
      name: t("pc_prod_boiler_gasoil"),
      href:"/product-center/boiler-products/gas-oil-fired-steam-boiler",
      blurb: t("boiler_gasoil_desc"),
      image: "/thermal-2.jpg",
    },
    {
      key: "boiler-thermal",
      name: t("pc_prod_boiler_thermal_oil_heater"),
      href:"/product-center/boiler-products/thermal-oil-heater",
      blurb: t("boiler_thermal_oil_desc"),
      image: "/heater-1.jpg",
    },
    {
      key: "boiler-steam-gen",
      name: t("pc_prod_boiler_steam_generator"),
      href:"/product-center/boiler-products/steam-generator",
      blurb: t("boiler_steam_gen_desc"),
      image: "/steam-1.jpg",
    },
    {
      key: "boiler-horizontal-coal",
      name: t("pc_prod_boiler_horizontal_coal"),
      href:"/product-center/boiler-products/horizontal-coal-steam-boiler",
      blurb: t("boiler_horizontal_coal_desc"),
      image: "/bubbling-1.png",
    },
    {
      key: "boiler-whr",
      name: t("pc_prod_boiler_whr"),
      href:"/product-center/boiler-products/waste-heat-recovery-steam-boiler",
      blurb: t("boiler_whr_desc"),
      image: "/waste-1.jpg",
    },
    {
      key: "boiler-chain-grate",
      name: t("pc_prod_boiler_chain_grate"),
      href:"/product-center/boiler-products/chain-grate-coal-oil-boiler",
      blurb: t("boiler_chain_grate_desc"),
      image: "/fuel-1.jpg",
    },
    {
      key: "boiler-combo3",
      name: t("pc_prod_boiler_combo3"),
      href:"/product-center/boiler-products/three-in-one-combo-system",
      blurb: t("boiler_combo3_desc"),
      image: "/combo-2.jpg",
    },
    {
      key: "boiler-burners",
      name: t("pc_prod_boiler_burners"),
      href:"/product-center/boiler-products/burners",
      blurb: t("boiler_burners_desc"),
      image: "/burner-1.jpg",
    },
  ];
  const [activeProductIdx, setActiveProductIdx] = useState(2);
  // Limit thumbnail options to these products and preserve order
  const productOptionKeys = [
    "vilep-100",
    "vilep-1000",
    "vilep-1500",
    "vilep-2000",
    "toyobo-ro",
    "free-aeration",
    // Boiler thumbnails
    "boiler-coal",
    "boiler-biomass",
    "boiler-gasoil",
    "boiler-thermal",
    "boiler-steam-gen",
    "boiler-horizontal-coal",
    "boiler-whr",
    "boiler-chain-grate",
    "boiler-combo3",
    "boiler-burners",
  ] as const;
  const productOptionIdxs = productOptionKeys
    .map((k) => products.findIndex((p) => p.key === k))
    .filter((i) => i >= 0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex flex-col">
      {/* HERO (full viewport) slider */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6">
        {/* Slider background confined to hero only */}
        <div className="absolute inset-0">
        {slides.map((s, i) => (
          <Image
            key={s.src + i}
            src={s.src}
            alt="Hero slide"
            fill
            priority={i === 0}
            className="object-cover transition-transform duration-700"
            style={{ transform: `translateX(${(i - index) * 100}%)` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        </div>

        <main className="relative z-10 text-center max-w-3xl text-white">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{slides[index].title}</h5>
        <p className="mt-4 text-lg sm:text-xl opacity-90">{slides[index].description}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${index === i ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </main>
      </section>

      {/* Stats section ,  decades of industry development*/}
      <section className="relative z-10 w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/industry.jpg" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>
        <div className="relative mx-auto max-w-6xl h-full px-6 py-8 text-white flex flex-col justify-center transform -translate-y-12 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{t("stats_heading")}</h3>
          <p className="mt-4 max-w-3xl text-sm sm:text-base opacity-90">{t("home_stats_desc")}</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold">3000<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">{t("stats_cases")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">{t("stats_patents")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10<span className="align-super text-sm">+</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">{t("stats_governance")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">60<span className="align-super text-sm">yrs</span></div>
              <div className="mt-1 text-xs sm:text-sm opacity-90">{t("stats_expertise")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product highlight section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <Image src="/grey-2.jpg" alt="Section background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 pt-8 md:py-8 grid gap-8 md:grid-cols-2 items-center text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{products[activeProductIdx].name}</h3>
            <p className="mt-4 opacity-90">{products[activeProductIdx].blurb}</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {(products[activeProductIdx].stats || []).map((s) => (
                <div key={s.label} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="opacity-80">{t(
                    s.label === "Nominal area (m²)"
                      ? "product_stat_nominal_area"
                      : s.label === "Pore size"
                      ? "product_stat_pore_size"
                      : s.label === "Energy"
                      ? "product_stat_energy"
                      : s.label
                  )}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Link href={products[activeProductIdx].href as string} className="inline-flex items-center rounded-full bg-white px-5 py-2 text-black text-sm font-medium hover:bg-gray-200">{t("cta_learn_more")}</Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-64 sm:h-80 md:h-[420px] md:max-h-[420px]">
              <Image src={products[activeProductIdx].image} alt={products[activeProductIdx].name} fill unoptimized className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>
        </div>

        <div className="z-10 inset-x-0 md:absolute md:bottom-20 px-6 mt-6 md:mt-0">
          <div className="mx-auto max-w-6xl flex items-center gap-6 overflow-x-auto text-white rounded-xl bg-black/30 backdrop-blur p-3 md:bg-transparent md:p-0">
            {productOptionIdxs.map((idx) => {
              const p = products[idx];
              const isActive = idx === activeProductIdx;
              return (
                <div key={p.key} className="flex flex-col items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveProductIdx(idx)}
                    onMouseEnter={() => setActiveProductIdx(idx)}
                    onFocus={() => setActiveProductIdx(idx)}
                    className={`group relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full overflow-hidden border ${
                      isActive ? "border-white" : "border-white/40"
                    }`}
                    aria-label={`View ${p.name}`}
                  >
                    <Image src={p.image} alt={p.name} fill unoptimized className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <div className="text-[10px] sm:text-xs text-white text-center leading-tight">{formatName(p.name)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fields grid section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/grey.jpg" alt="Fields background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-10 text-white flex flex-col">
          {/* <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Application fields</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-auto mb-auto">
            {[
              { name: t("fields_leachate"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e660a252-e2ac-4d08-a0af-84fb9753118a.png", href: "/application-cases/leachate-field" },
              { name: t("fields_municipal"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ee7a5cb-15ab-4c87-a960-fbb641c4a066.png" ,href: "/application-cases/municipal-sector"},
              { name: t("fields_printing"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/18155a6f-5bac-4196-b0c2-2c2f312157e5.png_366xaf.png" ,href: "/application-cases/printing-dyeing-field"},
              { name: t("fields_drinking"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/88e35543-64c8-46dd-b8f0-16f4b18dbbbd.png_366xaf.png" ,href: "/application-cases/drinking-water-field"},
              { name: t("fields_more"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/4eecc184-9ec7-4631-a12c-ead0c9bde1e4.png_366xaf.png" ,href: "/application-cases/more-areas"},
              { name: t("fields_coal"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e1be20e3-953e-4a97-b85a-25847de3fd1a.png" ,href: "/application-cases/coal-chemical-petrochemical"},
              { name: t("fields_electronic"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fc08062e-4b72-4811-807d-4686a7622c3b.png" ,href: "/application-cases/electronic-electroplating-field"},
              { name: t("fields_steel"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/f512574b-4223-43d7-9019-6d6ba4b35d30.png" ,href: "/application-cases/steel-nonferrous-metals"},
            ].map((f) => (
              <div key={f.name} className="group relative rounded-xl overflow-hidden shadow-md ring-1 ring-white/10 transition-transform duration-300 hover:shadow-xl hover:ring-white/40 transform hover:-translate-y-1">
                <div className="relative h-40 sm:h-48 md:h-56 w-full">
                  <Image src={f.image} alt={f.name} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-lg sm:text-xl font-semibold">{f.name}</div>
                  <Link href={f.href} className="mt-3 inline-flex items-center rounded-full bg-white/90 text-black text-xs sm:text-sm px-3 py-1.5 hover:bg-white transition-colors">learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/grey-3.jpg" alt="News background" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-10 text-slate-900 flex flex-col">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-white">{t("news_center_title")}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 flex-1">
            {/* Left: Featured slider placeholder */}
            <div className="relative rounded-xl overflow-hidden shadow ring-1 ring-black/10 bg-white/80">
              <Image src="/news-2.jpg" alt="Featured" fill className="object-cover opacity-90" />
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="text-sm uppercase tracking-wide">{t("featured")}</div>
                <div className="mt-2 text-lg sm:text-xl font-semibold">{t("news_featured_title")}</div>
              </div>
            </div>

            {/* Right: List */}
            <div className="flex flex-col gap-4">
              {[
                { date: "2025-04-25", title: t("news1_title"), excerpt: t("news1_excerpt") },
                { date: "2025-03-14", title: t("news2_title"), excerpt: t("news2_excerpt") },
                { date: "2025-03-07", title: t("news3_title"), excerpt: t("news3_excerpt") },
                { date: "2025-02-01", title: t("news4_title"), excerpt: t("news4_excerpt") },
              ].map((n) => (
                <Link key={n.title} href="#" className="group relative grid grid-cols-[auto_1fr] gap-4 items-start rounded-xl bg-black/90 ring-1 ring-black/10 p-4 hover:bg-white transition-colors">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white text-black text-xs group-hover:text-white group-hover:bg-black leading-tight">
                    <div>{n.date.split("-")[1]}</div>
                    <div className="text-[10px]">{n.date.split("-")[0]}</div>
                  </div>
                  <div>
                    <div className="font-medium text-white group-hover:text-black">{n.title}</div>
                    <div className="mt-1 text-sm text-white group-hover:text-black line-clamp-2">{n.excerpt}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
    
  </div>
  );
}
