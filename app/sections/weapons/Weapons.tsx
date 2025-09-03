"use client";

import SectionWrapper from "../components/SectionWrapper";
import ProgressComponent from "../components/progress/ProgressComponent";
import { weapons } from "../data/progressData";
import { capitalize } from "@/app/lib/display";
import { useState } from "react";
import { getCompletedCount } from "@/app/lib/lib";
import SubHeaderWithCount from "../components/progress/SubHeaderWithCount";
import { CharacterKey, IWeaponsMap } from "../types/types";

const Weapons = ({
  title,
  details,
  total,
}: {
  title: string;
  details: string;
  total: number;
}) => {
  // to do=> simplify the code here

  const [weaponProgress, setWeaponProgress] = useState<IWeaponsMap>(weapons);

  const characterKeys: CharacterKey[] = [
    "verso-gustave",
    "lune",
    "sciel",
    "maelle",
    "monoco",
  ];

  const handleToggleCompleted = (id: string) => {
    setWeaponProgress((prev) => {
      const updated = { ...prev };

      for (const key in updated) {
        const weaponsArray = updated[key as CharacterKey];
        const weaponIndex = weaponsArray.findIndex((w) => w.id === id);

        if (weaponIndex !== -1) {
          updated[key as CharacterKey] = [
            ...weaponsArray.slice(0, weaponIndex),
            {
              ...weaponsArray[weaponIndex],
              completed: !weaponsArray[weaponIndex].completed,
            },
            ...weaponsArray.slice(weaponIndex + 1),
          ];
          break;
        }
      }

      return updated;
    });
  };

  const allWeapons = [
    ...weaponProgress.lune,
    ...weaponProgress["verso-gustave"],
    ...weaponProgress.maelle,
    ...weaponProgress.monoco,
    ...weaponProgress.sciel,
  ];

  return (
    <SectionWrapper
      containerClasses="gap-8"
      title={title}
      details={details}
      total={total}
      numberCompleted={getCompletedCount(allWeapons)}
    >
      {characterKeys.map((key) => (
        <div key={key} className="flex flex-col gap-2">
          <SubHeaderWithCount
            title={capitalize(key)}
            progressArray={weaponProgress[key]}
          />
          <div className="flex flex-row gap-2 flex-wrap">
            {weaponProgress[key].map((weapon) => (
              <ProgressComponent
                variant="weapon"
                key={weapon.id}
                name={weapon.name}
                completed={weapon.completed}
                image={`/images/weapons/${key}/${weapon.name.replace(
                  " ",
                  "-"
                )}.png`}
                onClick={() => {
                  handleToggleCompleted(weapon.id);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Weapons;
