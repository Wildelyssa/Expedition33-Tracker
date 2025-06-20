import { Text } from "@/app/components/Index";

const Count = ({ completed, total }: { completed: number; total: number }) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-full px-1.5 bg-teal-200/40">
      <Text size="sm" className="leading-tight">
        4/50
      </Text>
    </div>
  );
};

export default Count;
