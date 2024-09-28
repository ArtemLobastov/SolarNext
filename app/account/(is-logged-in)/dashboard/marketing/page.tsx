'use server';
import { Button } from '@/components/ui/button';
import { BsTools } from 'react-icons/bs';
import prisma from '@/lib/db';
import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im';
import { addToDo } from './toDosPrisma/addTodoAction';
import { InstallationsDonePieChart } from '@/components/account/InstallationsDonePieChart';

export default async function MarketingPage() {
  const toDos = await prisma.toDo.findMany({});

  const toDosCount = await prisma.toDo.count();
  return (
    <div className="flex-col flex items-center justify-center gap-3 mt-10">
      <BsTools size={'100'} />
      <h1 className=" text-5xl">Under Construction...</h1>
      <Button variant={'secondary'} className="">
        Get Todos
      </Button>
      <h1>Todos: ({toDosCount})</h1>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id} className="grid grid-cols-5 gap-2">
            <h2 className="text-red-400 font-bold">{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.completed ? <ImRadioChecked /> : <ImRadioUnchecked />}</p>
          </li>
        ))}
      </ul>
      <form className="grid gap-6" action={addToDo}>
        <label>Title</label>
        <input type="text" name="title" />
        <label>Description</label>
        <input type="text" name="description" />
        <label>Completed</label>
        <input type="checkbox" name="completed" />

        <Button type="submit">Add Todo</Button>
      </form>
      <InstallationsDonePieChart />
    </div>
  );
}
