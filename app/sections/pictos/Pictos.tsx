"use client";

import { useState } from "react";
import ProgressComponent from "../components/progress/ProgressComponent";
import SectionWrapper from "../components/SectionWrapper";
import { IPictos, pictos } from "../data/progressData";
import { getCompletedCount } from "@/app/lib/lib";

const Pictos = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  const [pictosProgress, setPictosProgress] = useState<IPictos[]>(pictos);

  const handleToggleCompleted = (id: string) => {
    setPictosProgress((prev) =>
      prev.map((location) =>
        location.id === id
          ? { ...location, completed: !location.completed }
          : location
      )
    );
  };
  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
      numberCompleted={getCompletedCount(pictosProgress)}
    >
      <div className="flex flex-row gap-2 flex-wrap">
        {pictosProgress.map((item) => (
          <ProgressComponent
            key={item.id}
            name={item.name}
            completed={item.completed}
            image={`/images/pictos/${item.name
              .replaceAll(" ", "-")
              .replace("'", "")
              .toLocaleLowerCase()}.png`}
            onClick={() => {
              handleToggleCompleted(item.id);
            }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Pictos;
