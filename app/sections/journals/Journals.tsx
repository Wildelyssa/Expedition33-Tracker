import { Heading } from "@/app/components/Index";
import SectionWrapper from "../components/SectionWrapper";
import { expeditionLocations, journals } from "../data/progressData";
import JournalsProgress from "./JournalsProgress";

const Journals = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  // on click=> set as completed and add to completed count
  return (
    <SectionWrapper
      containerClasses="gap-8 flex flex-row gap-2 flex-wrap"
      title={title}
      details={details}
      total={total}
    >
      {/* map locations from data */}
      {/* onClick=> set state to completed and add to the completed count */}
      {journals.map((journal, i) => (
        <JournalsProgress key={i} name={journal} />
      ))}
    </SectionWrapper>
  );
};

export default Journals;
