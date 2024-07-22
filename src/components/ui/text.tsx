import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-cyan",
      neutral: "text-neutral-500",
      danger: "text-red-600 flex itens-start px-1 ",
    },
    size: {
      default: "text-sm",
      base: "text-base",
    },
    weight: {
      default: "font-light",
      bold: "font-bold",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
  },
});

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

export const Text = ({ className, variant, weight, ...props }: TextProps) => {
  return (
    <p
      className={cn(textVariants({ variant, weight }), className)}
      {...props}
    />
  );
};
