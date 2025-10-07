"use client";
import ProductDetail from "@/components/ProductDetail";

export default function ThermalOilHeaterPage() {
  return (
    <ProductDetail
      titleKey="boiler_thermal_oil_title"
      images={["/heater-1.jpg", "/heater-2.jpg", "/heater-3.jpg"]}
      descriptionKey="boiler_thermal_oil_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "thermal_type_horizontal",
          "thermal_type_vertical",
          "thermal_type_grate",
          "thermal_type_fixed_bed",
          "thermal_type_oil_gas"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["thermal_capacity_range"] },
        { titleKey: "prod_specs_fuel", itemKeys: [
          "thermal_fuel_coal",
          "thermal_fuel_biomass",
          "thermal_fuel_natural_gas",
          "thermal_fuel_light_oil",
          "thermal_fuel_heavy_oil",
          "thermal_fuel_multi"
        ]},
        { titleKey: "prod_specs_features", itemKeys: [
          "thermal_feat_high_eff",
          "thermal_feat_install_flex",
          "thermal_feat_min_maint",
          "thermal_feat_lower_costs",
          "thermal_feat_less_manpower",
          "thermal_feat_compact",
          "thermal_feat_fully_auto"
        ]}
      ]}
    />
  );
}


