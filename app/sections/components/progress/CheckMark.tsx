import { IconCheck } from "@/app/components/Icons/Index";
import { cn } from "@/app/lib/utils";

const CheckMark = ({
  completed,
  className,
}: {
  completed: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex min-w-[34px] aspect-square flex-col items-center justify-center border border-gray-700 rounded-md p-1",
        completed && "bg-teal-600  border-teal-700",
        className
      )}
    >
      {completed && <IconCheck />}
    </div>
  );
};

export default CheckMark;
