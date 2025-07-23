export type IProgressName =
  | IPrimaryLocation["name"]
  | ISubLocation["name"]
  | IJournal["name"]
  | IWeapon["name"];

export type IPrimaryLocation = {
  id: string;
  name: IPrimaryLocations;
};

export type ISubLocation = {
  id: string;
  name: ISubLocations;
};

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

export type IJournal = {
  name: IJournals;
  id: string;
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
    { name: "Lumiere", id: "1" },
    { name: "Spring Meadows", id: "2" },
    { name: "Flying Waters", id: "3" },
    { name: "Ancient Sanctuary", id: "4" },
    { name: "Gestral Village", id: "5" },
    { name: `Esquie's Nest`, id: "6" },
    { name: "Stone Wall Cliffs", id: "7" },
    { name: "Forgotten BattleField", id: "8" },
    { name: `Monoco's Station`, id: "9" },
    { name: "Old Lumiere", id: "10" },
    { name: "Visages", id: "11" },
    { name: "Sirene", id: "12" },
    { name: "The Monolith", id: "13" },
    { name: "The Manor", id: "14" },
  ],
  sub: [
    { name: "Abbest Cave", id: "1" },
    { name: "Ancient Gestral City", id: "2" },
    { name: `Blade's Graveyard`, id: "3" },
    { name: "Coastal Cave", id: "4" },
    { name: "Crimson Forest", id: "5" },
    { name: "Crushing Cavern", id: "6" },
    { name: "Dark Gestral Arena", id: "7" },
    { name: "Dark Shores", id: "8" },
    { name: "Endless Night Sanctuary", id: "9" },
    { name: "Endless Tower", id: "10" },
    { name: "Esoteric Ruins", id: "11" },
    { name: "Falling Leaves", id: "12" },
    { name: "Floating Cemetary", id: "13" },
    { name: "Flying Casino", id: "14" },
    { name: "Flying Manor", id: "15" },
    { name: "Frozen Hearts", id: "16" },
    { name: "Gestral Beach", id: "17" },
    { name: "Hidden Gestral Arena", id: "18" },
    { name: "Isle Of The Eyes", id: "19" },
    { name: "Lost Woods", id: "20" },
    { name: "Painting Workshop", id: "21" },
    { name: "Red Woods", id: "22" },
    { name: `Renoir's Den`, id: "23" },
    { name: "Sacred River", id: "24" },
    { name: "Sinister Cave", id: "25" },
    { name: "Sirene's Dress", id: "26" },
    { name: "Sky Island", id: "27" },
    { name: "Stone Quarry", id: "28" },
    { name: "Stone Wave Cliffs Cave", id: "29" },
    { name: "Sunless Cliffs", id: "30" },
    { name: "The Abyss", id: "31" },
    { name: "The Canvas", id: "32" },
    { name: "The Carousel", id: "33" },
    { name: "The Chosen Path", id: "34" },
    { name: "The Crows", id: "35" },
    { name: "The Fountain", id: "36" },
    { name: "The Meadows", id: "37" },
    { name: "The Reacher", id: "38" },
    { name: "The Small Bourgeon", id: "39" },
    { name: "Twilight Quarry", id: "40" },
    { name: "White Sands", id: "41" },
    { name: "White Tree", id: "42" },
    { name: "Yellow Harvest", id: "43" },
  ],
};

export const journals: IJournal[] = [
  { name: "Renoir", id: "1" },
  { name: "Simon", id: "2" },
  { name: "Survivor", id: "3" },
  { name: "Verso", id: "4" },
  { name: "Julie", id: "5" },
  { name: "34", id: "6" },
  { name: "35", id: "7" },
  { name: "36", id: "9" },
  { name: "37", id: "10" },
  { name: "38", id: "11" },
  { name: "39", id: "12" },
  { name: "40", id: "13" },
  { name: "41", id: "14" },
  { name: "42", id: "15" },
  { name: "43", id: "16" },
  { name: "44", id: "17" },
  { name: "45", id: "18" },
  { name: "46", id: "19" },
  { name: "47", id: "20" },
  { name: "48", id: "21" },
  { name: "49", id: "22" },
  { name: "50", id: "23" },
  { name: "51", id: "24" },
  { name: "52", id: "25" },
  { name: "53", id: "26" },
  { name: "54", id: "27" },
  { name: "55", id: "28" },
  { name: "56", id: "29" },
  { name: "57", id: "30" },
  { name: "58", id: "31" },
  { name: "59", id: "32" },
  { name: "60", id: "33" },
  { name: "61", id: "34" },
  { name: "62", id: "35" },
  { name: "63", id: "36" },
  { name: "64", id: "37" },
  { name: "65", id: "38" },
  { name: "66", id: "39" },
  { name: "67", id: "40" },
  { name: "68", id: "41" },
  { name: "69", id: "42" },
  { name: "70", id: "43" },
  { name: "78", id: "44" },
  { name: "81", id: "45" },
  { name: "84", id: "46" },
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

export type IPictos = {
  name: string;
  description: string;
};

export const pictos = [
  {
    name: "accelerating heal",
    description: "Healing an ally also applies Rush for 1 turn",
  },
  {
    name: "accelerating last stand",
    description: "Gain Rush if fighting alone",
  },
  {
    name: "accelerating shots",
    description: "20% change to gain Rush on Free Aim shot",
  },
  {
    name: "accelerating tint",
    description: "Healing Tints also apply Rush",
  },
  {
    name: "aegis revival",
    description: "+1 Shield on being revived",
  },
  {
    name: "aegis revival",
    description: "+1 Shield on being revived",
  },
  {
    name: "anti-blight",
    description: "Immune to Blight",
  },
  {
    name: "anti-burn",
    description: "Immune to Burn",
  },
  {
    name: "anti-charm",
    description: "Immune to Charm",
  },
  {
    name: "anti-freeze",
    description: "Immune to Freeze",
  },
  {
    name: "anti-stun",
    description: "Immune to Stun",
  },
  {
    name: `at death's door`,
    description: "Deal 50% more damage if Health is below 10%",
  },
  {
    name: "attack lifesteal",
    description: "Recover 15% Health on Base Attack",
  },
  {
    name: "augmented aim",
    description: "50% increased Free Aim damage",
  },
  {
    name: "augmented attack",
    description: "50% increased Base Attack damage",
  },
  {
    name: "augmented counter I",
    description: "25% increased Counterattack damage",
  },
  {
    name: "augmented counter II",
    description: "50% increased Counterattack damage",
  },
  {
    name: "augmented counter III",
    description: "75% increased Counterattack damage",
  },
  {
    name: "augmented first strike",
    description: "50% increased damage on the first hit. Once per battle.	",
  },
  {
    name: "auto death",
    description: "Kill self on battle start",
  },
  {
    name: "auto powerful",
    description: "Apply Powerful for 3 turns on battle start",
  },
  {
    name: "auto regen",
    description: "Apply Regen for 3 turns on battle start",
  },
  {
    name: "auto rush",
    description: "Apply Rush for 3 turns on battle start",
  },
  {
    name: "auto shell",
    description: "Apply Rush for 3 turns on battle start",
  },
  {
    name: "base shield",
    description: "+1 Shield if not affected by any Shield on turn start",
  },
  {
    name: "beneficial contamination",
    description: "+2 AP on applying a Status Effect. Once per turn",
  },
  {
    name: "break specialist",
    description:
      "Break damage is increased by 50%, but base damage is reduced by 20%",
  },
  {
    name: "breaker",
    description: "25% increased Break damage",
  },
  {
    name: "breaking attack",
    description: "Base Attack can Break",
  },
  {
    name: "breaking burn",
    description: "25% increased Break damage on Burning enemies",
  },
  {
    name: "breaking counter",
    description: "50% increased Break damage on Counterattack",
  },
  {
    name: "breaking death",
    description: "Fully charge enemy's Break Bar on death",
  },
  {
    name: "breaking shots",
    description: "50% increased Break damage with Free Aim Shots",
  },
  {
    name: "breaking slow",
    description: "25% increased Break damage against Slowed enemies",
  },
  {
    name: "burn affinity",
    description: "25% increased damage on Burning Targets",
  },
  {
    name: "burning break",
    description: "Apply 3 Burn stacks on Breaking a target",
  },
  {
    name: "burning death",
    description: "Apply 3 Burn to all enemies on Death",
  },
  {
    name: "burning mark",
    description: "Apply Burn on hitting a Marked enemy",
  },
  {
    name: "burning shots",
    description: "20% chance to Burn on Free Aim shot",
  },
  {
    name: "charging alteration",
    description: "+10% of a Gradient Charge on applying a Buff. Once per turn",
  },
  {
    name: "charging attack",
    description: "+15% of a Gradient Charge on Base Attack",
  },
  {
    name: "charging burn",
    description: "+20% of a Gradient Charge on applying Burn. Once per turn",
  },
  {
    name: "charging counter",
    description: "+20% of a Gradient Charge on Counterattack",
  },
  {
    name: "charging critical",
    description: "+20% of a Gradient Charge on Critical Hit. Once per turn",
  },
  {
    name: "charging mark",
    description:
      "+20% of a Gradient Charge on hitting a Marked target. Once per turn",
  },
  {
    name: "charging stun",
    description: "+5% of a Gradient Charge on hitting a Stunned enemy",
  },
  {
    name: "charging tint",
    description: "+5% of a Gradient Charge on using an item",
  },
  {
    name: "charging weakness",
    description:
      "+15% of a Gradient Charge on hitting a Weakness. Once per turn",
  },
  {
    name: "cheater",
    description: "Always play twice in a row",
  },
  {
    name: "cleansing tint",
    description: "Healing Tints also remove all Status Effects from the target",
  },
  {
    name: "clea's life",
    description:
      "On turn start, if no damage taken since last turn, recover 100% Health",
  },
  {
    name: "combo attack I",
    description: "Base Attack has 1 extra hit",
  },
  {
    name: "combo attack II",
    description: "Base Attack has 1 extra hit",
  },
  {
    name: "combo attack III",
    description: "Base Attack has 1 extra hit",
  },
  {
    name: "confident",
    description: "Take 50% less damage, but can't be Healed",
  },
  {
    name: "confident fighter",
    description: "30% increased damage, but can't be Healed",
  },
  {
    name: "critical break",
    description: "25% increased Break damage on Critical Hits",
  },
  {
    name: "critical burn",
    description: "25% increased Critical Chance on Burning enemies",
  },
  {
    name: "critical moment",
    description: "50% increased Critical Chance if Health is below 30%",
  },
  {
    name: "critical stun",
    description: "100% on Critical Chance on hitting a Stunned target",
  },
  {
    name: "critical vulnerability",
    description: "25% increased Critical Chance on Defenceless enemies",
  },
  {
    name: "critical weakness",
    description: "25% increased Critical Chance on Weakness",
  },
  {
    name: "dead energy I",
    description: "+3 AP on killing an enemy",
  },
  {
    name: "dead energy II",
    description: "+3 AP on killing an enemy",
  },
  {
    name: "death bomb",
    description: "On Death, deal damage to all enemies",
  },
  {
    name: "defensive mode",
    description:
      "On receiving damage, consume 1 AP to take 30% less damage, if possible",
  },
  {
    name: "dodger",
    description: "Gain 1 AP on Perfect Dodge. Once per turn",
  },
  {
    name: "double burn",
    description: "On applying a Burn stack, apply a second one",
  },
  {
    name: "double mark",
    description: "Mark requires 1 more hit to be removed",
  },
  {
    name: "draining cleanse",
    description:
      "Consume 1 AP to prevent Status Effects application, if possible",
  },
  {
    name: "effective heal",
    description: "Double all Heals received",
  },
  {
    name: "effective support",
    description: "+2 AP on using an item",
  },
  {
    name: "empowering attack",
    description: "Gain Powerful for 1 turn on Base Attack",
  },
  {
    name: "empowering break",
    description: "Gain Powerful on Breaking a target",
  },
  {
    name: "empowering dodge",
    description:
      "5% increased damage for each consecutive successful Dodge. Can stack up to 10 times",
  },
  {
    name: "empowering last stand",
    description: "Gain Powerful if fighting alone",
  },
  {
    name: "empowering parry",
    description:
      "Each successful Parry increases damage by 5% until end of the following turn. Taking any damage removes this buff",
  },
  {
    name: "empowering tint",
    description: "Healing Tints also apply Powerful",
  },
  {
    name: "energetic healer",
    description: "+2AP on Healing an ally. Once per turn",
  },
  {
    name: "energising attack I",
    description: "+1 AP on Base Attack",
  },
  {
    name: "energising attack II",
    description: "+1 AP on Base Attack",
  },
  {
    name: "energising break",
    description: "+3 AP on Breaking a target",
  },
  {
    name: "energising burn",
    description: "+1 AP on applying Burn. Once per turn",
  },
  {
    name: "energising cleanse",
    description:
      "Dispel the first negative Status Effect received an gain 2 AP",
  },
  {
    name: "energising death",
    description: "On death, +4 AP to allies",
  },
  {
    name: "energising gradient",
    description: "+1 AP per Gradient Charge consumed",
  },
  {
    name: "energising heal",
    description: "On Healing an ally, also give 2 AP",
  },
  {
    name: "energising jump",
    description: "+1 AP on Jump Counterattack",
  },
  {
    name: "energising pain",
    description: "No longer gain AP on Parry. +1AP on getting hit",
  },
  {
    name: "energising parry",
    description: "+1 AP on successful Parry",
  },
  {
    name: "energising powerful",
    description: "Give 2 AP on applying Powerful",
  },
  {
    name: "energising revive",
    description: "+3 AP to all allies when revived",
  },
  {
    name: "energising rush",
    description: "Give 2 AP on applying Rush",
  },
  {
    name: "energising shell",
    description: "Give 2 AP on applying Shell",
  },
  {
    name: "energising shots",
    description: "20% chance to gain 1 AP on Free Aim shot",
  },
  {
    name: "energising start I",
    description: "+1 AP on battle start",
  },
  {
    name: "energising start II",
    description: "+1 AP on battle start",
  },
  {
    name: "energising start II",
    description: "+1 AP on battle start",
  },
  {
    name: "energising start IV",
    description: "+1 AP on battle start",
  },
  {
    name: "energising stun",
    description: "+1 AP on hitting a Stunned target with a Skill",
  },
  {
    name: "energising turn",
    description: "+1 AP on turn start",
  },
  {
    name: "energising master",
    description: "Every AP gain is increased by 1",
  },
  {
    name: "enfeebling attack",
    description: "Base Attack applies Powerless for 1 turn",
  },
  {
    name: "enfeebling mark",
    description: "Marked targets deal 30% less damage",
  },
  {
    name: "exhausting power",
    description: "50% increased damage if Exhausted",
  },
  {
    name: "exposing attack",
    description: "Base Attack applies Defenseless for 1 turn",
  },
  {
    name: "exposing break",
    description: "Apply Defenceless on Break",
  },
  {
    name: "faster than strong",
    description: "Always play twice in a row, but deal 50% less damage",
  },
  {
    name: "first offensive",
    description: "First hit dealt and taken deals 50% more damage",
  },
  {
    name: "first strike",
    description: "Play first",
  },
  {
    name: "fueling break",
    description: "Breaking a target doubles its Burn amount",
  },
  {
    name: "full strength",
    description: "25% increased damage on full Health",
  },
  {
    name: "glass canon",
    description: "Deal 25% more damage, but take 25% more damage",
  },
  {
    name: "gradient break",
    description: "+50% of a Gradient Charge on Breaking a target",
  },
  {
    name: "gradient breaker",
    description: "50% increased Breaking damage with Gradient Attacks",
  },
  {
    name: "gradient fighter",
    description: "+25% increased damage with Gradient Attacks",
  },
  {
    name: "greater defenceless",
    description: "+15% to Defenceless damage amplification",
  },
  {
    name: "greater powerful",
    description: "+15% to Powerful damage increase",
  },
  {
    name: "greater powerless",
    description: "+15% to Powerless damage reduction",
  },
  {
    name: "greater rush",
    description: "+25% Rush Speed increase",
  },
  {
    name: "greater shell",
    description: "+10% to Shell damage reduction",
  },
  {
    name: "greater slow",
    description: "+15% to Slow Speed reduction",
  },
  {
    name: "healing boon",
    description: "Heal 15% HP on applying a buff",
  },
  {
    name: "healing counter",
    description: "Recover 25% Health on Counterattack",
  },
  {
    name: "healing death",
    description: "On death, the rest of the Expedition recover all Health",
  },
  {
    name: "healing fire",
    description:
      "Recover 25% Health when attacking a Burning target. Once per turn",
  },
  {
    name: "healing mark",
    description: "Recover 25% Health on hitting a Marked enemy. Once per turn",
  },
  {
    name: "healing parry",
    description: "Recover 3% Health on Parry",
  },
  {
    name: "healing share",
    description: "Receive 15% of all Heals affecting other characters",
  },
  {
    name: "healing stun",
    description: "Recover 5% Health on hitting a Stunned target",
  },
  {
    name: "healing tint energy",
    description: "Healing Tints also give 1 AP",
  },
  {
    name: "immaculate",
    description: "30% increased damage until a hit is received",
  },
  {
    name: "in medias res",
    description: "+3 Shields on Battle Start, but max Health is halved",
  },
  {
    name: "inverted affinity",
    description:
      "Apply Inverted on self for 3 turns on battle start. 50% increased damage while Inverted",
  },
  {
    name: "last stand critical",
    description: "100% Critical Chance while fighting alone",
  },
  {
    name: "longer burn",
    description: "Burn duration is increased by 2",
  },
  {
    name: "longer powerful",
    description: "On applying Powerful, its duration is increased by 2",
  },
  {
    name: "longer rush",
    description: "On applying Rush, its duration is increased by 2",
  },
  {
    name: "longer shell",
    description: "On applying Shell, its duration is increased by 2",
  },
  {
    name: "marking break",
    description: "Apply Mark on Break",
  },
  {
    name: "marking shots",
    description: "20% chance to apply Mark on Free Aim shot",
  },
  {
    name: "painted power",
    description: "+1 AP on Parry, but damage received is doubled",
  },
  {
    name: "painter",
    description: "Convert all Physical damage to Void damage",
  },
  {
    name: "perilous parry",
    description: "Damage can exceed 9,999",
  },
  {
    name: "piercing shot",
    description: "25% increased Free Aim damage. Free Aim shots ignore Shields",
  },
  {
    name: "powered attack",
    description:
      "On every damage dealt, try to consume 1 AP. If successful, increase damage by 20",
  },
  {
    name: "powerful heal",
    description: "Healing an ally also applies Powerful for 1 turn",
  },
  {
    name: "powerful mark",
    description: "Gain Powerful on hitting a Marked enemy",
  },
  {
    name: "powerful on shell",
    description: "Apply Powerful on applying Shell",
  },
  {
    name: "powerful revive",
    description: "Apply Powerful for 3 turns when revived",
  },
  {
    name: "powerful shield",
    description: "10% increased damage per Shield Point on self",
  },
  {
    name: "powerful shots",
    description: "20% chance to gain Powerful on Free Aim shot",
  },
  {
    name: "pro retreat",
    description: "Allows Flee to be instantaneous",
  },
  {
    name: "protecting attack",
    description: "Gain Shell for 1 turn on Base Attack",
  },
  {
    name: "protecting death",
    description: "On death, allies gain Shell",
  },
  {
    name: "protecting heal",
    description: "Healing an ally also applies Shell for 1 turn",
  },
  {
    name: "protecting last stand",
    description: "Gain Shell if fighting alone",
  },
  {
    name: "protecting shots",
    description: "20% chance to gain Shell on Free Aim shot",
  },
  {
    name: "protecting tint",
    description: "Healing Tints also apply Shell",
  },
  {
    name: "quick break",
    description: "Play again on Breaking a target",
  },
  {
    name: "random defense",
    description:
      "Damage taken is randomly multiplied by a value between 50% and 200%",
  },
  {
    name: "recovery",
    description:
      "Recovers 10% Health on turn start. (Reward for spending Chroma at the Red Woods Nevron quest)",
  },
  {
    name: "rejuvenating revive",
    description: "Apply Regen for 3 turns when revived",
  },
  {
    name: "revive paradox",
    description: "Play immediately when revived",
  },
  {
    name: "revive tint energy",
    description: "Revive Tints also give 3 AP",
  },
  {
    name: "rewarding mark",
    description: "+2 AP on dealing damage to a Marked target. Once per turn",
  },
  {
    name: "roulette",
    description:
      "Every hit has a 50% chance to deal either 50% or 200% of its damage",
  },
  {
    name: "rush on powerful",
    description: "Apply Rush on applying Powerful",
  },
  {
    name: "shell on rush",
    description: "Apply Shell on applying Rush",
  },
  {
    name: "SOS power",
    description: "Apply Powerful when falling below 50% Health",
  },
  {
    name: "SOS rush",
    description: "Apply Rush when falling below 50% Health",
  },
  {
    name: "SOS shell",
    description: "Apply Shell when falling below 50% Health",
  },
  {
    name: "second chance",
    description: "Revive with 100% Health. Once per battle",
  },
  {
    name: "shared care",
    description: "When healing an ally, also Heal self for 50% of that value",
  },
  {
    name: "shield affinity",
    description:
      "30% increased damage while having Shields, but receiving any damage always removes all Shields",
  },
  {
    name: "shielding death",
    description: "On death, allies gain 3 Shield points",
  },
  {
    name: "shielding tint",
    description: "Healing Tints also add 2 Shields",
  },
  {
    name: "shortcut",
    description:
      "Immediately play when falling below 30% Health. Once per battle",
  },
  {
    name: "slowing break",
    description: "Apply Slow on Break",
  },
  {
    name: "sniper",
    description:
      "First Free Aim shot each turn deals 200% increased damage and can Break",
  },
  {
    name: "solidifying",
    description:
      "+2 Shields when the character's Health falls below 50%. Once per battle",
  },
  {
    name: "solo fighter",
    description: "Deal 50% more damage if fighting alone",
  },
  {
    name: "staggering attack",
    description: "50% increased Break damage on Base Attack",
  },
  {
    name: "stay marked",
    description: "50% chance to apply Mark when attacking a Marked target",
  },
  {
    name: "stun boost",
    description: "30% increased damage on Stunned targets",
  },
  {
    name: "survivor",
    description: "Survive fatal damage with 1 Health. Once per battle",
  },
  {
    name: "sweet kill",
    description: "Recover 50% Health on killing an enemy",
  },
  {
    name: "tainted",
    description: "15% increased damage for each Status Effect on self",
  },
  {
    name: "teamwork",
    description: "10% increased damage while all allies are alive",
  },
  {
    name: "the one",
    description: "Max Health is reduced to 1",
  },
  {
    name: "time tint",
    description: "Energy Tints also apply Rush",
  },
  {
    name: "versatile",
    description:
      "After a Free Aim hit, Base Attack damage is increased by 50% for 1 turn",
  },
  {
    name: "warming up",
    description: "5% increased damage per turn. Can stack up to 5 times",
  },
  {
    name: "weakness gain",
    description: "+1AP on hitting an enemy's Weakness. Once per turn",
  },
];

// totals=> drop totals into a reusable hook?
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
  pictos: pictos.length,
};
