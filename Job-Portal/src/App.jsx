import "./App.css";
import "./styles/colors.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./Pages/FindTalent";
import UploadJobs from "./Pages/UploadJobs";
import AboutUs from "./Pages/AboutUs";
import HomePages from "./HomePage.jsx/HomePages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/find-jobs" element={<FindJobs />}></Route>
          <Route path="/find-talent" element={<FindTalent />}></Route>
          <Route path="/upload-jobs" element={<UploadJobs />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
        <HomePages />
      </BrowserRouter>
    </>
  );
}

export default App;
