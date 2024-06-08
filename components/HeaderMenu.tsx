'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationMenuTriggerStyleSecondary,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Solar system installation',
    href: '/services/installation',
    description:
      'Professional installation of solar panels for your home or business.',
  },
  {
    title: 'Solar system upgrade',
    href: '/services/upgrade',
    description:
      'Enhance the efficiency and performance of your solar system with an upgrade.',
  },
  {
    title: 'Solar system maintance',
    href: '/services/maintance',
    description:
      'Regular maintenance for maximum output from your solar panels.',
  },
  {
    title: 'Commercial Solar Solutions',
    href: '/services/commercial',
    description:
      'Comprehensive solutions for commercial and industrial solar systems.',
  },
];
interface props {
  color: 'primary' | 'secondary';
}
export default function HeaderMenu({ color }: props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                color === 'primary'
                  ? navigationMenuTriggerStyle()
                  : navigationMenuTriggerStyleSecondary()
              }
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger color={color}>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <ListItem className="h-full" href="/tesla" title="Tesla">
                    <Image
                      src="/images/powerwall.webp"
                      alt="tesla powerwall"
                      width={150}
                      height={150}
                    />
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                </NavigationMenuLink>
              </li>
              <ListItem href="/solaredge" title="SolarEdge">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/huawei" title="Huawei">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/heaters" title="Water heaters">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger color={color}>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger color={color}>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
              <ListItem title="About" href="/company/about">
                Our company
              </ListItem>
              <ListItem title="Carrers" href="/">
                Join the team
              </ListItem>
              <ListItem title="Contact" href="/">
                Get in touch
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* LOGIN */}
        <NavigationMenuItem>
          <Link href="/account" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                color === 'primary'
                  ? navigationMenuTriggerStyle()
                  : navigationMenuTriggerStyleSecondary()
              }
            >
              Account
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block  select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
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
ListItem.displayName = 'ListItem';
