import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";

const { kakao } = window;

const Loadmap = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const b_name = state.b_name;
  const goInto = (b_name) => {
    navigate("/deu_building", { state: { b_name: b_name } });
  };

  //건물 입장 버튼
  var btn = "";
  // if (
  //   b_name === "효민야구장" &&
  //   b_name === "효민축구장" &&
  //   b_name === "정심정" &&
  //   b_name === "야외음악장" &&
  //   b_name === "테니스장" &&
  //   b_name === "건학이념비" &&
  //   b_name === "정문"
  // ) {
  //   btn = document.createElement("button");
  //   btn.className = "build_into";
  //   btn.textContent = b_name;
  // }
  if (b_name !== null) {
    btn = document.createElement("button");
    btn.className = "build_into";
    btn.textContent = b_name + "\n입장하기";
    btn.onclick = function () {
      goInto(b_name);
    };
  }
  useEffect(() => {
    if (state.lat !== 1 && state.lat !== 2) {
      const rvContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      const rv = new kakao.maps.Roadview(rvContainer); //로드뷰 객체
      const rvPosition = new kakao.maps.LatLng(state.lat, state.lon);
      const rc = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
      rc.getNearestPanoId(rvPosition, 50, function (panoId) {
        rv.setPanoId(panoId, rvPosition); //panoId와 중심좌표를 통해 로드뷰 실행
      });

      kakao.maps.event.addListener(rv, "init", function () {
        //로드뷰의 viewpoint값을 적절하게 이동시킵니다.
        rv.setViewpoint(new kakao.maps.Viewpoint(state.rot, 0, -3));
        if (b_name === "지천관") {
          //지천관 이미지
          const image = document.createElement("img");
          image.className = "jicheon_img";
          image.src = "../images/jicheon.jpg";
          //image.style.width = "500px";
          new kakao.maps.CustomOverlay({
            map: rv,
            position: new kakao.maps.Viewpoint(state.rot, 0, -3),
            content: image,
          });
        }
        //커스텀 오버레이를 로드뷰 위에 올립니다.
        new kakao.maps.CustomOverlay({
          map: rv,
          position: new kakao.maps.Viewpoint(state.rot, 0, -3),
          content: btn,
        });
      });
    }
  });

  return (
    <div>
      <Head title=" - GuiDEU 2.0 -" />
      {state.lat !== 1 && state.lat !== 2 ? (
        <div
          id="roadview"
          style={{
            width: "100%",
            height: "1000px",
          }}
        ></div>
      ) : state.lat === 1 ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1672381689876!6m8!1m7!1sCAoSLEFGMVFpcFBMQVpQbUdpa09zWndjZEZ2RV9JdHBZSnlfRHI2WVVCQUlzZ05B!2m2!1d35.140508!2d129.0334444!3f173.05088019476887!4f0!5f0.7820865974627469"
          width="100%"
          height="1000px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1672383987820!6m8!1m7!1sCAoSLEFGMVFpcE1pMGRwZExjM2doWGdPODRXLTVIQnRsVEE4WkFrQ3M4NzVmTjNt!2m2!1d35.1409414!2d129.0334816!3f11.545671490160487!4f-34.514596514126595!5f0.7820865974627469"
          width="100%"
          height="1000px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      <Footer />
    </div>
  );
};

export default Loadmap;
