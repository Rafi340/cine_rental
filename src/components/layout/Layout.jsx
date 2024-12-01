import { useContext } from "react";
import { ThemeContext } from "../../context/index";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[2.5rem]">
          <Sidebar />

          <div className="content">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
