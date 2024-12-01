import { processData } from "@/constants/processData";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa6";

export const EduCounseling = () => {
  const items = [1, 2, 3, 4, 5, 6,7,8,9];
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <section className="relative py-20 ">
      <div className="container px-4 mx-auto">
        <Link
          href={"/"}
          class="uppercase text-green text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2"
        >
          <FaLeaf className="text-green" size={22} />New leaf
        </Link>
        <h6 class="text-center text-xl lg:text-2xl font-bold font-heading mb-3">
          <span className="font-[100] mr-2">Process</span>in Practice
        </h6>
        <h2 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-14">
          <span className="font-[100] mr-2">EDUCATION</span>COUNSELING
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {processData.map((item, index) => (
            <div
              key={item}
              className=""
            >
              <div
                className={`relative pt-16 pb-12 px-8 border rounded-lg text-center ${
                  hoveredIndex === index
                    ? "border-none shadow-xl bg-mirrorGreen"
                    : "border-green bg-offWhite"
                }`}
              >
                <span
                  className={`absolute bg-gray-200 top-0 inset-x-0 -mt-6 flex justify-center items-center w-16 h-16 mx-auto rounded-full
                  )}  ${
                    hoveredIndex === index ? "text-green" : " text-zinc-500"
                  }`}
                >
                  {item.id}
                </span>
                <h3
                  className={`mb-6 text-2xl font-semibold font-heading  ${
                    hoveredIndex === index ? "text-offWhite" : "text-zinc-500"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${
                    hoveredIndex === index ? "text-offWhite" : "text-zinc-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
