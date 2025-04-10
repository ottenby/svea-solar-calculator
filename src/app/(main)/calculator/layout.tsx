import styles from "./calculatorLayout.module.scss";

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.calculatorLayout}>{children}</div>;
}
