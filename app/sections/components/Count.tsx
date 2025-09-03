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
        "flex flex-row items-center justify-center rounded-full px-2 py-1 bg-white text-black",
        className
      )}
    >
      <Text size="sm" weight="bold" className="leading-tight pt-[1px]">
        {completed} / {total}
      </Text>
    </div>
  );
};

export default Count;
