import { ThemeToggle } from "@/components/theme-tooggle";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b mt-1">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}