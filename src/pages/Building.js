import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BuildImg from "../components/BuildImg";
import BuildInfo from "../components/BuildInfo";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

const Building = () => {
  /*test*/
  const [floor, setFloor] = useState(1);
  const [bfloor, setBfloor] = useState(1);

  const pf = (f) => {
    setFloor(f);
  };

  const bdf = (f) => {
    setBfloor(f);
  };

  useEffect(() => {
    bdf(0);
  }, [floor, bfloor]);

  const { state } = useLocation();
  return (
    <div>
      <Head title={state.b_name} />
      <div className="build_wrap">
        {state.b_name === "정보공학관" ? (
          <div className="build_main">
            <BuildImg b_name={state.b_name} pf={pf} bf={bfloor} />
            <BuildInfo b_name={state.b_name} floor={floor} bdf={bdf} />
          </div>
        ) : (
          <div className="none_image">
            <FontAwesomeIcon icon={faFaceSadTear} size="2x" />
            <h2>&nbsp;아직 사진이 없습니다...</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Building;
