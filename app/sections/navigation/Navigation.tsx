import { sections } from "@/app/lib/lib";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    // hashlink to sections with interval observer
    <div className="w-full flex flex-row gap-2 p-2 border border-yellow-300/40 rounded-md">
      {sections.map((item, i) => (
        <NavItem key={`${item.id}${i}`} id={item.id} text={item.text} />
      ))}
    </div>
  );
};

export default Navigation;
