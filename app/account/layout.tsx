import AccountNav from '@/components/account/AccountNav';

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <nav className="min-w-max border-r-2 border-border">
        <AccountNav />
      </nav>
      <main className="grow">
        <div className="h-full bg-primary-foreground p-5 ">{children}</div>
      </main>
    </div>
  );
}
