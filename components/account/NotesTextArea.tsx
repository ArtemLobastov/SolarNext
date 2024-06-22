import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
type Props = {
  notes: string[] | null;
};
export default function NotesTextArea({ notes }: Props) {
  return (
    <div className="grid w-full gap-2">
      <ul>
        {notes?.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <Textarea placeholder="Type your message here" />
      <Button variant={'outline'}>Add note</Button>
    </div>
  );
}
