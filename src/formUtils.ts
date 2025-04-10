import { RoofSize } from "./types";

interface CalculatorResult {
  annualSavings: number;
  monthlySavings: number;
  co2ReductionTons: number;
  co2ReductionPercentage: number;
  equivalentTrees: number;
  equivalentCars: number;
}

export const calculateSavings = (data: {
  roofSize: RoofSize;
  monthlyBill: number;
}): CalculatorResult => {
  const PANEL_YIELD = 350; // kWh per panel annually
  const CO2_FACTOR = 0.4; // kg CO2 per kWh
  const SEK_PER_KWH = 1; // Average electricity price in SEK

  const panelCounts = {
    small: 12,
    medium: 22,
    large: 32,
  };

  const annualConsumption = data.monthlyBill * 12;
  const annualProduction = panelCounts[data.roofSize] * PANEL_YIELD;

  // Only count savings up to actual consumption (excess production isn't saved)
  const annualSavingsKWh = Math.min(annualProduction, annualConsumption);
  const annualSavingsSEK = annualSavingsKWh * SEK_PER_KWH;

  const co2ReductionKg = annualProduction * CO2_FACTOR;
  const currentAnnualCO2 = annualConsumption * CO2_FACTOR;

  return {
    annualSavings: annualSavingsSEK,
    monthlySavings: annualSavingsSEK / 12,
    co2ReductionTons: co2ReductionKg / 1000,
    co2ReductionPercentage: (co2ReductionKg / currentAnnualCO2) * 100,
    equivalentTrees: Math.round((co2ReductionKg / 1000) * 5), // ~5 trees sequester 1 ton CO2/year
    equivalentCars: Math.round(co2ReductionKg / 1000 / 2), // ~2 tons per car per year
  };
};
