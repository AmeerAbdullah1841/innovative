"use client";
import ProductDetail from "@/components/ProductDetail";

export default function CoalFiredSteamBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_coal_title"
      images={["/coal-1.jpg", "/coal-2.jpg", "/coal-3.jpg"]}
      descriptionKey="boiler_coal_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "coal_type_szl",
          "coal_type_dzl"
        ]},
        { titleKey: "prod_specs_types", itemKeys: [
          "coal_firing_chain",
          "coal_firing_fixed"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["coal_capacity_range"] },
        { titleKey: "prod_specs_features", itemKeys: [
          "coal_feat_cost_saving",
          "coal_feat_thermal_design",
          "coal_feat_wear_resistance",
          "coal_feat_large_furnace",
          "coal_feat_pak_coal",
          "coal_feat_easy_maint"
        ]},
        { titleKey: "prod_specs_fuel", itemKeys: [
          "coal_fuel_bituminous",
          "coal_fuel_size",
          "coal_fuel_ncv",
          "coal_fuel_sulphur"
        ]}
      ]}
    />
  );
}


