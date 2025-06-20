import { Heading, Prose } from "@/app/components/Index";
import Count from "./Count";

const SectionHeader = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <div className="flex flex-row gap-1">
          <Heading>{title}</Heading>
          <Count completed={4} total={total} />
        </div>

        <Prose>{details}</Prose>
      </div>
      {/* <Progress /> */}
    </div>
  );
};

export default SectionHeader;
