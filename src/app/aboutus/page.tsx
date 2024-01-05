import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { OurTeam } from "@/constants/config-data";

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-16 lg:py-24">
      <div className="flex flex-col space-y-8">
        <div className="max-w-max rounded-full border  p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">
            About the company
          </p>
        </div>
        <p className="text-3xl font-bold  md:text-5xl md:leading-10">
          Your Vision, Our Code.
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          Welcome to Chainverse Labs, where innovation, expertise, and passion
          converge to redefine the future of technology. Established in 2021, we
          have quickly emerged as a leader in blockchain services, offering a
          spectrum of solutions that empower businesses worldwide.
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          At Chainverse Labs, we believe in the transformative power of
          blockchain technology. Our dedicated team of professionals is
          committed to pushing the boundaries of what&apos;s possible, turning
          ambitious ideas into reality. With a focus on trust, transparency, and
          security, we bring blockchain solutions to industries ranging from
          healthcare and real estate to e-commerce.
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          Our journey is marked by a commitment to excellence, a passion for
          innovation, and a relentless pursuit of delivering value to our
          clients. Join us on this exciting adventure as we continue to shape
          the digital landscape and unlock the full potential of blockchain for
          businesses around the globe.
        </p>
      </div>
      <div className="mt-16 flex items-center">
        <div className="space-y-6 md:w-3/4">
          <p className="text-3xl font-bold  md:text-4xl">Meet our team</p>
          <p className="max-w-4xl text-base  md:text-xl">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <div></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 gap-y-6 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {OurTeam.map((member, idx) => (
          <div className="rounded-md border" key={idx}>
            <Image
              src={member.image}
              alt={member.name}
              className="h-[300px] w-full rounded-t-md object-cover"
              width={1000}
              height={1000}
            />
            <p className="mt-6 w-full px-2 text-xl font-semibold">
              {member.name}{" "}
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-400 flex justify-between items-center ">
              {member.position}
              <span className="flex justify-center items-center gap-2 text-lg">
                <Link href={""} className="hover:text-white">
                  <FaLinkedinIn />
                </Link>
                <Link href={""} className="hover:text-white">
                  <FaXTwitter />
                </Link>
              </span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
