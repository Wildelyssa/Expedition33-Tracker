"use client";
import SectionWrapper from "../components/SectionWrapper";
import {
  expeditionLocations,
  IPrimaryLocation,
  ISubLocation,
} from "../data/progressData";
import ProgressComponent from "../components/progress/ProgressComponent";
import { useState } from "react";
import { getCompletedCount } from "@/app/lib/lib";
import SubHeaderWithCount from "../components/progress/SubHeaderWithCount";

// to do=> streamline the code in this section to avoid repetition- maybe as per weapons section for consistency

const Locations = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  const [primaryLocationsProgress, setPrimaryLocationsProgress] = useState<
    IPrimaryLocation[]
  >(expeditionLocations.primary);

  const [subLocationsProgress, setSubLocationsProgress] = useState<
    ISubLocation[]
  >(expeditionLocations.sub);

  const handleToggleCompletedPrimary = (id: string) => {
    setPrimaryLocationsProgress((prev) =>
      prev.map((location) =>
        location.id === id
          ? { ...location, completed: !location.completed }
          : location
      )
    );
  };

  const handleToggleCompletedSub = (id: string) => {
    setSubLocationsProgress((prev) =>
      prev.map((location) =>
        location.id === id
          ? { ...location, completed: !location.completed }
          : location
      )
    );
  };

  const allLocationsArray = [
    ...primaryLocationsProgress,
    ...subLocationsProgress,
  ];

  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
      numberCompleted={getCompletedCount(allLocationsArray)}
    >
      <div className="flex flex-col gap-2">
        <SubHeaderWithCount
          title="Primary Locations"
          progressArray={primaryLocationsProgress}
        />
        <div className="flex flex-row gap-2 flex-wrap">
          {primaryLocationsProgress.map((location) => (
            <ProgressComponent
              key={location.id}
              name={location.name}
              completed={location.completed}
              onClick={() => handleToggleCompletedPrimary(location.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SubHeaderWithCount
          title="Sub Locations"
          progressArray={subLocationsProgress}
        />
        <div className="flex flex-row flex-wrap gap-2">
          {subLocationsProgress.map((location) => (
            <ProgressComponent
              key={location.id}
              name={location.name}
              completed={location.completed}
              onClick={() => handleToggleCompletedSub(location.id)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Locations;
