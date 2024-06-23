'use client';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export function BreadcrumbAccount() {
  const pathname = usePathname();
  const way = pathname.split('/').slice(1);
  const page = way.at(-1);

  return (
    <Breadcrumb className="invisible md:visible">
      <BreadcrumbList>
        {page !== 'dashboard' && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/account/dashboard">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {way.slice(2, -1).length > 0 &&
          way.slice(2, -1).map((route) => (
            <div key={route} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="capitalize"
                  href={`/account/dashboard/${route}`}
                >
                  {route}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          ))}

        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
