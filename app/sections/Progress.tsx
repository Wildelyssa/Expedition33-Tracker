import { ReactNode } from "react";

const Progress = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4 w-full">{children}</div>;
};

export default Progress;
