import { leadersData } from "@/constants/leader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

export const LeaderShip = () => {
  return (
    <section className="bg-mirrorGreen2 pt-24 pb-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Link
            href={"/"}
            class="uppercase text-black text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2"
          >
            <FaLeaf className="text-black" size={22} />
            New leaf
          </Link>
          <h2 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-4 text-black">
            <span className="font-[100]">Meet</span> Our Leadership
          </h2>
          <p className="text-black text-md font-mono">
            At Newleaf, our leadership team is composed of dedicated
            professionals with extensive experience in education and student
            development. Our leaders are passionate about fostering a supportive
            and enriching environment for all students. They bring a wealth of
            knowledge and a commitment to excellence, ensuring that our
            institution remains at the forefront of academic innovation and
            student success. With their visionary guidance, we strive to empower
            every student to reach their full potential and achieve their
            dreams.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {leadersData.map((leader, index) => (
            <div key={index} className="w-full lg:w-1/3 p-4">
              <div className="relative rounded-2xl pt-7 mb-12 lg:mb-0 group">
                <Image
                  width={1000}
                  height={1000}
                  className="mx-auto h-72 object-cover rounded-xl object-center"
                  src={leader.image}
                  alt={leader.name}
                />
                <div className="absolute -bottom-12 left-4 right-4">
                  <div className="bg-offWhite rounded-xl p-4">
                    <p className="text-green text-lg font-semibold mb-1 group-hover:opacity-0 ">
                      {leader.name}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-green text-opacity-70 text-sm group-hover:opacity-0 ">
                        {leader.title}
                      </p>
                      <div className="flex gap-4">
                        {leader.social.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.href}
                            className="inline-block opacity-50 hover:opacity-100 hover:text-green transition duration-200"
                          >
                            <span className="hover:text-green">
                              {social.icon}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl px-6 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center flex flex-col gap-3 justify-center">
                  <div className="flex justify-center">
                    <FaLeaf className="text-green" size={22} />
                  </div>
                  <p className="text-green text-lg font-semibold mb-0">
                    {leader.name}
                  </p>
                  <p className="text-green text-opacity-70 text-sm m-0">
                    {leader.title}
                  </p>
                  {leader?.description.map((desc, idx) => (
                    <p key={idx} className="text-green text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
