'use client';
import { usePathname } from 'next/navigation';
export default function Heading() {
  const pathname = usePathname();
  const heading = pathname.split('/').reverse().at(0);
  return <h1 className="text-5xl font-semibold capitalize">{heading}</h1>;
}
