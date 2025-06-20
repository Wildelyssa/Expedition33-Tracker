import { Button } from "@/app/components/Index";
import { ISectionDetails } from "@/app/lib/lib";
import Link from "next/link";

const NavItem = ({
  id,
  text,
}: {
  id: ISectionDetails["id"];
  text: ISectionDetails["text"];
}) => {
  return (
    <Link href={id}>
      <Button>{text}</Button>
    </Link>
  );
};

export default NavItem;
