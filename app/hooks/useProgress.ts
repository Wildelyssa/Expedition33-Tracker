// import { create } from "zustand";

// type ProgressState = {
//   completedItems: Record<string, boolean>;
//   toggleCompleted: (name: string) => void;
//   isCompleted: (name: string) => boolean;
//   getCompletedCount: () => number;
// };

// export const useProgressStore = create<ProgressState>((set, get) => ({
//   completedItems: {},
//   toggleCompleted: (name: string) =>
//     set((state) => ({
//       completedItems: {
//         ...state.completedItems,
//         [name]: !state.completedItems[name],
//       },
//     })),
//   isCompleted: (name: string) => !!get().completedItems[name],
//   getCompletedCount: () =>
//     Object.values(get().completedItems).filter(Boolean).length,
// }));
