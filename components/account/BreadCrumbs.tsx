import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
type Props = {
  way: string[];
};

export function BreadcrumbAccount({ way }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {way.map((item) => (
          <>
            <BreadcrumbItem key={item}>
              <BreadcrumbLink href={`/account/${item.toLowerCase()}`}>
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
