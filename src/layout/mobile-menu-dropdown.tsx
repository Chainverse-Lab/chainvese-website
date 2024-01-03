import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type MenuItem = {
  subLinks: { href: string; label: string }[];
};

type Props = {
  data: MenuItem[];
  title: string;
  OnClick: any;
};

export function MobileDropdownMenu({ data, title, OnClick }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h2 className="text-5xl font-semibold text-black dark:text-white">
          {title}
        </h2>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-black border-none shadow-none text-center">
        <DropdownMenuGroup className="text-center flex flex-col justify-center items-center">
          {data.map((menuItem, index) => (
            <div key={index}>
              <DropdownMenuGroup>
                {menuItem.subLinks.map((subLink, subIndex) => (
                  <DropdownMenuItem key={subIndex}>
                    <Link
                      href={subLink.href}
                      onClick={OnClick}
                      className="text-2xl text-center"
                    >
                      {subLink.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
