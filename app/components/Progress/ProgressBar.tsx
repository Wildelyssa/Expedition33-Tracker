"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

interface Props {
  completed: number;
  total: number;
  className?: string;
  barClassName?: string;
  textClassName?: string;
  label?: string | React.ReactNode;
}

const ProgressBar = ({
  completed,
  total,
  className,
  barClassName,
  textClassName,
  label,
}: Props) => {
  return (
    <div
      className={cn(
        "to-card relative flex w-full items-center rounded-[7px] border border-black bg-gradient-to-b from-neutral-500 p-[1px]",
        className
      )}
    >
      <div className="w-full overflow-hidden rounded-[6px] bg-neutral-800">
        <div className="pointer-events-none absolute bottom-[1px] left-[1px] right-[1px] top-[1px] z-[2] rounded-[6px] border border-black" />
        <motion.div
          className={cn(
            "flex h-[24px] items-center justify-center rounded-br-[6px] rounded-tr-[6px] bg-gradient-to-b from-red-light to-red-dark",
            completed === 0 && "opacity-0",
            barClassName
          )}
          initial={{ width: 0 }}
          animate={{
            width: total !== 0 ? `${(completed / total) * 100}%` : 0,
          }}
          transition={{ duration: 0.5 }}
        />
        {total !== undefined && completed !== undefined && (
          <div
            className={cn(
              "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center gap-1 text-xs font-bold drop-shadow-[0_1px_1px_rgba(var(--color-black)/0.9)]",
              textClassName
            )}
          >
            <span className="whitespace-nowrap">
              {completed} / {total}
            </span>
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
