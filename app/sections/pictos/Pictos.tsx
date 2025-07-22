import ProgressComponent from "../components/progress/ProgressComponent";
import SectionWrapper from "../components/SectionWrapper";

const Pictos = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
    >
      <ProgressComponent name="pictos name" completed={true} />
    </SectionWrapper>
  );
};

export default Pictos;
