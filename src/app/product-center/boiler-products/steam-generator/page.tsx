"use client";
import ProductDetail from "@/components/ProductDetail";

export default function SteamGeneratorPage() {
  return (
    <ProductDetail
      titleKey="boiler_steam_gen_title"
      images={["/steam-1.jpg", "/steam-2.jpg", "/steam-3.jpg"]}
      descriptionKey="boiler_steam_gen_desc"
      specs={[
        {
          titleKey: "prod_specs_types",
          itemKeys: [
            "spec_steam_gen_type_horizontal",
            "spec_steam_gen_type_vertical",
            "spec_steam_gen_type_hot_oil",
          ],
        },
        {
          titleKey: "prod_specs_capacity",
          itemKeys: ["spec_steam_gen_capacity"],
        },
        {
          titleKey: "prod_specs_fuel",
          itemKeys: [
            "spec_fuel_natural_gas",
            "spec_fuel_light_oil",
            "spec_fuel_heavy_oil",
            "spec_fuel_multi",
          ],
        },
        {
          titleKey: "prod_specs_features",
          itemKeys: [
            "spec_feat_high_eff",
            "spec_feat_quick_start",
            "spec_feat_rapid_production",
            "spec_feat_min_maintenance",
            "spec_feat_lower_costs",
            "spec_feat_less_manpower",
            "spec_feat_compact",
            "spec_feat_fully_auto",
          ],
        },
      ]}
    />
  );
}


