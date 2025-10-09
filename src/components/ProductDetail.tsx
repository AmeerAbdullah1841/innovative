"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

type SpecSection = {
  titleKey: string;
  itemKeys: string[];
};

type Props = {
  titleKey: string;
  images: string[];
  descriptionKey: string;
  specs: SpecSection[];
  backgroundImage?: string;
};

export default function ProductDetail({ titleKey, images, descriptionKey, specs, backgroundImage = "/about.jpg" }: Props) {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative">
      {/* Full-page background (like POREFLON page) */}
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Background" fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">{t(titleKey)}</h1>

        {/* 1) Gallery */}
        <section className="mt-6 bg-black rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-black rounded" />
            <h2 className="text-lg font-semibold text-gray-900">{t("prod_gallery")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="relative h-48 w-full rounded-lg overflow-hidden ring-1 ring-gray-200">
                <Image src={src} alt={`${t(titleKey)} ${idx + 1}`} fill unoptimized className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* 2) Description */}
        <section className="mt-6 bg-black rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-white rounded" />
            <h2 className="text-lg font-semibold text-white">{t("prod_description")}</h2>
          </div>
          <div className="p-6">
            <p className="text-white leading-relaxed">{t(descriptionKey)}</p>
          </div>
        </section>

        {/* 3) Specs */}
        <section className="mt-6 bg-black rounded-2xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <div className="h-6 w-1.5 bg-white rounded" />
            <h2 className="text-lg font-semibold text-white">{t("prod_specs")}</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((s) => (
              <div key={s.titleKey} className="rounded-lg border border-gray-200 p-4 bg-white">
                <h3 className="text-black font-bold mb-2">{t(s.titleKey)}</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {s.itemKeys.map((k) => (
                    <li key={k}>{t(k)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}


