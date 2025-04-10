import { Calculator } from "@/components/Calculator/Calculator";
import { StepProvider } from "@/StepContext";

export default function CalculatorPage() {
  return (
    <StepProvider>
      <Calculator />
    </StepProvider>
  );
}
