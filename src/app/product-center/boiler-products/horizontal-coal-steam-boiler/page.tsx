"use client";
import ProductDetail from "@/components/ProductDetail";

export default function HorizontalCoalSteamBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_horizontal_coal_title"
      images={["/bubbling-1.png", "/bubbling-2.jpg", "/coal-3.jpg"]}
      descriptionKey="boiler_horizontal_coal_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "fbed_type_bubbling",
          "fbed_type_circulating"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["fbed_capacity_range"] },
        { titleKey: "prod_specs_fuel", itemKeys: [
          "fbed_fuel_pulverized_coal",
          "fbed_fuel_biomass",
          "fbed_fuel_solid",
          "fbed_fuel_multi"
        ]},
        { titleKey: "prod_specs_features", itemKeys: [
          "gasoil_feat_high_eff",
          "fbed_feat_no_moving",
          "fbed_feat_fuel_flex",
          "fbed_feat_reliable_bed",
          "fbed_feat_low_nox"
        ]}
      ]}
    />
  );
}


