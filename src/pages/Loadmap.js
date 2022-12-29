import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";

const { kakao } = window;

const Loadmap = () => {
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    const roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
    const roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
    const position = new kakao.maps.LatLng(state.lat, state.lon);
    const roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
    roadviewClient.getNearestPanoId(position, 30, function (panoId) {
      roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    });
  });

  return (
    <div>
      <Head />
      <div
        id="roadview"
        style={{
          width: "100%",
          height: "1000px",
        }}
      ></div>
      <Footer />
    </div>
  );
};

export default Loadmap;
