import { Heading } from "@/app/components/Index";
import SectionWrapper from "../components/SectionWrapper";
import ProgressComponent from "../components/progress/ProgressComponent";
import { CharacterKey, weapons } from "../data/progressData";
import { capitalize } from "@/app/lib/display";

const Weapons = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  const characterKeys: CharacterKey[] = [
    "verso-gustave",
    "lune",
    "sciel",
    "maelle",
    "monoco",
  ];

  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
    >
      {characterKeys.map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <Heading as="h3" size="xs">
            {capitalize(key)}
          </Heading>
          <div className="flex flex-row gap-2 flex-wrap">
            {weapons[key].map((weapon, i) => (
              <ProgressComponent
                key={`${weapon.name}-${i}`}
                name={weapon.name}
                completed={false}
                image={`/images/weapons/${key}/${weapon.name.replace(
                  " ",
                  "-"
                )}.png`}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Weapons;
