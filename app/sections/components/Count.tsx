import { Text } from "@/app/components/Index";
import { cn } from "@/app/lib/utils";

const Count = ({
  completed,
  total,
  className,
}: {
  completed: number;
  total: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center rounded-full px-1.5 py-1 bg-white text-black",
        className
      )}
    >
      <Text size="sm" className="leading-tight">
        {completed} / {total}
      </Text>
    </div>
  );
};

export default Count;
