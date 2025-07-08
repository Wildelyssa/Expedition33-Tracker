import { Heading } from "@/app/components/Index";
import SectionWrapper from "../components/SectionWrapper";
import HorizontalProgress from "../components/progress/HorizontalProgress";

const Weapons = ({
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
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Gustave/Verso Weapons
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          <HorizontalProgress name="verso/gustave weapon" completed={false} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Lune Weapons
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          <HorizontalProgress name="lune weapon" completed={true} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Sciel Weapons
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          <HorizontalProgress name="sciel weapon" completed={false} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Maelle Weapons
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          <HorizontalProgress name="maelle weapon" completed={true} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Weapons;
