import { CalculatorData, RoofSize } from "@/types";
import styles from "./RoofStep.module.scss";
import { Button } from "@/components/ui/buttons/Button";
import { useSteps } from "@/StepContext";

interface RoofStepProps {
  data: CalculatorData;
  setData: (data: CalculatorData) => void;
}

export const RoofStep = ({ data, setData }: RoofStepProps) => {
  const { onNext } = useSteps();
  const roofSizes: { value: RoofSize; label: string; description: string }[] = [
    { value: "small", label: "Small", description: "10m² (10-15 panels)" },
    { value: "medium", label: "Medium", description: "20m² (20-25 panels)" },
    { value: "large", label: "Large", description: "30m² (30-35 panels)" },
  ];

  return (
    <div className={styles.roofStep}>
      <h5>Submit your roof size</h5>
      <div className={styles.roofOptions}>
        {roofSizes.map((roofSize, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`${roofSize.value}-radio-button`}
              name="roof-size"
              checked={data.roofSize === roofSize.value}
              value={roofSize.value}
              onChange={() => {
                setData({
                  ...data,
                  roofSize: roofSize.value,
                });
              }}
            />
            <label
              htmlFor={`${roofSize.value}-radio-button`}
            >{`${roofSize.label} ${roofSize.description}`}</label>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        disabled={!data.roofSize}
        type="button"
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  );
};
