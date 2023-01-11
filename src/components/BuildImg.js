import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesUp,
  faAnglesDown,
  faAngleUp,
  faAngleDown,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const BuildImg = ({ b_name, pf, bf }) => {
  //bf는 buildDetail에서 클릭한 층 을 BuildInfo를 거쳐
  //Building.js(부모) 컴포넌트로 넘겨줘 BuildImg에서 받은것
  //즉 클릭한 층수를 받아와서 층 수 이미지를 보여주기 위함

  var mf;
  var roomNum;
  if (b_name === "정보공학관") {
    mf = 9; //마지막 층
    roomNum = [
      ["109호 ~ 110호", "104호 ~ 108호", "101호 ~ 103호 , 111호 ~ 115호"],
      ["GS25 편의점 , 204호 ~ 210호", "교직원 식당"],
      [
        "305호 ~ 310호",
        "301호 ~ 304호 , 311호 ~ 318호",
        "323호 ~ 324호",
        "319호 ~ 322호",
      ],
      ["401호 ~ 408호 , 416호 ~ 419호", "410호 ~ 415호"],
      ["510호 ~ 517호", "501호 ~ 508호 , 518호 ~ 521호"],
      ["610호 ~ 615호 ", "601호 ~ 608호 , 616호 ~ 620호"],
      ["710호 ~ 716호", "701호 ~ 708호 , 717호 ~ 721호"],
      ["810호 ~ 816호", "801호 ~ 808호 , 817호 ~ 823호"],
      ["910호 ~ 916호", "901호 ~ 908호 , 917호 ~ 920호"],
    ];
  }
  const [floor, setFloor] = useState(1);
  const [buildName, setBuildName] = useState(b_name + floor); //이미지 바꾸기
  const [n, setN] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); //뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  //부모 요소(Building.js)에 props 넘겨주기
  pf(floor);
  //

  const delay = (ms) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(ms);
      }, ms)
    );
  };

  //다음 층으로
  const ClickUp = async () => {
    setLoading(true);
    setBuildName(b_name + (parseInt(floor) + 1));
    setFloor(() => floor + 1);
    setN(() => 1);
    await delay(1000);
    setLoading(false);
  };

  //아래층으로
  const ClickDown = async () => {
    setLoading(true);
    setBuildName(b_name + (parseInt(floor) - 1));
    setFloor((floor) => floor - 1);
    setN(() => 1);
    await delay(1000);
    setLoading(false);
  };

  //왼쪽으로
  const ClickLeft = async () => {
    setLoading(true);
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
    await delay(1000);
    setLoading(false);
  };

  //오른쪽으로
  const ClickRight = async () => {
    setLoading(true);
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
    await delay(1000);
    setLoading(false);
  };

  //대각석으로
  const ClickCross = async () => {
    setLoading(true);
    setBuildName(b_name + floor + -3);
    setN(n + 2);
    await delay(1000);
    setLoading(false);
  };

  //앞으로
  const ClickFront = async () => {
    setLoading(true);
    setBuildName(b_name + floor + -10);
    setN(n + 9);
    await delay(1000);
    setLoading(false);
  };

  //뒤로
  const ClickBack = async () => {
    setLoading(true);
    setBuildName(b_name + floor);
    if (n === 10) {
      setN(n - 9);
    } else if (n === 3) {
      setN(n - 2);
    }
    await delay(1000);
    setLoading(false);
  };

  useEffect(() => {
    //현재층과 클릭한 층이 다르면 클릭한 층으로 이동
    const rerend = async () => {
      setLoading(true);
      if (floor !== bf && bf !== 0) {
        setLoading(true);
        setBuildName(b_name + bf);
        setFloor(() => bf);
        setN(() => 1);
      }
      await delay(800);
      setLoading(false);
    };
    rerend();
  }, [floor, buildName, bf]);

  return (
    <div className="build_info_left">
      {loading ? (
        <div className="loading_box">
          <ClipLoader
            color="#0073df"
            loading={loading} //loading이라는 props를 통해 보이고 안보이고 조절가능
            //cssOverride={override}
            size={150}
          />
        </div>
      ) : (
        <div>
          <button className="return_page" onClick={goBack}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            &nbsp;나가기
          </button>
          <div className="build_inner_wrap">
            {floor !== mf ? (
              <button
                className="build_inner_btn up_btn"
                onClick={() => ClickUp()}
              >
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
            {n === 10 || n === 3 ? (
              <button
                className="build_inner_btn back_btn"
                onClick={() => ClickBack()}
              >
                <FontAwesomeIcon icon={faAngleDown} size="2x" />
              </button>
            ) : null}

            {n !== 0 && n !== 9 && n !== 3 ? (
              <button
                className="build_inner_btn left_btn"
                onClick={() => ClickLeft()}
              >
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
              </button>
            ) : null}

            {n === 0 ? (
              <p className="roomNumber">{roomNum[parseInt(floor) - 1][n]}</p>
            ) : n === 1 || n === 10 ? null : n === 2 || n === 3 ? (
              <p className="roomNumber">
                {roomNum[parseInt(floor) - 1][n - 1]}
              </p>
            ) : n === 9 ? (
              <p className="roomNumber">
                {roomNum[parseInt(floor) - 1][n - 7]}
              </p>
            ) : n === 11 ? (
              <p className="roomNumber">
                {roomNum[parseInt(floor) - 1][n - 8]}
              </p>
            ) : (
              <p className="roomNumber">
                {roomNum[parseInt(floor) - 1][n - 2]}
              </p>
            )}
            <img
              src={"../images/" + b_name + "/" + buildName + ".jpg"}
              id="build_inner_img"
              alt="내부 이미지"
            />
            {n !== 2 && n !== 11 && n !== 3 ? (
              <button
                className="build_inner_btn right_btn"
                onClick={() => ClickRight()}
              >
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
              </button>
            ) : null}

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
      )}
    </div>
  );
};

export default BuildImg;
