import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Programs from "../components/Programs"
import MainLayout from "../layout/MainLayout";
import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import Refer from "../pages/Refer";
import Explore from "../pages/Explore";
import Community from "../pages/Community";
import Studentambassador from "../pages/Studentambassador";
import BlogDetail from "../pages/BlogDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* All routes inside layout */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Route>


        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/programs" element={<Programs />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Community />} />
        <Route path="/student-ambrastor" element={<Studentambassador/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        
        




        
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;