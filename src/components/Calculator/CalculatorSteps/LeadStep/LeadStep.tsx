import { CalculatorData, StoredData, UserData } from "@/types";
import { useForm } from "react-hook-form";
import { LeadInput } from "./LeadInput/LeadInput";
import styles from "./leadStep.module.scss";
import { postData } from "@/connectivities";
import { calculateSavings } from "@/formUtils";
import { useId } from "react";
import { Button } from "@/components/ui/buttons/Button";
import { useSteps } from "@/StepContext";

type LeadStepProps = {
  calculatorData: CalculatorData;
};

export const LeadStep = ({ calculatorData }: LeadStepProps) => {
  const randomId = useId();
  const { onNext } = useSteps();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserData>();

  if (!calculatorData.roofSize || !calculatorData.monthlyBill) {
    return <></>;
  }

  const {
    annualSavings,
    monthlySavings,
    co2ReductionTons,
    co2ReductionPercentage,
    equivalentTrees,
  } = calculateSavings({
    roofSize: calculatorData.roofSize,
    monthlyBill: calculatorData.monthlyBill,
  });

  const onSubmit = (userData: UserData) => {
    const dataToPost: StoredData = {
      userData,
      orderId: randomId,
      calculatorData: {
        ...calculatorData,
        savingsData: {
          annualSavings,
          monthlySavings,
          co2ReductionTons,
          co2ReductionPercentage,
          equivalentTrees,
        },
      },
    };
    postData(dataToPost)
      .then(() => {
        onNext();
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.leadStep}>
      <h5>Submit your personal info</h5>
      <div className={styles.inputsContainer}>
        <LeadInput
          type="text"
          register={register}
          errors={errors}
          id="name"
          required={true}
          labelText="Name"
        />
        <LeadInput
          type="email"
          register={register}
          errors={errors}
          id="email"
          required={true}
          labelText="Email"
        />
        <LeadInput
          type="tel"
          register={register}
          errors={errors}
          id="phone"
          required={true}
          labelText="Phone"
        />
        <LeadInput
          type="text"
          register={register}
          errors={errors}
          id="postalCode"
          required={true}
          labelText="Postal code"
        />
      </div>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};
