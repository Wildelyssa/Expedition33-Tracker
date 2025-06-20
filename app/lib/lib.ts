export type SectionId = "locations" | "weapons";

export type ISectionDetails = {
  id: string;
  text: string;
};

function createSection(id: SectionId): ISectionDetails {
  return {
    id,
    text: id.charAt(0).toUpperCase() + id.slice(1),
  };
}

export const sections: ISectionDetails[] = [
  createSection("locations"),
  createSection("weapons"),
];
