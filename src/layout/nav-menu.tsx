"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem>
                <HoverCard>
                  <HoverCardTrigger className="text-black dark:text-white cursor-pointer ">
                    Blockchain Development
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <ListItem href="/" title="Public Blockchain"></ListItem>
                    <ListItem
                      href="/front-end-development"
                      title="Private Blockchain"
                    ></ListItem>
                    <ListItem
                      href="/front-end-development"
                      title="AMB (Amazon Managed Blockchain)"
                    ></ListItem>
                  </HoverCardContent>
                </HoverCard>
              </ListItem>
              <ListItem
                href="/services/blockchain-solution-architecture"
                title="Blockchain Architecture"
              ></ListItem>
              <ListItem
                href="/services/front-end-development"
                title="Front-End Development"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>BaaS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <ListItem
                href="/baas/case-studies"
                title="Case Studies"
              ></ListItem>
              <ListItem href="/baas/health-care" title="Healthcare"></ListItem>
              <ListItem href="/baas/real-estate" title="RealEstate"></ListItem>
              <ListItem
                href="/baas/ecommerce"
                title="E-Commerce
"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ReadyMade</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem
                href="/readymade/mvp"
                title="Dev Templates(MVPs)"
              ></ListItem>
              <ListItem
                href="/readymade/customizable"
                title="Customizable"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/aboutus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Get In Touch
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
