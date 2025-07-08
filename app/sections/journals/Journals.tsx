import VerticalProgress from "../components/progress/VerticalProgress";
import SectionWrapper from "../components/SectionWrapper";
import { journals } from "../data/progressData";

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
        <VerticalProgress key={i} name={journal} completed={false} />
      ))}
    </SectionWrapper>
  );
};

export default Journals;
