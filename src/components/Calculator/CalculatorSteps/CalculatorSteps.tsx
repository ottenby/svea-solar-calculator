import { CalculatorData } from "@/types";
import { BillStep } from "./BillStep/BillStep";
import { RoofStep } from "./RoofStep/RoofStep";
import { ResultsStep } from "./ResultsStep/ResultsStep";
import { LeadStep } from "./LeadStep/LeadStep";
import { SuccessStep } from "./SuccessStep/SuccessStep";
import styles from "./calculatorSteps.module.scss";
import { useSteps } from "@/StepContext";

type CalculatorStepsProps = {
  calculatorData: CalculatorData;
  setCalculatorData: (data: CalculatorData) => void;
};

export const CalculatorSteps = ({
  calculatorData,
  setCalculatorData,
}: CalculatorStepsProps) => {
  const { currentStep } = useSteps();

  return (
    <div className={styles.calculatorSteps}>
      {currentStep.id === "bill" && (
        <BillStep data={calculatorData} setData={setCalculatorData} />
      )}
      {currentStep.id === "roof" && (
        <RoofStep data={calculatorData} setData={setCalculatorData} />
      )}
      {currentStep.id === "results" && <ResultsStep data={calculatorData} />}
      {currentStep.id === "lead" && (
        <LeadStep calculatorData={calculatorData} />
      )}
      {currentStep.id === "success" && <SuccessStep />}
    </div>
  );
};
