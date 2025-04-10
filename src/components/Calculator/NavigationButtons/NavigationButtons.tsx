import { CalculatorData } from "@/types";
import styles from "./navigationButtons.module.scss";
import { nextStepIsDisabled } from "@/steputils";
import { LeftArrowIcon } from "@/components/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/components/icons/RightArrowIcon";
import { Button } from "@/components/ui/buttons/Button";
import { useSteps } from "@/StepContext";

type NavigationButtonsProps = {
  data: CalculatorData;
};

export const NavigationButtons = ({ data }: NavigationButtonsProps) => {
  const { onBack, onNext, currentStep } = useSteps();
  return (
    <div className={styles.navigationButtons}>
      <Button variant="tertiery" onClick={onBack}>
        <LeftArrowIcon />
      </Button>
      <Button
        variant="tertiery"
        disabled={nextStepIsDisabled(currentStep, data)}
        onClick={onNext}
      >
        <RightArrowIcon />
      </Button>
    </div>
  );
};
