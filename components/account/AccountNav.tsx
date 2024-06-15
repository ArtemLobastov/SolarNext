import Image from 'next/image';
import { Button } from '../ui/button';
import AccordionMenu from './AccordionMenu';
import Link from 'next/link';

export default function AccountNav() {
  return (
    <div className="bg-primary-background h-screen py-7 px-5 flex flex-col gap-7">
      <div className="grid grid-cols-[0.5fr_1fr] gap-x-2 ">
        <Image
          src="/images/user_avatar.jpg"
          alt="user-avatar"
          width={40}
          height={40}
          className="row-span-2 self-center"
        />
        <p className="">User Name</p>
        <p className="text-xs">Admin</p>
      </div>

      <AccordionMenu />
      <Button variant={'outline'} asChild>
        <Link href={'/auth'}>Logout</Link>
      </Button>
    </div>
  );
}
