import { calculateSavings } from "@/formUtils";
import { CalculatorData } from "@/types";
import styles from "./resultsStep.module.scss";
import { Button } from "@/components/ui/buttons/Button";
import { useSteps } from "@/StepContext";

type ResultsStepProps = {
  data: CalculatorData;
};

export const ResultsStep = ({ data }: ResultsStepProps) => {
  const { onNext } = useSteps();
  if (!data.monthlyBill || !data.roofSize) {
    return <></>;
  }
  const {
    monthlySavings,
    co2ReductionTons,
    co2ReductionPercentage,
    equivalentTrees,
    annualSavings,
  } = calculateSavings({
    roofSize: data.roofSize,
    monthlyBill: data.monthlyBill,
  });

  return (
    <div className={styles.resultsStep}>
      <div className={styles.resultsContainer}>
        <h5>Your Estimated Savings</h5>
        <p>Monthly savings: {monthlySavings.toFixed(0)} SEK</p>
        <p>Yearly savings: {annualSavings.toFixed(0)} SEK</p>
      </div>
      <div className={styles.resultsContainer}>
        <h5>Environmental Impact</h5>
        <p>
          Yearly CO₂ reduction: {co2ReductionTons.toFixed(1)} tons (
          {co2ReductionPercentage.toFixed(0)}% reduction)
        </p>
        <p>Equivalent to planting {equivalentTrees} trees annually</p>
      </div>

      <Button onClick={onNext} variant="primary">
        Continue
      </Button>
    </div>
  );
};
