import LoginForm from '@/components/LoginForm';

export default function AuthPage() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-muted">
      <div className="w-2/5 min-w-min flex flex-col gap-5 bg-card rounded-md p-10">
        <h1 className="text-3xl">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
