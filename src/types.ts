export type RoofSize = "small" | "medium" | "large";

export type CalculatorData = {
  monthlyBill?: number;
  roofSize?: RoofSize;
  savingsData?: SavingsData;
};

export type SavingsData = {
  annualSavings: number;
  monthlySavings: number;
  co2ReductionTons: number;
  co2ReductionPercentage: number;
  equivalentTrees: number;
};

export type Step = {
  name: string;
  id: StepId;
};

export type StepId = "bill" | "roof" | "results" | "lead" | "success";

export type UserData = {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
};

export type StoredData = {
  calculatorData: CalculatorData;
  userData: UserData;
  orderId?: string;
};
