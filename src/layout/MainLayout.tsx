import Header from "../components/layout/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
