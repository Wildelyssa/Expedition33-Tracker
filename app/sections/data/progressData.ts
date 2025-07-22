export type IProgressName =
  | IPrimaryLocations
  | ISubLocations
  | IJournals
  | IWeapon["name"];

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
  primary: IPrimaryLocations[];
  sub: ISubLocations[];
};

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

export const expeditionLocations: ILocationsMap = {
  primary: [
    "Lumiere",
    "Spring Meadows",
    "Flying Waters",
    "Ancient Sanctuary",
    "Gestral Village",
    `Esquie's Nest`,
    "Stone Wall Cliffs",
    "Forgotten BattleField",
    `Monoco's Station`,
    "Old Lumiere",
    "Visages",
    "Sirene",
    "The Monolith",
    "The Manor",
  ],
  sub: [
    "Abbest Cave",
    "Ancient Gestral City",
    `Blade's Graveyard`,
    "Coastal Cave",
    "Crimson Forest",
    "Crushing Cavern",
    "Dark Gestral Arena",
    "Dark Shores",
    "Endless Night Sanctuary",
    "Endless Tower",
    "Esoteric Ruins",
    "Falling Leaves",
    "Floating Cemetary",
    "Flying Casino",
    "Flying Manor",
    "Frozen Hearts",
    "Gestral Beach",
    "Hidden Gestral Arena",
    "Isle Of The Eyes",
    "Lost Woods",
    "Painting Workshop",
    "Red Woods",
    `Renoir's Den`,
    "Sacred River",
    "Sinister Cave",
    "Sirene's Dress",
    "Sky Island",
    "Stone Quarry",
    "Stone Wave Cliffs Cave",
    "Sunless Cliffs",
    "The Abyss",
    "The Canvas",
    "The Carousel",
    "The Chosen Path",
    "The Crows",
    "The Fountain",
    "The Meadows",
    "The Reacher",
    "The Small Bourgeon",
    "Twilight Quarry",
    "White Sands",
    "White Tree",
    "Yellow Harvest",
  ],
};

export const journals: IJournals[] = [
  "Renoir",
  "Simon",
  "Survivor",
  "Verso",
  "Julie",
  "Aline",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "78",
  "81",
  "84",
];

export type IWeapon = {
  name: string;
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

export const weapons: IWeaponsMap = {
  "verso-gustave": [
    { name: "abysseram", element: "" },
    { name: "blodam", element: "" },
    { name: "chevalam", element: "" },
    { name: "confuso", element: "" },
    { name: "contorso", element: "" },
    { name: "corpeso", element: "" },
    { name: "cruleram", element: "" },
    { name: "cultam", element: "" },
    { name: "danseso", element: "" },
    { name: "delaram", element: "" },
    { name: "demonam", element: "" },
    { name: "dreameso", element: "" },
    { name: "dualiso", element: "" },
    { name: "gaulteram", element: "" },
    { name: "gesam", element: "" },
    { name: "glaceso", element: "" },
    { name: "lanceram", element: "" },
    { name: "liteso", element: "" },
    { name: "noahram", element: "" },
    { name: "nosaram", element: "" },
    { name: "sakaram", element: "" },
    { name: "seeram", element: "" },
    { name: "simoso", element: "" },
    { name: "sireso", element: "" },
    { name: "tireso", element: "" },
    { name: "verleso", element: "" },
  ],
  lune: [
    { name: "angerim", element: "" },
    { name: "benisim", element: "" },
    { name: "braselim", element: "" },
    { name: "chapelim", element: "" },
    { name: "choralim", element: "" },
    { name: "colim", element: "" },
    { name: "coralim", element: "" },
    { name: "deminerim", element: "" },
    { name: "elerim", element: "" },
    { name: "kralim", element: "" },
    { name: "lighterim", element: "" },
    { name: "lithelim", element: "" },
    { name: "lunerim", element: "" },
    { name: "painerim", element: "" },
    { name: "poterim", element: "" },
    { name: "redalim", element: "" },
    { name: "saperim", element: "" },
    { name: "scaverim", element: "" },
    { name: "snowim", element: "" },
    { name: "trebuchim", element: "" },
    { name: "troubadim", element: "" },
  ],
  sciel: [
    { name: "algueron", element: "" },
    { name: "blizzon", element: "" },
    { name: "bourgelon", element: "" },
    { name: "charnon", element: "" },
    { name: "chation", element: "" },
    { name: "corderon", element: "" },
    { name: "direton", element: "" },
    { name: "garganon", element: "" },
    { name: "gobluson", element: "" },
    { name: "guleson", element: "" },
    { name: "hevasson", element: "" },
    { name: "litheson", element: "" },
    { name: "luteson", element: "" },
    { name: "martenon", element: "" },
    { name: "minason", element: "" },
    { name: "moisson", element: "" },
    { name: "ramasson", element: "" },
    { name: "rangeson", element: "" },
    { name: "sadon", element: "" },
    { name: "scielson", element: "" },
    { name: "tisseron", element: "" },
  ],
  maelle: [
    { name: "barrier breaker", element: "" },
    { name: "battalum", element: "" },
    { name: "bruleram", element: "" },
    { name: "chalium", element: "" },
    { name: "chantenum", element: "" },
    { name: "clierum", element: "" },
    { name: "coldum", element: "" },
    { name: "duenum", element: "" },
    { name: "facesum", element: "" },
    { name: "glaisum", element: "" },
    { name: "jarum", element: "" },
    { name: "lithum", element: "" },
    { name: "maellum", element: "" },
    { name: "medalum", element: "" },
    { name: "melarum", element: "" },
    { name: "plenum", element: "" },
    { name: "seashelum", element: "" },
    { name: "sekarum", element: "" },
    { name: "stalum", element: "" },
    { name: "tissenum", element: "" },
    { name: "veremum", element: "" },
    { name: "voltesterum", element: "" },
    { name: "yeverum", element: "" },
  ],
  monoco: [
    { name: "ballaro", element: "" },
    { name: "boucharo", element: "" },
    { name: "brumaro", element: "" },
    { name: "chromaro", element: "" },
    { name: "fragaro", element: "" },
    { name: "grandaro", element: "" },
    { name: "joyaro", element: "" },
    { name: "monocaro", element: "" },
    { name: "nursaro", element: "" },
    { name: "sidaro", element: "" },
  ],
};

// totals
export const totals = {
  locations: {
    primary: expeditionLocations.primary.length,
    sub: expeditionLocations.sub.length,
  },
  journals: journals.length,
  weapons: {
    "verso-gustave": weapons["verso-gustave"].length,
    lune: weapons.lune.length,
    maelle: weapons.maelle.length,
    monoco: weapons.monoco.length,
    sciel: weapons.sciel.length,
  },
};
