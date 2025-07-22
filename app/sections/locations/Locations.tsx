import { Heading } from "@/app/components/Index";
import SectionWrapper from "../components/SectionWrapper";
import { expeditionLocations } from "../data/progressData";
import ProgressComponent from "../components/progress/ProgressComponent";

const Locations = ({
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
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
    >
      {/* map locations from data */}
      {/* onClick=> set state to completed and add to the completed count */}
      {/* if clicked again => set state to not completed and minus one from the count */}
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Primary Locations
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          {expeditionLocations.primary.map((primaryLocation, i) => (
            <ProgressComponent
              key={i}
              name={primaryLocation}
              completed={true}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Sub Locations
        </Heading>
        <div className="flex flex-row flex-wrap gap-2">
          {expeditionLocations.sub.map((primaryLocation, i) => (
            <ProgressComponent
              key={i}
              name={primaryLocation}
              completed={false}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Locations;
