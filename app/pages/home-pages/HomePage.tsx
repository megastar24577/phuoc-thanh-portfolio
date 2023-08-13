"use client";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Image from "next/image";

function HomePage() {
  return (
    <div className="absolute top-36 right-0 left-0 h-4/5 w-full">
      <Image
        src="/layout/flower.svg"
        width={600}
        height={600}
        alt="Profile Image"
        className="absolute left-0 h-full w-full"
      />
      <div className="grid grid-cols-5 w-full h-full">
        <div className="col-span-3 left-section w-full relative h-full z-10">
          <LeftSection />
        </div>
        <div className="col-span-2 right-section w-full relative">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
