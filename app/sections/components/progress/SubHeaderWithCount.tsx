import { Heading, ProgressBar } from "@/app/components/Index";
import { IProgressArray } from "../../data/progressData";
import Count from "../Count";
import { getCompletedCount } from "@/app/lib/lib";

const SubHeaderWithCount = ({
  title,
  progressArray,
}: {
  title: string;
  progressArray: IProgressArray;
}) => {
  const completed = getCompletedCount(progressArray);
  const total = progressArray.length;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <Heading as="h3" size="xs">
          {title}
        </Heading>
        <Count completed={completed} total={total} />
      </div>
      <ProgressBar completed={completed} total={total} />
    </div>
  );
};

export default SubHeaderWithCount;
