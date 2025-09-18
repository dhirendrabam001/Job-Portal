import "./App.css";
import "./styles/colors.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import UploadJobs from "./Pages/UploadJobs";
import AboutUs from "./Pages/AboutUs";
import HomePages from "./HomePage.jsx/HomePages";
import Header from "./Components/Header";
import { MantineProvider } from "@mantine/core";
// import Footer from "./LandingPage/Footer";
// import FooterLast from "./LandingPage/FooterLast";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <BrowserRouter>
          <div className="homePage-main">
            <Header />
            <Routes>
              <Route path="/" element={<HomePages />}></Route>
              <Route path="/find-jobs" element={<FindJobs />}></Route>
              <Route path="/find-talent" element={<FindTalent />}></Route>
              <Route path="/upload-jobs" element={<UploadJobs />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
            </Routes>
            {/* <Footer /> */}
            {/* <FooterLast /> */}
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
