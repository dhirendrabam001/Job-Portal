import Header from "../Components/Header";
import Company from "../LandingPage/Company";
import DreamsJob from "../LandingPage/DreamsJob";
import JobCategory from "../LandingPage/JobCategory";
const HomePages = () => {
  return (
    <div className="homePage-main">
      <Header />
      <DreamsJob />
      <Company />
      <JobCategory />
    </div>
  );
};

export default HomePages;
