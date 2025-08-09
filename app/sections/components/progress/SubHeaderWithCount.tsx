import { Heading } from "@/app/components/Index";
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
  return (
    <div className="flex flex-row gap-2">
      <Heading as="h3" size="xs">
        {title}
      </Heading>
      <Count
        completed={getCompletedCount(progressArray)}
        total={progressArray.length}
      />
    </div>
  );
};

export default SubHeaderWithCount;
