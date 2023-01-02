import React from "react";
import Footer from "../components/Footer";
import Head from "../components/Head";
import LogoBox from "../components/LogoBox";

const Home = () => {
  return (
    <div className="home">
      <Head title="동의대학교" />
      <LogoBox />
      <Footer />
    </div>
  );
};

export default Home;
