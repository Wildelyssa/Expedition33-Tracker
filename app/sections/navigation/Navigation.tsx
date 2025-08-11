import Image from "next/image";
import { sections } from "../data/progressData";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    // hashlink to sections with interval observer
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/branding/game-logo.png"
        width={500}
        height={100}
        alt="Clair Obscur:Expedition 33"
      />

      <div className="w-full flex flex-row gap-2 p-2 border border-yellow-300/40 rounded-md">
        {sections.map((item, i) => (
          <NavItem key={`${item.id}${i}`} id={item.id} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
