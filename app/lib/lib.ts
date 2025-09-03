import { IProgressArray } from "../sections/types/types";

export const getCompletedCount = (array: IProgressArray) => {
  return array.filter((item) => item.completed).length;
};
