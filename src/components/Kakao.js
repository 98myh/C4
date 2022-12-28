import React, { useEffect } from "react";

const { kakao } = window;

const Kakao = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.142906, 129.034262),
      level: 4,
    };

    const roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
    const roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
    const roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

    const position = new kakao.maps.LatLng(35.142906, 129.034262);

    roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    });

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <div id="roadview" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Kakao;
