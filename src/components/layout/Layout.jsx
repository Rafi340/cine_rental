import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[2.5rem]">
          <Sidebar />

          <div className="content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
