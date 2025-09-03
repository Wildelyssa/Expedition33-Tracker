import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { Prose, Text } from "@/app/components/Index";
import CheckMark from "./CheckMark";
import { IProgressName } from "../../types/types";

// to do => add conditional styling per category- consider separating out the component if it becomes too complex

const ProgressComponent = ({
  variant,
  name,
  completed,
  className,
  image,
  description,
  onClick,
}: {
  variant: "location" | "journal" | "weapon" | "pictos";
  name: IProgressName;
  completed: boolean;
  className?: string;
  image?: string;
  description?: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "grow border border-white/20 rounded-md flex flex-row items-center justify-between  p-2 text-center bg-dark-gray/95 leading-tight gap-4 hover hover:cursor-pointer hover:border-white/60",
        variant === "weapon" && "grid grid-cols-[90px_1fr_90px]",
        variant === "pictos" && "grid grid-cols-[80px_1fr_80px]",
        // completed && "shadow-[inset_0_0_22px_2px_rgba(255,215,0,0.3)]",
        completed && "border-white/50",
        className
      )}
    >
      {image && (
        <div
          className={cn(
            "relative flex flex-col items-start justify-start rounded-md px-8 w-full h-full my-[-14px]",
            variant === "weapon" && "rotate-45",
            variant === "pictos" && "max-w-[50px]"
          )}
        >
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
      )}
      <div className="flex flex-col items-start">
        <Text size="lg">{name.toUpperCase()}</Text>
        {description && <Prose size="sm">{description}</Prose>}
      </div>
      <CheckMark completed={completed} />
    </div>
  );
};

export default ProgressComponent;
