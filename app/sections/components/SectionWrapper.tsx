import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
import { cn } from "@/app/lib/utils";

const SectionWrapper = ({
  children,
  title,
  details,
  total,
  containerClasses,
  numberCompleted,
}: {
  children: ReactNode;
  title: string;
  details: string;
  total: number;
  containerClasses?: string;
  numberCompleted: number;
}) => {
  return (
    <div className="p-4 rounded-md flex flex-col border border-yellow-500/40 gap-4 bg-black/90">
      <SectionHeader
        title={title}
        details={details}
        total={total}
        numberCompleted={numberCompleted}
      />
      <div className={cn("flex flex-col", containerClasses)}>{children}</div>
    </div>
  );
};

export default SectionWrapper;
