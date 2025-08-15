"use client";
import { getCompletedCount } from "@/app/lib/lib";
import ProgressComponent from "../components/progress/ProgressComponent";
import SectionWrapper from "../components/SectionWrapper";
import { IJournal, journals } from "../data/progressData";
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
  const [journalsProgress, setJournalsProgress] =
    useState<IJournal[]>(journals);

  const handleToggleCompleted = (id: string) => {
    setJournalsProgress((prev) =>
      prev.map((journal) =>
        journal.id === id
          ? { ...journal, completed: !journal.completed }
          : journal
      )
    );
  };

  return (
    <SectionWrapper
      containerClasses="gap-8 flex flex-row gap-2 flex-wrap"
      title={title}
      details={details}
      total={total}
      numberCompleted={getCompletedCount(journalsProgress)}
    >
      {journalsProgress.map((journal, i) => (
        <ProgressComponent
          variant="journal"
          key={i}
          name={journal.name}
          completed={journal.completed}
          onClick={() => handleToggleCompleted(journal.id)}
        />
      ))}
    </SectionWrapper>
  );
};

export default Journals;
