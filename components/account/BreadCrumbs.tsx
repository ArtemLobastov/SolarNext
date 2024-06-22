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
          <div key={item} className="flex flex-row items-center gap-3">
            <BreadcrumbItem>
              <BreadcrumbLink href={`/account/${item.toLowerCase()}`}>
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
