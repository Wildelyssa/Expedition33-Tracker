import { IconCheck } from "@/app/components/Icons/Index";
import { cn } from "@/app/lib/utils";

const VerticalProgress = ({
  name,
  completed,
}: {
  name: string;
  completed: boolean;
}) => {
  return (
    <div
      className={cn(
        "max-w-[9%] min-w-[9%] aspect-square border border-gray-500 rounded-md flex flex-col items-center justify-end py-4 px-2 text-center bg-neutral-900 leading-tight gap-2",
        completed &&
          "shadow-[inset_0_0_22px_2px_rgba(255,215,0,0.3)] border-yellow-400/70"
      )}
    >
      {name}
      <div
        className={cn(
          "flex min-w-[34px] aspect-square flex-col items-center justify-center border border-gray-700 rounded-md p-1",
          completed && "bg-purple-600  border-purple-700"
        )}
      >
        {completed && <IconCheck />}
      </div>
    </div>
  );
};

export default VerticalProgress;
