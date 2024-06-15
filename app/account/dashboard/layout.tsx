import AccountNav from '@/components/account/AccountNav';

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row w-full h-screen">
      <nav className="min-w-max border-r-2 border-border	">
        <AccountNav />
      </nav>
      <main className="grow">{children}</main>
    </div>
  );
}
