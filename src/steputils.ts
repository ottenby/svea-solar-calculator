import { CalculatorData, Step } from "./types";

export const steps: Step[] = [
  { name: "Bill step", id: "bill" },
  { name: "Roof step", id: "roof" },
  { name: "Results", id: "results" },
  { name: "Lead", id: "lead" },
  { name: "Success", id: "success" },
];

export const nextStepIsDisabled = (
  currentStep: Step,
  data: CalculatorData
): boolean => {
  if (currentStep.id === "bill") {
    if (data.monthlyBill === undefined) {
      return true;
    }
  } else if (currentStep.id === "roof") {
    if (!data.roofSize || data.monthlyBill === 0) {
      return true;
    }
  } else if (currentStep.id === "results") {
    if (data.monthlyBill === 0 || !data.roofSize) {
      return false;
    }
  } else if (currentStep.id === "lead") {
    if (!data.savingsData) {
      return true;
    }
  } else {
    return false;
  }
  return false;
};
