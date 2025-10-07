"use client";
import ProductDetail from "@/components/ProductDetail";

export default function ChainGrateBoilerPage() {
  return (
    <ProductDetail
      titleKey="boiler_chain_grate_title"
      images={["/fuel-1.jpg", "/fuel-2.jpg", "/fuel-3.jpg"]}
      descriptionKey="boiler_chain_grate_desc"
      specs={[
        { titleKey: "prod_specs_fuel", itemKeys: [
          "chain_fuel_coal",
          "chain_fuel_wood_chips",
          "chain_fuel_corn_cob",
          "chain_fuel_mustard",
          "chain_fuel_wheat_straw",
          "chain_fuel_rice_straw",
          "chain_fuel_sugar_trash",
          "chain_fuel_bagasse",
          "chain_fuel_sugar_leaves",
          "chain_fuel_cotton_stalks",
          "chain_fuel_pellets"
        ]}
      ]}
    />
  );
}


