import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const titleVariants = cva("", {
  variants: {
    variant: {
      default: "text-cyan",
    },
    size: {
      default: "text-xl",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    weight: {
      default: "font-bold",
      normal: "font-normal",
      medium: "font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
  },
});

export type TitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.ButtonHTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants>;

export const Title = ({
  className,
  as,
  variant,
  size,
  weight,
  ...props
}: TitleProps) => {
  const Comp = as || "h1";
  return (
    <Comp
      className={cn(titleVariants({ variant, size, weight }), className)}
      {...props}
    />
  );
};
