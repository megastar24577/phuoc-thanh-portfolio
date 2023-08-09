import NavBarLayout from "./common-components/layouts/navbar/NavBarLayout";

export default function Home() {
  return (
    <div className="section-wrapper">
      <NavBarLayout />
      <div className="absolute top-20">
        <div className="">Text</div>
      </div>
    </div>
  );
}
