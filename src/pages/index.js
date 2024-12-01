import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { GovApproach } from "@/components/organisms/home/gov-approach";
import AboutUs from "@/components/organisms/home/about-us";
import { Footer } from "@/components/organisms/home/footer";
import { GoArrowRight } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="relative pb-20 xl:pb-32 overflow-hidden hero-section">
        <nav className="py-9 mb-12 md:mb-24">
          <div className="container px-4 mx-auto">
            <div className="flex items-center relative justify-between">
              <Image
                src={"/images/logoss.png"}
                width={180}
                height={150}
                alt="logo"
              />
              <div className="lg:hidden ml-auto">
                <button className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                  <FaBarsStaggered />
                </button>
              </div>
              <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                <li className="group relative">
                  <Link
                    className="inline-block text-[18px] text-cherryRed text-offWhite font-medium"
                    href="#"
                  >
                    Home
                  </Link>
                  <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs z-30">
                    <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                      <div className="pb-3 mb-3 border-b border-gray-100">
                        <Link
                          className="block py-3 px-4 text-[18px] text-cherryRed hover:bg-lightGreen hover:text-offWhite rounded-lg"
                          href="#"
                        >
                          Home
                        </Link>
                        <Link
                          className="block py-3 px-4 text-[18px] text-cherryRed hover:bg-lightGreen hover:text-offWhite rounded-lg"
                          href="#"
                        >
                          Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    className="inline-block text-[18px] text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block text-[18px] text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block text-[18px] text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    How We Work
                  </Link>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
        <div className="container px-4 mx-auto relative">
          <div className="text-start">
            <h1 className="max-w-[650px] font-heading text-3xl xs:text-6xl md:text-6xl xl:text-10xl font-bold text-offWhite mb-5">
              Unlock the Door to Your Future Abroad
            </h1>
            <p className="text-md lg:text-[21px] text-white max-w-[450px]">
              Indias Best Next Step Launch Your Global Journey with Our Startup
              Guide
            </p>
            <div className="flex justify-start mt-5">
              <button className="bg-green text-sm lg:text-lg flex items-center px-4 py-3 rounded-lg gap-3 text-offWhite hover:text-green hover:bg-white font-[400] transition-colors duration-300">
                Meet The Expert <GrUserExpert />
              </button>
            </div>

            <div className="flex gap-3 items-center mt-5">
              <GoArrowRight className="text-white" />
              <p className="text-[14px] text-white">
                {" "}
                for a New Adventure ? We'll Help You Get There
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      {/* <LeaderShip /> */}
      <GovApproach />
      <Footer />
    </>
  );
}
