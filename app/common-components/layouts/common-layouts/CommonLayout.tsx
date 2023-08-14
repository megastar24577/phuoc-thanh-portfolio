import Image from "next/image";
function CommonLayout() {
  return (
    <div className="overlay">
      <div className="absolute left-0 bottom-12">
        <Image
          src="/layout/two_flower.svg"
          width={300}
          height={600}
          alt="two_flower_overlay"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <Image
          src="/layout/vine-leaves.svg"
          width={100}
          height={600}
          alt="sunflower_overlay"
        />
      </div>
    </div>
  );
}

export default CommonLayout;
