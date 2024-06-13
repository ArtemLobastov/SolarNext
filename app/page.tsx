import { Button } from '@/components/ui/button';
import HeaderMenu from '@/components/HeaderMenu';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import LeadFormDialog from '@/components/LeadFormDialog';
export default function Home() {
  return (
    <>
      <div className="bg-black fixed  w-full h-full  z-0">
        <video
          width="100%"
          height="100%"
          autoPlay={true}
          playsInline
          muted={true}
          loop={true}
          className="w-full h-full object-cover opacity-75"
        >
          <source
            src="videos/solar-panels-hero-desktop.webm"
            type="video/webm"
          />
          Tesla solar panels video
        </video>
      </div>

      <div className="relative z-10  flex flex-col items-center justify-center h-full">
        <HeaderMenu color="primary" />
        <main className="flex flex-col items-center justify-center h-full gap-20">
          <div className="flex flex-col items-center justify-end w-full gap-10 pt-20">
            <h1 className="text-5xl text-slate-100">Solar Next</h1>
            <h2 className="text-2xl text-slate-100">
              Zero electrical bills today
            </h2>
          </div>

          <LeadFormDialog />
        </main>
      </div>
    </>
  );
}
