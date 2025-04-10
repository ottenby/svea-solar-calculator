"use client";

import { useState } from "react";
import { ProgressIndicator } from "./ProgressIndicator/ProgressIndicator";
import styles from "./calculator.module.scss";
import { CalculatorData } from "@/types";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { CalculatorSteps } from "./CalculatorSteps/CalculatorSteps";

export const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({});

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>Solar Savings Calculator</h1>
      <ProgressIndicator />
      <CalculatorSteps
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
      />
      <NavigationButtons data={calculatorData} />
    </div>
  );
};
