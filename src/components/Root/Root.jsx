import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto lg:my-8">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
