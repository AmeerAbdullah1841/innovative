"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

const products = [
  { key: "pc_prod_boiler_coal", name: "Coal‑fired steam boiler", href: "/product-center/boiler-products/coal-fired-steam-boiler", img: "/coal-2.jpg" },
  { key: "pc_prod_boiler_biomass", name: "Biomass‑fired steam boiler", href: "/product-center/boiler-products/biomass-fired-steam-boiler", img: "/biomass-1.jpg" },
  { key: "pc_prod_boiler_gasoil", name: "Gas & oil‑fired steam boiler", href: "/product-center/boiler-products/gas-oil-fired-steam-boiler", img: "/thermal-2.jpg" },
  { key: "pc_prod_boiler_thermal_oil_heater", name: "Thermal oil heater", href: "/product-center/boiler-products/thermal-oil-heater", img: "/heater-1.jpg" },
  { key: "pc_prod_boiler_steam_generator", name: "Steam generator", href: "/product-center/boiler-products/steam-generator", img: "/steam-1.jpg" },
  { key: "pc_prod_boiler_horizontal_coal", name: "Horizontal coal steam boiler", href: "/product-center/boiler-products/horizontal-coal-steam-boiler", img: "/bubbling-1.png" },
  { key: "pc_prod_boiler_whr", name: "Waste heat recovery steam boiler", href: "/product-center/boiler-products/waste-heat-recovery-steam-boiler", img: "/waste-1.jpg" },
  { key: "pc_prod_boiler_chain_grate", name: "Chain grate coal/oil boiler", href: "/product-center/boiler-products/chain-grate-coal-oil-boiler", img: "/fuel-1.jpg" },
  { key: "pc_prod_boiler_combo3", name: "3‑in‑one combo system", href: "/product-center/boiler-products/three-in-one-combo-system", img: "/combo-2.jpg" },
  { key: "pc_prod_boiler_burners", name: "Burners", href: "/product-center/boiler-products/burners", img: "/burner-1.jpg" },
];

export default function BoilerProductsPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("pc_cat_boilers")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link key={p.href} href={p.href} className="group block rounded-lg overflow-hidden bg-white shadow hover:shadow-lg">
            <div className="relative h-40 w-full">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-3 text-sm font-medium">{t(p.key)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


