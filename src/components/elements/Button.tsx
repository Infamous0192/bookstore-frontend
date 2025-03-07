import styles from "@/styles/modules/Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "light";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "full";
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  size = "md",
  rounded = "md",
  color = "primary",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[`round-${rounded}`]} ${styles[size]} ${
        styles[color]
      } ${props.className}`}
    >
      {children}
    </button>
  );
};
