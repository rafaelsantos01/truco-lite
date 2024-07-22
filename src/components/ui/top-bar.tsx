import type { ClassValue } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const topBarVariant = cva(
  "flex flex-none px-4 items-center justify-between h-[52px] relative",
  {
    variants: {
      color: {
        default: "bg-white text-neutral-900",
        cyan: "bg-cyan-500 text-white",
        ghost: "bg-transparent text-white",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

type TopBarProps = {
  className?: ClassValue;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof topBarVariant>;

export const TopBar = ({ className, color, ...props }: TopBarProps) => {
  return (
    <header className={cn(topBarVariant({ color, className }))} {...props} />
  );
};

type TopSiderProps = {
  className?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;

export const TopSider = ({ className, ...props }: TopSiderProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props} />
  );
};

type TopRightSider = {
  className?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;
export const TopRightSider = ({ className, ...props }: TopRightSider) => {
  return (
    <div
      className={cn("flex justify-end items-center gap-2", className)}
      {...props}
    />
  );
};

type TopCenterProps = {
  children?: ReactNode;
  className?: ClassValue;
} & HTMLAttributes<HTMLDivElement>;

export const TopCenter = ({
  children,
  className,
  ...props
}: TopCenterProps) => (
  <div
    className={cn(
      "absolute inset-0 pointer-events-none flex items-center justify-center",
      className
    )}
    {...props}
  >
    <div className="pointer-events-auto flex items-center justify-center gap-3">
      {children}
    </div>
  </div>
);
