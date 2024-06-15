import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl">Login form</h1>
      <Input type="text" placeholder="login" />
      <Input type="password" placeholder="password" />
      <Button variant={'outline'} size={'lg'} asChild>
        <Link href="account/dashboard">Login</Link>
      </Button>
    </div>
  );
}
