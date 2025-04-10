import { CalculatorData } from "@/types";
import { UseFormRegister } from "react-hook-form";

type RoofSizeRadioButtonProps = {
  size: "small" | "medium" | "large";
  currentRoofSize: "small" | "medium" | "large";
  register: UseFormRegister<CalculatorData>;
};

export const RoofSizeRadioButton = ({
  size,
  currentRoofSize,
  register,
}: RoofSizeRadioButtonProps) => {
  return (
    <label
      key={size}
      className={`roof-option ${currentRoofSize === size ? "selected" : ""}`}
    >
      <input
        type="radio"
        value={size}
        {...register("roofSize")}
        className="visually-hidden"
      />
      <div className="option-content">
        <h3>{size.charAt(0).toUpperCase() + size.slice(1)}</h3>
        <p>
          {size === "small"
            ? "10m² (10-15 panels)"
            : size === "medium"
            ? "20m² (20-25 panels)"
            : "30m² (30-35 panels)"}
        </p>
      </div>
    </label>
  );
};
