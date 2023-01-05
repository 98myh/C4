import React, { useEffect, useState } from "react";

const BuildImg = ({ b_name }) => {
  var mf;
  if (b_name === "정보공학관") {
    mf = 9;
  }
  const [floor, setFloor] = useState(1);
  const [buildName, setBuildName] = useState(b_name + floor); //이미지 바꾸기
  const [n, setN] = useState(1);

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
    }
  };

  const ClickRight = () => {
    if (n === 0) {
      setBuildName(b_name + floor);
      setN(n + 1);
    } else if (n === 1) {
      setBuildName(b_name + floor + -2);
      setN(n + 1);
    }
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
        <button
          className="build_inner_btn left_btn"
          onClick={() => ClickLeft()}
        >
          왼쪽으로
        </button>
        <img
          src={"../images/" + buildName + ".jpg"}
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
