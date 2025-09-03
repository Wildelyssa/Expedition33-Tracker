const sectionIds = ["locations", "journals", "weapons", "pictos"] as const;

export type SectionId = (typeof sectionIds)[number];

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

export const sections: ISectionDetails[] = sectionIds.map(createSection);

export type IProgressArray = (
  | IPrimaryLocation
  | ISubLocation
  | IPictos
  | IWeapon
  | IJournal
)[];

export type IProgressName =
  | IPrimaryLocations
  | ISubLocations
  | IJournals
  | IWeapon["name"]
  | IPictos["name"];

export type IProgressBase = {
  id: string;
  name: string;
  completed: boolean;
};

export type IPrimaryLocation = IProgressBase;

export type ISubLocation = IProgressBase;

export type IPrimaryLocations =
  | "Lumiere"
  | "Spring Meadows"
  | "Flying Waters"
  | "Ancient Sanctuary"
  | "Gestral Village"
  | `Esquie's Nest`
  | "Stone Wall Cliffs"
  | "Forgotten BattleField"
  | `Monoco's Station`
  | "Old Lumiere"
  | "Visages"
  | "Sirene"
  | "The Monolith"
  | "The Manor";

export type ISubLocations =
  | "Abbest Cave"
  | "Ancient Gestral City"
  | `Blade's Graveyard`
  | "Coastal Cave"
  | "Crimson Forest"
  | "Crushing Cavern"
  | "Dark Gestral Arena"
  | "Dark Shores"
  | "Endless Night Sanctuary"
  | "Endless Tower"
  | "Esoteric Ruins"
  | "Falling Leaves"
  | "Floating Cemetary"
  | "Flying Casino"
  | "Flying Manor"
  | "Frozen Hearts"
  | "Gestral Beach"
  | "Hidden Gestral Arena"
  | "Isle Of The Eyes"
  | "Lost Woods"
  | "Painting Workshop"
  | "Red Woods"
  | `Renoir's Den`
  | "Sacred River"
  | "Sinister Cave"
  | "Sirene's Dress"
  | "Sky Island"
  | "Stone Quarry"
  | "Stone Wave Cliffs Cave"
  | "Sunless Cliffs"
  | "The Abyss"
  | "The Canvas"
  | "The Carousel"
  | "The Chosen Path"
  | "The Crows"
  | "The Fountain"
  | "The Meadows"
  | "The Reacher"
  | "The Small Bourgeon"
  | "Twilight Quarry"
  | "White Sands"
  | "White Tree"
  | "Yellow Harvest";

export type ILocationsMap = {
  primary: IPrimaryLocation[];
  sub: ISubLocation[];
};

export type IJournal = IProgressBase;

export type IJournals =
  | "Renoir"
  | "Simon"
  | "Survivor"
  | "Verso"
  | "Julie"
  | "Aline"
  | "34"
  | "35"
  | "36"
  | "37"
  | "38"
  | "39"
  | "40"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "49"
  | "50"
  | "51"
  | "52"
  | "53"
  | "54"
  | "55"
  | "56"
  | "57"
  | "58"
  | "59"
  | "60"
  | "61"
  | "62"
  | "63"
  | "64"
  | "65"
  | "66"
  | "67"
  | "68"
  | "69"
  | "70"
  | "78"
  | "81"
  | "84";

export type IWeapon = IProgressBase & {
  element: string;
};

export type CharacterKey =
  | "verso-gustave"
  | "lune"
  | "sciel"
  | "maelle"
  | "monoco";

export type IWeaponsMap = {
  [key in CharacterKey]: IWeapon[];
};

export type IPictos = IProgressBase & {
  description: string;
};
