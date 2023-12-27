import * as React from "react";
import Link from "next/link";

import { NavMenu } from "./nav-menu";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10 ">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block text-xl lg:text-4xl font-bold">
          Chainverse
        </span>
      </Link>
      <div className="md:hidden hidden lg:block">
        <NavMenu />
      </div>
    </div>
  );
}
