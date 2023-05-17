import { Outlet } from "react-router-dom";
import Header from "../conmponents/Header";
import Footer from "../conmponents/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
