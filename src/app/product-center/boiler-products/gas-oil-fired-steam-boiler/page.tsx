"use client";
import ProductDetail from "@/components/ProductDetail";

export default function GasOilFiredSteamBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_gasoil_title"
      images={["/thermal-1.jpg", "/thermal-2.jpg", "/thermal-3.jpg"]}
      descriptionKey="boiler_gasoil_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "gasoil_type_wet_back",
          "gasoil_type_dry_back",
          "gasoil_type_fire_tube",
          "gasoil_type_water_tube",
          "gasoil_type_a",
          "gasoil_type_d",
          "gasoil_type_o"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["gasoil_capacity_range"] },
        { titleKey: "prod_specs_fuel", itemKeys: [
          "gasoil_fuel_natural_gas",
          "gasoil_fuel_light_oil",
          "gasoil_fuel_heavy_oil",
          "gasoil_fuel_multi"
        ]},
        { titleKey: "prod_specs_features", itemKeys: [
          "gasoil_feat_high_eff",
          "gasoil_feat_low_maint",
          "gasoil_feat_easy_install",
          "gasoil_feat_less_manpower",
          "gasoil_feat_compact",
          "gasoil_feat_fully_auto"
        ]}
      ]}
    />
  );
}


