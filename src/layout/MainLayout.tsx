import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Pages render here */}
      <Footer/>
      
    </>
  );
};

export default MainLayout;