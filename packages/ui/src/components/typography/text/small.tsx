import { cn } from "@ui/src/lib/utils";
import { ComponentProps } from "react";

interface IPMedium extends ComponentProps<"p"> {}

export function PSmall({ children, className }: IPMedium) {
  return (
    <p
      className={cn(
        "font-manrope font-normal text-[14px] leading-[1.5]",
        className,
      )}
    >
      {children}
    </p>
  );
}
