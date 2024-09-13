"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import Image from "next/image";
import noodleImage from "@/assets/noodle.png";
import pic from "@/assets/pic3.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-0 md:pb-0 bg-white overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-2">
        <div className="md:flex md:items-center">
          <div className="md:w-[678px]">
            <div className="tag">
              <b>MetripMarigold Farms Welcomes you</b>
            </div>
            <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from from-black to-[#096d4c] text-transparent bg-clip-text mt-6">
              Savor the Freshness of MetripMarigold&apos;s Farm-Fresh Harvests
            </h1>
            <p className="text-xl text-[#005138] tracking-tight mt-6">
              Celebrate the freshness of your farmland products by embracing the
              journey from soil to table. Savor the vibrant flavors and natural
              goodness of each harvest, knowing that you're enjoying the purest,
              healthiest produce. Share this bounty with loved ones, and take
              pride in the hard work that nurtures your crops. Fresh from the
              farm, our products bring a taste of nature's best directly to your
              plate.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary bg-[#1d4c2d]">
                Get 20% off
              </button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/*<div className="mt-20 md:relative md:mt-0 md:h-[648px] md:flex-1 ">
            <Image
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={165}
              height={120}
              alt="Cylinder image"
              className="hidden md:block md:-top-8 md:-left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              alt="noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>*/}
          <div className="mt-20 md:relative md:mt-0 md:h-[648px] md:flex-1 hidden md:block">
            <motion.img
              src={pic.src}
              alt="pic3"
              className="md:absolute md:h-full md:w-[530px] md:max-w-none md:left-6 lg:left-10"
              //  animate={{ translateY: [-30, 30] }}
              // transition={{
              //  repeat: Infinity,
              // repeatType: "mirror",
              // duration: 4,
              // ease: "easeInOut",
              //}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
