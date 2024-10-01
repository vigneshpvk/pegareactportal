import Mywork from "../../pages/Mywork";
import Report from "../../pages/Report";
import Profile from "../../pages/Profile";
import Dashboard from "../../pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mywork" element={<Mywork />} />
      <Route path="/report" element={<Report />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routers;
