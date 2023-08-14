import CommonLayout from "./common-components/layouts/common-layouts/CommonLayout";
import NavBarLayout from "./common-components/layouts/navbar/NavBarLayout";
import About from "./pages/about-pages/About";
import HomePage from "./pages/home-pages/HomePage";
import TechnologiesIndex from "./pages/technologies-pages/TechnologiesIndex";

export default function Home() {
  return (
    <div className="section-wrapper bg-light-green/[0.5]">
      <NavBarLayout />
      <CommonLayout />
      <HomePage />
      <About />
      <TechnologiesIndex />
    </div>
  );
}
