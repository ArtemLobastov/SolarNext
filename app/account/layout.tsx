import Link from 'next/link';
import Image from 'next/image';
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { BreadcrumbAccount } from '@/components/account/BreadCrumbs';
import Heading from '@/components/account/Heading';
import { ModeToggle } from '@/components/ui/darkmode-btn';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IoDocumentsOutline } from 'react-icons/io5';
import { HiOutlineCurrencyEuro } from 'react-icons/hi2';
import { ImProfile } from 'react-icons/im';
import { VscTools } from 'react-icons/vsc';

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    //TODO auto resize nav width
    //TODO fixed nav on mobile
    //FIXME cannot close nav on mobile screen on /users
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[230px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="fixed flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="grid grid-cols-[0.3fr_1fr] gap-x-2 ">
              <Image
                src="/images/user_avatar.jpg"
                alt="user-avatar"
                width={40}
                height={40}
                className="row-span-2 self-center"
              />
              <p className="font-semibold">Artem Lobastov</p>
              <p className="text-xs">Admin</p>
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/account/dashboard"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/account/dashboard/sales"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HiOutlineCurrencyEuro className="h-4 w-4" />
                Sales
              </Link>
              <Link
                href="/account/dashboard/clients"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ImProfile className="h-4 w-4" />
                Clients
              </Link>
              <Link
                href="/account/dashboard/stock"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Stock
              </Link>

              <Link
                href="/account/dashboard/installations"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <VscTools className="h-4 w-4" />
                Installations
              </Link>
              <Link
                href="/account/dashboard/grants"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <IoDocumentsOutline className="h-4 w-4" />
                Grants
              </Link>
              <Link
                href="/account/dashboard/users"
                className="active:bg-muted active:text-primary  flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CircleUser className="h-4 w-4" />
                Users
              </Link>
              <Button className="mt-10" variant={'outline'} asChild>
                <Link href={'/auth'}>Logout</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className=" flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <div className="grid grid-cols-[0.1fr_1fr]   ">
                  <Image
                    src="/images/user_avatar.jpg"
                    alt="user-avatar"
                    width={40}
                    height={40}
                    className="row-span-2 self-center"
                  />
                  <p className="font-semibold">Artem Lobastov</p>
                  <p className="text-xs">Admin</p>
                  <span className="sr-only">Account</span>
                </div>

                <Link
                  href="/account/dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/account/dashboard/sales"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <HiOutlineCurrencyEuro className="h-5 w-5" />
                  Sales
                </Link>
                <Link
                  href="/account/dashboard/clients"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <ImProfile className="h-5 w-5" />
                  Clients
                </Link>
                <Link
                  href="/account/dashboard/stock"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Stock
                </Link>
                <Link
                  href="/account/dashboard/installations"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <VscTools className="h-5 w-5" />
                  Installations
                </Link>
                <Link
                  href="/account/dashboard/grants"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <IoDocumentsOutline className="h-5 w-5" />
                  Grants
                </Link>
                <Link
                  href="/account/dashboard/users"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <CircleUser className="h-5 w-5" />
                  Users
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Heading />
          <BreadcrumbAccount />
          <ModeToggle />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
