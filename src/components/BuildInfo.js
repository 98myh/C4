import React from "react";
import BuildDetail from "./BuildDetail";

const BuildInfo = ({ b_name }) => {
  var b_img;
  var b_detail_info;
  if (b_name === "정보공학관") {
    b_img = "intel.jpg";
    b_detail_info = [
      {
        id: 1,
        floorInfo:
          "기계자동차로봇부품공학부(로봇자동화공학전공,자동차공학전공) 사무실,강의실, 실험실,실습실, " +
          "기계자동차로봇부품공학부(로봇자동화공학전공,자동차공학전공) 학회실",
      },
      {
        id: 2,
        floorInfo:
          "강의실,전산실습실,3D프린터실,교직원식당,학생식당,휴게실,편의점",
      },
    ];
  }
  return (
    <div className="build_info_right">
      <h1>{b_name}</h1>
      <BuildDetail b_detail={b_detail_info} />
    </div>
  );
};

export default BuildInfo;
