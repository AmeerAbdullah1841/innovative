"use client";
import ProductDetail from "@/components/ProductDetail";

export default function ThreeInOneComboSystemPage() {
  return (
    <ProductDetail
      titleKey="boiler_combo3_title"
      images={["/combo-1.jpg", "/combo-2.jpg", "/combo-3.jpg"]}
      descriptionKey="boiler_combo3_desc"
      specs={[
        { titleKey: "prod_specs_equipment", itemKeys: [
          "combo_eq_thermo_heater",
          "combo_eq_whr_boiler",
          "combo_eq_quick_steam",
          "combo_eq_economizer"
        ]}
      ]}
    />
  );
}


