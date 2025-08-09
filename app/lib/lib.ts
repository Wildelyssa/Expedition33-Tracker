import { IProgressArray } from "../sections/data/progressData";

export const getCompletedCount = (array: IProgressArray) => {
  return array.filter((item) => item.completed).length;
};
