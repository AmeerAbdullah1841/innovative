"use client";
import ProductDetail from "@/components/ProductDetail";

export default function WasteHeatRecoverySteamBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_whr_title"
      images={["/waste-1.jpg", "/waste-2.jpg", "/waste-3.jpg"]}
      descriptionKey="boiler_whr_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "whr_type_smoke_tube",
          "whr_type_water_tube",
          "whr_type_simplex",
          "whr_type_duplex",
          "whr_type_triplex"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["whr_capacity_range"] },
        { titleKey: "prod_specs_fuel", itemKeys: ["whr_fuel_waste_flue"] },
        { titleKey: "prod_specs_features", itemKeys: [
          "whr_feat_reduced_pollution",
          "whr_feat_waste_reduction",
          "whr_feat_high_eff",
          "whr_feat_plant_eff",
          "whr_feat_reduced_cost",
          "whr_feat_resource_cons",
          "whr_feat_maintenance_free"
        ]}
      ]}
    />
  );
}


