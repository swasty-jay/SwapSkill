import { Outlet } from "react-router-dom";
import { Navbar } from "../custom/NavBar";
import Footer from "../custom/Footer";

function AppLayOut() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayOut;
