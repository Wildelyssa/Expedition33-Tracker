"use client";
import ProgressComponent from "../components/progress/ProgressComponent";
import SectionWrapper from "../components/SectionWrapper";
import { journals } from "../data/progressData";
import { useState } from "react";

const Journals = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  const [completedJournals, setCompletedJournals] = useState<
    Record<string, boolean>
  >({});

  const toggleCompleted = (name: string) => {
    setCompletedJournals((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <SectionWrapper
      containerClasses="gap-8 flex flex-row gap-2 flex-wrap"
      title={title}
      details={details}
      total={total}
    >
      {/* onClick=> set state to completed and add to the completed count */}
      {journals.map((journal, i) => (
        <ProgressComponent
          key={i}
          name={journal.name}
          completed={!!completedJournals[journal.name]}
          onClick={() => toggleCompleted(journal.name)}
        />
      ))}
    </SectionWrapper>
  );
};

export default Journals;
