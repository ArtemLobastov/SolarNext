import React from 'react';
import HeaderMenu from '@/components/HeaderMenu';
import Image from 'next/image';

export default function page() {
  return (
    <>
      <main className="">
        <div className=" min-h-screen">
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-accent bg-opacity-50 text-primary">
            <header className="mb-8 pb-10">
              <h1 className="text-5xl font-bold">About Our Company</h1>
            </header>
            <Image
              alt="installers on the roof"
              src="/images/installers.jpg"
              width={250}
              height={250}
              className="rounded-md"
            ></Image>
            <section className="max-w-4xl text-start">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-8">
                Our mission is to revolutionize the renewable energy industry by
                providing cutting-edge solutions and sustainable practices. We
                aim to make solar energy accessible and affordable for everyone.
              </p>

              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="mb-8">
                We envision a world where clean energy powers every home,
                business, and community, reducing our carbon footprint and
                preserving the planet for future generations.
              </p>

              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside mb-8">
                <li>
                  Innovation: Continuously pushing the boundaries of technology.
                </li>
                <li>
                  Sustainability: Promoting eco-friendly practices in every
                  step.
                </li>
                <li>
                  Integrity: Upholding the highest standards of transparency and
                  ethics.
                </li>
                <li>
                  Customer-Centric: Focusing on delivering exceptional value and
                  service.
                </li>
              </ul>

              <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
              <div className="flex flex-wrap justify-start">
                {/* Example team members */}
                <div className="p-4">
                  {/* <Image
                    src="/team-member-1.jpg"
                    width={150}
                    height={150}
                    className="rounded-full"
                    alt="Team Member 1"
                  /> */}
                  <h3 className="mt-2 font-semibold">John Doe</h3>
                  <p>CEO</p>
                </div>
                <div className="p-4">
                  {/* <Image
                    src="/team-member-2.jpg"
                    width={150}
                    height={150}
                    className="rounded-full"
                    alt="Team Member 2"
                  /> */}
                  <h3 className="mt-2 font-semibold">Jane Smith</h3>
                  <p>CTO</p>
                </div>
                {/* Add more team members as needed */}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
