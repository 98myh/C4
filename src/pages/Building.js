import React from "react";
import { useLocation } from "react-router-dom";
import BuildImg from "../components/BuildImg";
import BuildInfo from "../components/BuildInfo";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Building = () => {
  const { state } = useLocation();
  return (
    <div>
      <Head title={state.b_name} />
      <div className="build_wrap">
        <div className="build_main">
          <BuildImg b_name={state.b_name} />
          <BuildInfo b_name={state.b_name} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Building;
