import Header from "../Components/Header";
import Company from "../LandingPage/Company";
import DreamsJob from "../LandingPage/DreamsJob";
import JobCategory from "../LandingPage/JobCategory";
import Testimonials from "../LandingPage/Testimonials";
import Work from "../LandingPage/Work";
const HomePages = () => {
  return (
    <div className="homePage-main">
      <Header />
      <DreamsJob />
      <Company />
      <JobCategory />
      <Work />
      <Testimonials />
    </div>
  );
};

export default HomePages;
