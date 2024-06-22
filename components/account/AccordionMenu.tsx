import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BsBoxes } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineCurrencyEuro } from 'react-icons/hi2';
import { ImProfile } from 'react-icons/im';
import { VscTools } from 'react-icons/vsc';
import { IoDocumentsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

import Link from 'next/link';

export default function AccordionMenu() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-0">
          <div className="flex gap-2 items-center">
            <MdOutlineSpaceDashboard />
            <Link href={'/account/dashboard'}>
              <p className="py-4 font-medium hover:underline">Dashboard</p>
            </Link>
          </div>
        </AccordionItem>

        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <HiOutlineCurrencyEuro />
              <p>Sales</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Add Sale</li>
              <li>Manage Sales</li>
              <li>Deposits</li>
              <li>Sellers</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <ImProfile />
              <p>Clients</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className=" grid items-center">
              <Link
                href={'/account/dashboard/clients'}
                className=" py-3  hover:underline "
              >
                Manage clients
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <IoDocumentsOutline />
              <p>Grants</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Upload documents</li>
              <li>Manage Grants</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <BsBoxes />
              <p>Stock</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Order form</li>
              <li>Manage stock</li>
              <li>Deliveries</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <VscTools />
              <p>Installations</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Schedule</li>
              <li>Installers</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <FiUsers />
              <p>Users</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Add user</li>
              <li>Manage Users</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
