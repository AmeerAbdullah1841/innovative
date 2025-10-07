"use client";
import ProductDetail from "@/components/ProductDetail";

export default function HotWaterGeneratorPage() {
  return (
    <ProductDetail
      titleKey="boiler_hot_water_title"
      images={["/water-1.jpg", "/water-2.jpg", "/water-3.jpg"]}
      descriptionKey="boiler_hot_water_desc"
      specs={[]}
    />
  );
}


