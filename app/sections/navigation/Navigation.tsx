import Image from "next/image";
import NavItem from "./NavItem";
import { sections } from "../types/types";

const Navigation = () => {
  return (
    // hashlink to sections with interval observer
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/branding/game-logo.png"
        alt="Clair Obscur:Expedition 33"
        width={500}
        height={300}
        className="drop-shadow-xl object-contain"
      />
      <div className="w-full flex flex-row gap-2 p-2 bg-dark-gray/75 rounded-md">
        {sections.map((item, i) => (
          <NavItem key={`${item.id}${i}`} id={item.id} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
