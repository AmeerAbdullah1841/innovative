"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  bannerImage?: string;
  featured: boolean;
}

type Slide = { src: string; title: string; description: string };

export default function Home() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsIndex, setNewsIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [teamItemsPerView, setTeamItemsPerView] = useState(2);

  const slides: Slide[] = [
    { src: "/e1.jpg", title: t("hero_title_1"), description: t("hero_desc_1") },
    { src: "/i10.jpg", title: t("hero_title_2"), description: t("hero_desc_2") },
    { src: "/i2.jpg", title: t("hero_title_3"), description: t("hero_desc_3") },
    { src: "/i4.jpg", title: t("hero_title_4"), description: t("hero_desc_4") },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _formatName = (name: string) => {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeProductIdx, _setActiveProductIdx] = useState(2);
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _productOptionIdxs = productOptionKeys
    .map((k) => products.findIndex((p) => p.key === k))
    .filter((i) => i >= 0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1); // Mobile: 1 item
        setTeamItemsPerView(2); // Mobile: 2 team members
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet: 2 items
        setTeamItemsPerView(3); // Tablet: 3 team members
      } else {
        setItemsPerView(3); // Desktop: 3 items
        setTeamItemsPerView(5); // Desktop: 5 team members
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/admin/news", {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        // Check if response is OK
        if (!response.ok) {
          console.warn(`News API returned status ${response.status}`);
          setNews([]);
          return;
        }
        
        // Check content type
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("News API returned non-JSON response");
          setNews([]);
          return;
        }
        
        const data = await response.json();
        // Handle both array and object with news property
        const newsArray = Array.isArray(data) ? data : (data.news || []);
        setNews(newsArray);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Fallback to empty array if API fails
        setNews([]);
      } finally {
        setNewsLoading(false);
      }
    };
    fetchNews();
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
            unoptimized
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
          <Image src="/cr3.jpg" alt="Background" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-black-900/50" />
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
     
      {/* Fields grid section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/building.jpg" alt="Fields background" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl h-full px-6 py-10 text-white flex flex-col">
          {/* <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Application fields</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-auto mb-auto">
            {[
              { name: t("fields_construction"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e660a252-e2ac-4d08-a0af-84fb9753118a.png", href: "/application-cases/construction-engineering" },
              { name: t("fields_chemical"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ee7a5cb-15ab-4c87-a960-fbb641c4a066.png" ,href: "/application-cases/chemical-supply"},
              { name: t("fields_machinery"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/18155a6f-5bac-4196-b0c2-2c2f312157e5.png_366xaf.png" ,href: "/application-cases/machinery-equipment"},
              { name: t("fields_architecture"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/88e35543-64c8-46dd-b8f0-16f4b18dbbbd.png_366xaf.png" ,href: "/application-cases/architecture-designs"},
              { name: t("fields_import"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/4eecc184-9ec7-4631-a12c-ead0c9bde1e4.png_366xaf.png" ,href: "/application-cases/import-export"},
              { name: t("fields_trading"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/e1be20e3-953e-4a97-b85a-25847de3fd1a.png" ,href: "/application-cases/general-trading"},
              { name: t("fields_sustainability"), image: "https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/fc08062e-4b72-4811-807d-4686a7622c3b.png" ,href: "/application-cases/sustainability-esg"},
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
          <Image src="/news-2.jpg" alt="News background" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 py-6 sm:py-10 text-slate-900 flex flex-col">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 text-white text-center">{t("news_center_title")}</h3>
          
          {newsLoading ? (
            <div className="flex items-center justify-center flex-1">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-white mx-auto"></div>
                <p className="mt-4 text-white text-xs sm:text-sm">Loading news...</p>
              </div>
            </div>
          ) : news.length === 0 ? (
            <div className="flex items-center justify-center flex-1">
              <div className="text-center">
                <p className="text-white text-sm sm:text-base md:text-lg">No news articles available</p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              {/* News Carousel */}
              <div className="relative w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${newsIndex * (100 / itemsPerView)}%)` }}
                  >
                    {news.map((article) => (
                      <div
                        key={article.id}
                        className="w-full flex-shrink-0 px-2 sm:px-3 md:px-4"
                        style={{ 
                          minWidth: `${100 / itemsPerView}%`, 
                          maxWidth: `${100 / itemsPerView}%` 
                        }}
                      >
                        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                          {/* Banner Image */}
                          <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full">
                            {article.bannerImage ? (
                              <Image
                                src={article.bannerImage}
                                alt={article.title}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                            ) : (
                              <Image
                                src="/news-2.jpg"
                                alt={article.title}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                            )}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                              <span className="bg-red-600 text-white text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded uppercase">
                                News
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                            <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                              {new Date(article.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </div>
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                              {article.title}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600 line-clamp-3 sm:line-clamp-4 flex-1">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                {news.length > itemsPerView && (
                  <>
                    <button
                      onClick={() => {
                        const maxIndex = Math.ceil(news.length / itemsPerView) - 1;
                        setNewsIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
                      }}
                      className="absolute left-0 sm:left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-10"
                      aria-label="Previous news"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const maxIndex = Math.ceil(news.length / itemsPerView) - 1;
                        setNewsIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
                      }}
                      className="absolute right-0 sm:right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-10"
                      aria-label="Next news"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Carousel Indicators */}
              {news.length > itemsPerView && (
                <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
                  {Array.from({ length: Math.ceil(news.length / itemsPerView) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setNewsIndex(idx)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        newsIndex === idx ? 'bg-white w-6 sm:w-8' : 'bg-white/50 w-1.5 sm:w-2'
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="relative w-full min-h-screen overflow-hidden py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/arc1.jpg" alt="Leadership background" fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">
          {/* CEO Message */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* CEO Image */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/ceo.jpg"
                    alt="CEO"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* CEO Message Box */}
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative">
                <div className="absolute -left-4 top-12 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-white/95 border-b-[20px] border-b-transparent"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CEO&apos;s Message</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Innovative Integrated Solutions, we are committed to delivering excellence across all our business verticals. Our mission is to provide comprehensive solutions that drive sustainable growth and create lasting value for our clients. Through innovation, dedication, and a customer-centric approach, we continue to expand our reach and impact across construction, engineering, chemical supply, machinery, architecture, international trade, and sustainability initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Director Message */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Director Image */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-2 sm:ring-4 ring-white mx-auto sm:mx-0">
                  <Image
                    src="/director.jpg"
                    alt="Director"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Director Message Box */}
              <div className="flex-1 w-full bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative">
                {/* Arrow pointer - hidden on mobile, visible on desktop */}
                <div className="hidden lg:block absolute -right-4 top-12 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-white/95 border-b-[20px] border-b-transparent"></div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Director&apos;s Message</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our team&apos;s expertise spans multiple industries, enabling us to offer integrated solutions that address complex business challenges. We believe in building strong partnerships, fostering innovation, and maintaining the highest standards of quality and service. Together, we are shaping the future of business across diverse sectors, creating opportunities for growth and sustainable development.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members Carousel */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">Our Team</h3>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${teamIndex * (100 / teamItemsPerView)}%)` }}
                >
                  {[
                    { name: "", image: "/te1.jpg" },
                    { name: "", image: "/te2.jpg" },
                    { name: "", image: "/te3.jpg" },
                    { name: "", image: "/t4.jpg" },
                    { name: "", image: "/t5.jpg" },
                    { name: "", image: "/t6.jpg" },
                    { name: "", image: "/t7.jpg" },
                    { name: "", image: "/t8.jpg" },
                  ].map((member, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                      style={{ width: `${100 / teamItemsPerView}%`, minWidth: `${100 / teamItemsPerView}%` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg ring-2 sm:ring-3 md:ring-4 ring-white mb-2 sm:mb-3 md:mb-4 hover:scale-110 transition-transform">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">{member.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Carousel Navigation */}
              {8 > teamItemsPerView && (
                <>
                  <button
                    onClick={() => {
                      const maxIndex = 8 - teamItemsPerView;
                      setTeamIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
                    }}
                    className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-10"
                    aria-label="Previous team"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      const maxIndex = 8 - teamItemsPerView;
                      setTeamIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
                    }}
                    className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg transition-all z-10"
                    aria-label="Next team"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    {/* Footer */}
    
  </div>
  );
}
