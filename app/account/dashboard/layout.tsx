import AccountNav from '@/components/account/AccountNav';

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <nav className="min-w-max">
        <AccountNav />
      </nav>
      <main className="">{children}</main>
    </div>
  );
}
