import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function NotesTextArea() {
  return (
    <div className="grid w-full gap-2">
      <p>Contact person - Patrick. Phone 742692</p>
      <Textarea placeholder="Type your message here." />
      <Button variant={'outline'}>Add note</Button>
    </div>
  );
}
