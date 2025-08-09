import { Heading, Prose } from "@/app/components/Index";
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
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <div className="flex flex-row gap-1">
          <Heading>{title}</Heading>
          <Count completed={numberCompleted} total={total} />
        </div>

        <Prose>{details}</Prose>
      </div>
    </div>
  );
};

export default SectionHeader;
