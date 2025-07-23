"use client";
import { Heading } from "@/app/components/Index";
import SectionWrapper from "../components/SectionWrapper";
import { expeditionLocations } from "../data/progressData";
import ProgressComponent from "../components/progress/ProgressComponent";
import { useState } from "react";

const Locations = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  const [completedLocations, setCompletedLocations] = useState<
    Record<string, boolean>
  >({});

  const toggleCompleted = (name: string) => {
    setCompletedLocations((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
    >
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Primary Locations
        </Heading>
        <div className="flex flex-row gap-2 flex-wrap">
          {expeditionLocations.primary.map((location, i) => (
            <ProgressComponent
              key={i}
              name={location.name}
              completed={!!completedLocations[location.name]}
              onClick={() => toggleCompleted(location.name)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" size="xs">
          Sub Locations
        </Heading>
        <div className="flex flex-row flex-wrap gap-2">
          {expeditionLocations.sub.map((location, i) => (
            <ProgressComponent
              key={i}
              name={location.name}
              completed={!!completedLocations[location.name]}
              onClick={() => toggleCompleted(location.name)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Locations;
