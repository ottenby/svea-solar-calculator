"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Step } from "./types";
import { steps } from "./steputils";

type StepContextType = {
  currentStep: Step;
  setCurrentStep: (currentStep: Step) => void;
  onNext: () => void;
  onBack: () => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

type StepProviderProps = {
  children: ReactNode;
};

export const StepProvider = ({ children }: StepProviderProps) => {
  const [currentStep, setCurrentStep] = useState<(typeof steps)[number]>(
    steps[0]
  );

  const onNext = () => {
    setCurrentStep((prev) => {
      const currentIndex = steps.indexOf(prev);
      return currentIndex < steps.length - 1 ? steps[currentIndex + 1] : prev;
    });
  };

  const onBack = () => {
    setCurrentStep((prev) => {
      const currentIndex = steps.indexOf(prev);
      return currentIndex > 0 ? steps[currentIndex - 1] : prev;
    });
  };

  return (
    <StepContext.Provider
      value={{ currentStep, setCurrentStep, onNext, onBack }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useSteps must be used within a StepProvider");
  }
  return context;
};
