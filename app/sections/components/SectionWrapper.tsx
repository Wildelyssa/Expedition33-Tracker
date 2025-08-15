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
    <div className="p-8 rounded-md flex flex-col gap-4 bg-dark-gray/75">
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
