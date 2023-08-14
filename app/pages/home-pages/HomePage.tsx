"use client";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Image from "next/image";

function HomePage() {
  return (
    <div className="relative top-36 w-full h-screen">
      <div className="absolute h-4/5 w-full">
        <Image
          src="/layout/flower.svg"
          width={600}
          height={600}
          alt="Profile Image"
          className="absolute left-0 h-full w-full"
        />
        <div className="grid grid-cols-5 w-full h-full relative">
          <div className="col-span-3 left-section w-full relative h-full z-10">
            <LeftSection />
          </div>
          <div className="col-span-2 right-section w-full relative">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
