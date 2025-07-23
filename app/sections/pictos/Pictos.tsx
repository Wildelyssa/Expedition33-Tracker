import ProgressComponent from "../components/progress/ProgressComponent";
import SectionWrapper from "../components/SectionWrapper";
import { pictos } from "../data/progressData";

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
      <div className="flex flex-row gap-2 flex-wrap">
        {pictos.map((item, i) => (
          <ProgressComponent
            key={`${item.name}-${i}`}
            name={item.name}
            completed={false}
            image={`/images/pictos/${item.name
              .replaceAll(" ", "-")
              .replace("'", "")
              .toLocaleLowerCase()}.png`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Pictos;
