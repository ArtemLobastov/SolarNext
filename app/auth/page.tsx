import LoginForm from '@/components/LoginForm';

export default function AuthPage() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-muted">
      <div className="w-1/3 min-w-min xs:w-full flex flex-col gap-5 bg-card rounded-md p-10 border-2 border-border">
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
