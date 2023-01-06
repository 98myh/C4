import React, { useEffect, useState } from "react";

const BuildImg = ({ b_name, pf }) => {
  var mf;
  if (b_name === "정보공학관") {
    mf = 9;
  }
  const [floor, setFloor] = useState(1);
  const [buildName, setBuildName] = useState(b_name + floor); //이미지 바꾸기
  const [n, setN] = useState(1);

  pf(floor);

  const ClickUp = () => {
    setBuildName(b_name + (parseInt(floor) + 1));
    setFloor((floor) => floor + 1);
  };

  const ClickDown = () => {
    setBuildName(b_name + (parseInt(floor) - 1));
    setFloor((floor) => floor - 1);
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

  useEffect(() => {}, [floor, buildName]);

  return (
    <div className="build_info_left">
      <div className="build_inner_wrap">
        {floor !== mf ? (
          <button className="build_inner_btn up_btn" onClick={() => ClickUp()}>
            다음층으로
          </button>
        ) : null}
        {buildName === "정보공학관1" ? (
          <button
            className="build_inner_btn cross_btn"
            onClick={() => ClickCross()}
          >
            대각선으로
          </button>
        ) : null}
        {buildName === "정보공학관3" ? (
          <button
            className="build_inner_btn front_btn"
            onClick={() => ClickFront()}
          >
            앞으로
          </button>
        ) : null}
        {buildName === "정보공학관3-10" ? (
          <button
            className="build_inner_btn back_btn"
            onClick={() => ClickBack()}
          >
            뒤로
          </button>
        ) : null}
        <button
          className="build_inner_btn left_btn"
          onClick={() => ClickLeft()}
        >
          왼쪽으로
        </button>
        <img
          src={"../images/" + b_name + "/" + buildName + ".jpg"}
          className="build_inner_img"
        />
        <button
          className="build_inner_btn right_btn"
          onClick={() => ClickRight()}
        >
          오른쪽으로
        </button>

        {floor !== 1 ? (
          <button
            className="build_inner_btn down_btn"
            onClick={() => ClickDown()}
          >
            아래층으로
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default BuildImg;
