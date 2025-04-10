import { CalculatorData } from "@/types";
import { ChangeEvent } from "react";
import styles from "./billStep.module.scss";
import { Button } from "@/components/ui/buttons/Button";
import { useSteps } from "@/StepContext";

type BillStepProps = {
  data: CalculatorData;
  setData: (data: CalculatorData) => void;
};

export const BillStep = ({ data, setData }: BillStepProps) => {
  const { onNext } = useSteps();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      monthlyBill: Number(e.target.value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.billStep}>
      <h5>Submit your Monthly Energy Bill</h5>
      <div className={styles.inputContainer}>
        <label htmlFor="monthly-bill-input">Average monthly bill (SEK):</label>
        <input
          id="monthly-bill-input"
          type="number"
          value={data.monthlyBill || ""}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <Button disabled={!data.monthlyBill} variant="primary" type="submit">
        Continue
      </Button>
    </form>
  );
};
