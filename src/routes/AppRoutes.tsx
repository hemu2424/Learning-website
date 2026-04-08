import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Programs from "../pages/Programs"
import MainLayout from "../layout/MainLayout";
import Blogs from "../pages/Blogs";
import Refer from "../pages/Refer";
import Community from "../pages/Community";
import Studentambassador from "../pages/Studentambassador";
import BlogDetail from "../components/blogs/BlogDetail";
import CoinPage from "../pages/CoinsPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Certificate from "../pages/Certificate";
import Profile from "../pages/Profile";
import EditProfile from "../components/Profile/EditProfile";
import MyPrograms from "../pages/MyPrograms";
import ProgramDetail from "../pages/ProgramDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* --- MAIN WEBSITE ROUTES (Uses standard Navbar/Footer) --- */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />

          
          {/* These pages will now render inside the Dashboard Layout (Center area) */}
          <Route path="/explore-programs" element={<Programs />} />
          <Route path="/my-programs" element={<MyPrograms />} />
          <Route path="/program/:id" element={<ProgramDetail />} />

          <Route path="/refer" element={<Refer />} />
          <Route path="/coins" element={<CoinPage />} />
          <Route path="/student-ambassador" element={<Studentambassador />} />
          <Route path="/community" element={<Community />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />


          
       
          
        </Route>

        {/* --- 404 PAGE --- */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
