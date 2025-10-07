"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function MicroporousAeratorPage() {
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
          <span className="opacity-80">{t("pc_cat_app")}</span>
          <span className="mx-2">›</span>
        <span className="text-white">{t("pc_prod_free_aeration")}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image src="https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/422a1add-d9d9-45d6-bf2f-baa42fae5a8e.png_1180xaf.png" alt="Microporous Aerator" fill unoptimized className="object-contain" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{t("pc_prod_free_aeration")}</h1>
            <p className="text-gray-300 leading-relaxed">{t("fa_desc")}</p>
          </div>
        </div>

        {/* Product features */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("product")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('fa_feat_1_title'), desc: t('fa_feat_1_desc') },
              { title: t('fa_feat_2_title'), desc: t('fa_feat_2_desc') },
              { title: t('fa_feat_3_title'), desc: t('fa_feat_3_desc') },
              { title: t('fa_feat_4_title'), desc: t('fa_feat_4_desc') },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="inline-flex items-center rounded bg-black text-white text-xs font-medium px-4 py-2 mb-2">{f.title}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product gallery */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("product")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <p className=" text-black">{t("fa_detail_text")}</p>
            {[
              'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/6ddda248-7b01-4fbb-ae9c-56d67c40882c.gif',
              'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/3fd45c44-bc2b-45f2-87c2-063ea81165e9.gif'
            ].map((src, i) => (
              <div key={i} className="relative w-full max-w-xl mx-auto" style={{ aspectRatio: '3 / 1' }}>
                <Image src={src} alt={`aerator product ${i+1}`} fill unoptimized className="object-contain" />
              </div>
            ))}
          </div>
        </section>


        {/* Product parameters table */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("fa_params")}</h2>
          </div>
          <div className="p-6 overflow-auto">
            <table className="min-w-full text-sm border border-gray-400">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">model</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑500L</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑750L</th>
                  <th className="px-3 py-2 text-left font-medium border border-gray-400">FA‑1000L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { k: t('fa_row1'), v1: 'Φ63×500', v2: 'Φ63×750', v3: 'Φ63×1000' },
                  { k: t('fa_row2'), v1: '≈2', v2: '≈3', v3: '≈4' },
                  { k: t('fa_row3'), v1: '35–43', v2: '35–43', v3: '35–43' },
                  { k: t('fa_row4'), v1: '0.3–1.0', v2: '0.3–1.0', v3: '0.3–1.0' },
                  { k: t('fa_row5'), v1: '≤2', v2: '≤2', v3: '≤2' },
                  { k: t('fa_row6'), v1: '1.2', v2: '1.2', v3: '1.2' },
                  { k: t('fa_row7'), v1: 'DN25 (Rc1")', v2: 'DN25 (Rc1")', v3: 'DN25 (Rc1")' },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-gray-50">
                    <td className="px-3 py-2 text-gray-800 border border-gray-400">{row.k}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v1}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v2}</td>
                    <td className="px-3 py-2 text-gray-700 border border-gray-400">{row.v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Post-table gallery with captions */}
        <section className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("fa_performance")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { title: t('fa_perf_1'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/0f179a14-21fd-4c7d-b92f-aab94df4706d.webp' },
              { title: t('fa_perf_2'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/b7603ae6-6b82-4b3a-844e-c9a0231aa505.webp' },
              { title: t('fa_perf_3'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/546649b6-4b13-4270-ba51-88e255d968d2.png' },
              { title: t('fa_perf_4'), img: 'https://omo-oss-image.thefastimg.com/portal-saas/new2024041015584165399/cms/image/7865173a-4750-4e77-9d96-e36324bf7975.png' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-3">
                <div className="text-xs font-medium text-gray-900 mb-2">{card.title}</div>
                <div className="relative w-full" style={{ aspectRatio: '3 / 1' }}>
                  <Image src={card.img} alt={card.title} fill unoptimized className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


