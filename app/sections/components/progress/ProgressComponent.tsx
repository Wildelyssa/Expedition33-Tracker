import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { Text } from "@/app/components/Index";
import CheckMark from "./CheckMark";
import { IProgressName } from "../../data/progressData";
import { capitalizeAll } from "@/app/lib/display";

const ProgressComponent = ({
  name,
  completed,
  className,
  image,
  onClick,
}: {
  name: IProgressName;
  completed: boolean;
  className?: string;
  image?: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-[216px] grow border border-gray-500 rounded-md flex flex-col items-center justify-center p-4 text-center bg-neutral-900 leading-tight gap-2 hover hover:cursor-pointer hover:border-yellow-400/70",
        completed &&
          "shadow-[inset_0_0_22px_2px_rgba(255,215,0,0.3)] border-yellow-400/70",
        className
      )}
    >
      {/* To Do => adjust view box widths here if needed, should also scale for responsive */}
      {image && (
        <div className="relative flex flex-col items-center justify-center rounded-md w-[120px] h-[120px]">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
      )}

      <Text>{capitalizeAll(name)}</Text>
      <CheckMark completed={completed} />
    </div>
  );
};

export default ProgressComponent;
