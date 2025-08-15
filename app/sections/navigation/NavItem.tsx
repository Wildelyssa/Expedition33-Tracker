import { Button } from "@/app/components/Index";
import Link from "next/link";
import { ISectionDetails } from "../data/progressData";

const NavItem = ({
  id,
  text,
}: {
  id: ISectionDetails["id"];
  text: ISectionDetails["text"];
}) => {
  return (
    <Link href={id}>
      <Button variant="tabs">{text}</Button>
    </Link>
  );
};

export default NavItem;
