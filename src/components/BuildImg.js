import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesUp,
  faAnglesDown,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const BuildImg = ({ b_name, pf, bf }) => {
  //bf는 buildDetail에서 클릭한 층 을 BuildInfo를 거쳐
  //Building.js(부모) 컴포넌트로 넘겨줘 BuildImg에서 받은것
  //즉 클릭한 층수를 받아와서 층 수 이미지를 보여주기 위함

  var mf;
  if (b_name === "정보공학관") {
    mf = 9;
  }
  const [floor, setFloor] = useState(1);
  const [buildName, setBuildName] = useState(b_name + floor); //이미지 바꾸기
  const [n, setN] = useState(1);

  //부모 요소(Building.js)에 props 넘겨주기
  pf(floor);
  //

  const ClickUp = () => {
    setBuildName(() => b_name + (parseInt(floor) + 1));
    setFloor(() => floor + 1);
    setN(() => 1);
  };

  const ClickDown = () => {
    setBuildName(b_name + (parseInt(floor) - 1));
    setFloor((floor) => floor - 1);
    setN(() => 1);
  };

  const ClickLeft = () => {
    if (n === 1) {
      setBuildName(b_name + floor + -1);
      setN(n - 1);
    } else if (n === 2) {
      setBuildName(b_name + floor);
      setN(n - 1);
    } else if (n === 10) {
      setBuildName(b_name + floor + -11);
      setN(n - 1);
    } else if (n === 11) {
      setBuildName(b_name + floor + -10);
      setN(n - 1);
    }
  };

  const ClickRight = () => {
    if (n === 0) {
      setBuildName(b_name + floor);
      setN(n + 1);
    } else if (n === 1) {
      setBuildName(b_name + floor + -2);
      setN(n + 1);
    } else if (n === 9) {
      setBuildName(b_name + floor + -10);
      setN(n + 1);
    } else if (n === 10) {
      setBuildName(b_name + floor + -12);
      setN(n + 1);
    }
  };

  const ClickCross = () => {
    setBuildName(b_name + floor + -3);
  };

  const ClickFront = () => {
    setBuildName(b_name + floor + -10);
    setN(n + 9);
  };

  const ClickBack = () => {
    setBuildName(b_name + floor);
    setN(n - 9);
  };

  useEffect(() => {
    //현재층과 클릭한 층이 다르면 클릭한 층으로 이동
    if (floor !== bf && bf !== 0) {
      setBuildName(b_name + bf);
      setFloor(() => bf);
      setN(() => 1);
    }
  }, [floor, buildName, bf]);

  return (
    <div className="build_info_left">
      <div className="build_inner_wrap">
        {floor !== mf ? (
          <button className="build_inner_btn up_btn" onClick={() => ClickUp()}>
            <FontAwesomeIcon icon={faAnglesUp} size="2x" />
          </button>
        ) : null}
        {buildName === "정보공학관1" ? (
          <button
            className="build_inner_btn cross_btn"
            onClick={() => ClickCross()}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="fa-rotate-45"
              size="2x"
            />
          </button>
        ) : null}
        {buildName === "정보공학관3" ? (
          <button
            className="build_inner_btn front_btn"
            onClick={() => ClickFront()}
          >
            <FontAwesomeIcon icon={faAngleUp} size="2x" />
          </button>
        ) : null}
        {buildName === "정보공학관3-10" ? (
          <button
            className="build_inner_btn back_btn"
            onClick={() => ClickBack()}
          >
            <FontAwesomeIcon icon={faAngleDown} size="2x" />
          </button>
        ) : null}
        <button
          className="build_inner_btn left_btn"
          onClick={() => ClickLeft()}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </button>
        <img
          src={"../images/" + b_name + "/" + buildName + ".jpg"}
          className="build_inner_img"
        />
        <button
          className="build_inner_btn right_btn"
          onClick={() => ClickRight()}
        >
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </button>

        {floor !== 1 ? (
          <button
            className="build_inner_btn down_btn"
            onClick={() => ClickDown()}
          >
            <FontAwesomeIcon icon={faAnglesDown} size="2x" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default BuildImg;
