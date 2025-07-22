// just the first word
export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// every word in a sentence
export const capitalizeAll = (sentence: string) => {
  return sentence.split(" ").map(capitalize).join(" ");
};
