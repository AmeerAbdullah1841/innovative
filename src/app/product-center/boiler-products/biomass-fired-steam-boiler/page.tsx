"use client";
import ProductDetail from "@/components/ProductDetail";

export default function BiomassFiredSteamBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_biomass_title"
      images={["/biomass-1.jpg", "/biomass-2.jpg", "/bimass-3.jpg"]}
      descriptionKey="boiler_biomass_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "biomass_type_szl",
          "biomass_type_dzl"
        ]},
        { titleKey: "prod_specs_fuel", itemKeys: [
          "biomass_fuel_wood_chips",
          "biomass_fuel_corn_cob",
          "biomass_fuel_mustard",
          "biomass_fuel_wheat_straw",
          "biomass_fuel_rice_straw",
          "biomass_fuel_sugar_trash",
          "biomass_fuel_coconut_shell",
          "biomass_fuel_groundnut_husk",
          "biomass_fuel_cotton_stalks",
          "biomass_fuel_pellets"
        ]},
        { titleKey: "prod_specs_capacity", itemKeys: ["biomass_capacity_range"] },
        { titleKey: "prod_specs_features", itemKeys: [
          "biomass_feat_cost_saving",
          "biomass_feat_env",
          "biomass_feat_better_combustion",
          "biomass_feat_easy_maint"
        ]},
        { titleKey: "prod_specs_types", itemKeys: [
          "biomass_firing_chain",
          "biomass_firing_step",
          "biomass_firing_fixed"
        ]}
      ]}
    />
  );
}


