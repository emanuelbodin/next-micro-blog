import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-orange-800 text-white",
        secondary: "bg-gray-200 text-gray-900",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface Props extends VariantProps<typeof buttonStyles> {
  label: string;
  onClick: (e: any) => void;
}

export function Button({ intent, fullWidth, label, onClick }: Props) {
  return (
    <button className={buttonStyles({ intent, fullWidth })} onClick={onClick}>
      {label}
    </button>
  );
}
