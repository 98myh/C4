import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";

const { kakao } = window;

const Loadmap = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (state.lat !== 1 && state.lat !== 2) {
      const roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      const roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      const position = new kakao.maps.LatLng(state.lat, state.lon);
      const roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
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
          //style="border:0;"
          //allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1672383987820!6m8!1m7!1sCAoSLEFGMVFpcE1pMGRwZExjM2doWGdPODRXLTVIQnRsVEE4WkFrQ3M4NzVmTjNt!2m2!1d35.1409414!2d129.0334816!3f11.545671490160487!4f-34.514596514126595!5f0.7820865974627469"
          width="100%"
          height="1000px"
          //style="border:0;"
          //allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      <Footer />
    </div>
  );
};

export default Loadmap;
