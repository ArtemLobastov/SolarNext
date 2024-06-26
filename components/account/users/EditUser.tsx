import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CreateUserForm from './CreateUserForm';
import EditUserForm from './EditUserForm';
import { IUser } from '@/lib/usersDB';
export default function EditUser({
  userId,
  setShowEditUser,
}: {
  userId: number;
  setShowEditUser: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  //TODO change to activeuser using active user fetch from DB using id
  const userDummyData: IUser = {
    id: 1,
    name: 'Artem Lobastov',
    email: 'artem.lobastov@example.mt',
    password: 'securePass1!',
    phone: '77767543',
    role: 'admin',
    activated: true,
    registered: '2023-01-02',
    avatarSrc: 'user_avatar.jpg',
  };
  return (
    <Card className="overflow-hidden md:w-1/2">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-2xl">
            Edit user
          </CardTitle>
          <CardDescription>
            <span className="text-sm ">Id:{userDummyData.id}</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm p-3 grid grid-cols-1 gap-3  ">
        <EditUserForm
          userData={userDummyData}
          setShowEditUser={setShowEditUser}
        />
      </CardContent>
    </Card>
  );
}
