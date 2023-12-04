import { ThemeToggle } from "@/components/theme-tooggle";
import { MainNav } from "./main-nav";
import MobileMenu from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b mt-1">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2 px-2 ">
            <ThemeToggle />
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
