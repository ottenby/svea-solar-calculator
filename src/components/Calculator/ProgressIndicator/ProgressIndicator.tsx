import { steps } from "@/steputils";
import styles from "./progressIndicator.module.scss";
import { useSteps } from "@/StepContext";

export const ProgressIndicator = () => {
  const { currentStep } = useSteps();

  return (
    <ol className={styles.progressIndicator}>
      {steps.map((step) => (
        <li
          key={step.id}
          className={`${styles.progressListItem} ${
            step.id === currentStep.id && styles.progressListItemCurrent
          }`}
        >
          {step.name}
        </li>
      ))}
    </ol>
  );
};
