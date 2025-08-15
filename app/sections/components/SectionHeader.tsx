import { Heading, ProgressBar, Prose } from "@/app/components/Index";
import Count from "./Count";

const SectionHeader = ({
  title,
  details,
  total,
  numberCompleted,
}: {
  title: string;
  details: string;
  total: number;
  numberCompleted: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-center justify-start">
          <Heading>{title}</Heading>
          <Count completed={numberCompleted} total={total} />
        </div>
        <Prose>{details}</Prose>
      </div>
      <ProgressBar completed={numberCompleted} total={total} />
    </div>
  );
};

export default SectionHeader;
