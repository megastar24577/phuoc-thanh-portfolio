import SecondaryHeader from "@/app/common-components/headers/SecondaryHeader";

function TechnologiesIndex() {
  return (
    <div className="relative mt-80 w-4/5 mx-auto h-screen">
      <SecondaryHeader headerContent={"TECHNICAL STACK"} />
      <div className="grid grid-cols-5"></div>
    </div>
  );
}

export default TechnologiesIndex;
