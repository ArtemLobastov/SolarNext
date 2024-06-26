import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CreateUserForm from './CreateUserForm';

export default function CreateUser({
  setShowAddUser,
}: {
  setShowAddUser: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  return (
    <Card className="overflow-hidden md:w-1/2">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            New user
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-sm p-3 grid grid-cols-1 gap-3  ">
        <CreateUserForm setShowAddUser={setShowAddUser} />
      </CardContent>
    </Card>
  );
}
