import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { IconProps } from "../Icons/Index";
import clsx from "clsx";
import { cn } from "@/app/lib/utils";
// to do=> decide on a design for buttons and style
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm cursor-pointer font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:hover:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-600 hover:bg-gold-500 hover:slate-800 hover:ring-1 hover:ring-offset-black hover:ring-offset-2 shadow-gray text-black py-2 px-4 rounded inline-flex items-center gap-x-2",
        tabs: "border border-gold-600/50 bg-dark-gray hover:dark-grey/80 hover:ring-1 hover:ring-offset-black  shadow-gray text-gold-500 py-2 px-4 rounded inline-flex items-center gap-x-2",
      },

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ComponentType<IconProps>;
  endIcon?: React.ComponentType<IconProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      startIcon: StartIcon,
      endIcon: EndIcon,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    let iconClasses;

    if (StartIcon || EndIcon) {
      iconClasses = clsx(
        "flex-shrink-0",
        size === "sm" && "h-[13px] w-[13px]",
        size === "lg" && "h-[20px] w-[20px]"
      );
    }
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {" "}
        <>
          {StartIcon && <StartIcon className={iconClasses} />}
          {children}
          {EndIcon && <EndIcon className={iconClasses} />}
        </>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
