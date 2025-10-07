"use client";
import ProductDetail from "@/components/ProductDetail";

export default function BurnersPage() {
  return (
    <ProductDetail
      titleKey="boiler_burners_title"
      images={["/burner-1.jpg", "/burner-2.jpg", "/burner-3.jpg"]}
      descriptionKey="boiler_burners_desc"
      specs={[
        { titleKey: "prod_specs_types", itemKeys: [
          "burners_type_gas",
          "burners_type_light_oil",
          "burners_type_heavy_oil",
          "burners_type_biomass",
          "burners_type_dual_fuel",
          "burners_type_process",
          "burners_type_duct",
          "burners_type_industrial"
        ]},
        { titleKey: "prod_specs_features", itemKeys: [
          "burners_feat_economical",
          "burners_feat_turn_down",
          "burners_feat_easy_maint",
          "burners_feat_fully_auto",
          "burners_feat_low_emission",
          "burners_feat_automation",
          "burners_feat_high_eff",
          "burners_feat_world_components",
          "burners_feat_industries",
          "burners_feat_service"
        ]}
      ]}
    />
  );
}


