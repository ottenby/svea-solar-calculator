import { UserData } from "@/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./leadInput.module.scss";

type LeadInputProps = {
  required: boolean;
  id: "name" | "email" | "phone" | "postalCode";
  labelText: string;
  register: UseFormRegister<UserData>;
  errors: FieldErrors<UserData>;
  type: "number" | "text" | "email" | "tel";
};

export const LeadInput = ({
  required,
  id,
  labelText,
  register,
  errors,
  type,
}: LeadInputProps) => {
  return (
    <div className={styles.leadInput}>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} {...register(id, { required: required })} />
      {errors[id] && (
        <span className={styles.error}>This field is required</span>
      )}
    </div>
  );
};
