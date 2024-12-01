import { itemsData } from "@/constants/itemsData";
import React from "react";
import { Card } from "../../card";
import { FaLeaf } from "react-icons/fa6";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export const GovApproach = () => {
  return (
    <section class="lg:py-24 py-20 bg-offWhite">
      <div class="container mx-auto px-4">
        <Link
          href={"/"}
          class="uppercase text-green text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2"
        >
           <FaTelegramPlane className="text-green" size={22} />
          Next Step Abroad
        </Link>
        <h2 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-14">
          <span className="font-[100] mr-3">Why We</span><span className="text-green">Choose Us</span>
        </h2>
        <div class="grid lg:grid-cols-2 gap-10">
          {itemsData.map((item, id) => (
            <Card
              key={id}
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
