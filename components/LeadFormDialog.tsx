import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import LeadForm from './LeadForm';

export default function LeadFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="lg">
          Get Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Contact Details</DialogTitle>
          <DialogDescription>
            Our Advisors can walk you through our energy products, financing
            quotes, eligibility for local incentives and answer any questions
            you may have.
          </DialogDescription>
        </DialogHeader>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
}
