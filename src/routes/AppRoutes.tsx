import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Programs from "../pages/Explore-Programs/Programs/Programs"
import MainLayout from "../layout/MainLayout";
import Blogs from "../pages/Blogs";
import Refer from "../pages/Refer";
import Explore from "../pages/Explore";
import Community from "../pages/Community";
import Studentambassador from "../pages/Studentambassador";
import BlogDetail from "../pages/BlogDetail";
import CoinPage from "../pages/CoinsPage";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import Certificate from "../pages/Certificate/Certificate";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";

import CourseDetails from "../pages/Explore-Programs/CourseDetails/CourseDetails"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* --- MAIN WEBSITE ROUTES (Uses standard Navbar/Footer) --- */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Note: I moved these to the Dashboard Layout below assuming 
              you want the sidebar visible on these pages since they are 
              linked in the sidebar! If you want them in the MainLayout instead,
              move them back up here. */}
        </Route>

        {/* --- DASHBOARD ROUTES (Uses Sidebar, Topbar, RightSidebar) --- */}
        {/* We use a nested route structure here. The DashboardLayout acts as the shell. */}
        {/* Notice we changed path="/" to a route group wrapping the paths */}
        <Route element={<DashboardLayout />}>
          
          {/* The main dashboard page */}
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* These pages will now render inside the Dashboard Layout (Center area) */}
          <Route path="/programs" element={<Explore />} />
          <Route path="/explore-programs" element={<Programs />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/coins" element={<CoinPage />} />
          <Route path="/student-ambassador" element={<Studentambassador />} />
          <Route path="/community" element={<Community />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
         <Route path="/course/:category" element={<CourseDetails />} />


          
          {/* Add these later when you create them */}
          {/* <Route path="/dashboard/certificates" element={<CertificatesPage />} /> */}
          {/* <Route path="/dashboard/rewards" element={<RewardsPage />} /> */}
          
        </Route>

        {/* --- 404 PAGE --- */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;