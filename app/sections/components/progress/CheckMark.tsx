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
        "flex min-w-[80px] aspect-square flex-col items-center justify-center border border-white/20 rounded-md p-1",
        completed && "bg-white/5",
        className
      )}
    >
      {completed && <IconCheck className="text-white w-16 h-16" />}
    </div>
  );
};

export default CheckMark;
