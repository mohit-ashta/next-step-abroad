import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const AboutUs = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="uppercase text-green text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2 items-center"
        >
          <FaTelegramPlane className="text-green" size={22} />
          Next Step Abroad
        </Link>
        <div className="lg:text-start text-center flex lg:flex-row flex-col justify-between items-center mb-10">
          <h2 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-4 text-green">
            <span className="font-light mr-3 text-black">About</span>Us
          </h2>
          <p className="text-black text-md font-mono font-light max-w-[700px] ms-auto">
            Welcome to Next Step Abroad, your trusted guide for navigating the
            next chapter of your journey abroad. Whether you’ve just completed
            your IELTS or are planning to pursue studies or career opportunities
            overseas, we’re here to make the process smoother and more informed.
          </p>
        </div>
        <div className="lg:flex">
          <div className="h-[550px]">
            <Image
              src="/images/hero.avif"
              alt="Hero image of Next Step Abroad"
              className="object-cover w-full rounded-2xl h-full"
              width={1000}
              height={1000}
            />
          </div>
          <div className="bg-mirrorGreen2 p-8 lg:m-10 m-5 rounded-2xl relative lg:-left-32 bottom-1 lg:w-1/2">
            <h5 className="text-center text-md lg:text-lg font-medium font-heading mb-4 text-white">
              Our Key Features
            </h5>
            <div className="text-md flex flex-col gap-4 text-white font-light">
              {[
                {
                  title: "What Our Location Offers",
                },
                {
                  title: "Expert Support Team",
                },
                {
                  title: "Learn About the Culture in Abroad",
                },
                {
                  title: "Find the Right Place to Live",
                },
                {
                  title: "Manage Your Money",
                },
                {
                  title: "Prepare for Your Studies",
                },
                {
                  title: "Stay Healthy and Safe",
                },
                {
                  title: "Build a Support System",
                },
                {
                  title: "End-to-End Services",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <FaLeaf />
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
