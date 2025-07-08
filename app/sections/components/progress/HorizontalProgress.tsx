import { IconCheck } from "@/app/components/Icons/Index";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { Text } from "@/app/components/Index";

const HorizontalProgress = ({
  name,
  completed,
}: {
  name: string;
  completed: boolean;
}) => {
  return (
    <div
      className={cn(
        "border border-gray-500 rounded-md flex flex-row items-start justify-start py-4 px-2 text-center bg-neutral-900 leading-tight gap-2",
        completed &&
          "shadow-[inset_0_0_22px_2px_rgba(255,215,0,0.3)] border-yellow-400/70"
      )}
    >
      <div className="flex flex-col items-center justify-center aspect-square bg-amber-50/20 rounded-md min-w-[120px]">
        <Image
          src="/images/weapons/lune/angerim_lune.png"
          alt="weapon name"
          width={80}
          height={80}
        />
      </div>

      <div className="flex flex-col items-end justify-center h-full gap-4">
        <Text>{name}</Text>
        <div
          className={cn(
            "flex min-w-[34px] min-h-[34px] flex-col items-center justify-center border border-gray-700 rounded-md p-1",
            completed && "bg-purple-600 border-purple-700"
          )}
        >
          {completed && <IconCheck />}
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgress;
