import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BuildImg from "../components/BuildImg";
import BuildInfo from "../components/BuildInfo";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Building = () => {
  /*test*/
  const [floor, setFloor] = useState("1");
  const pf = (f) => {
    console.log(f);
    setFloor(f);
  };

  const { state } = useLocation();
  return (
    <div>
      <Head title={state.b_name} />
      <div className="build_wrap">
        <div className="build_main">
          <BuildImg b_name={state.b_name} pf={pf} />
          <BuildInfo b_name={state.b_name} floor={floor} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Building;
