# 동의대 가이드(GUIDEU)

+ ### 개발 목적
  + 기존의 캠퍼스 맵 사용하기 불편하고 알아보기 어려운점이 있음
  + 캠퍼스 맵을 보고 길을 해매는 사람들이 매년 꾸준하게 발생
  + VR 캠퍼스 투어도 있지만 항공사진 한장으로 모든 건물을 표시하는데 어렵고 알아보기 어려움
  + **기존의 캠퍼스 맵을 활용하여 로드뷰와 합쳐 조금 더 편리하고 보기쉽고 이해하기 쉽게 만드는것이 목표**


<div align="center">
  <img src="https://user-images.githubusercontent.com/90823418/213100888-e288a9df-99ea-4070-8926-d41477d26166.png" />
<p>캠퍼스 맵</p>
  <img src="https://user-images.githubusercontent.com/90823418/213100875-8bc83ba4-456e-4dd7-aa92-c11b39afc075.png" />
<p>VR 캠퍼스 투어</p>
</div>

+ ### 개발 환경
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kakao 지도 API-FFCD00?style=flat&logo=KakaoTalk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify 배포-00C7B7?style=flat&logo=Netlify&logoColor=white"/>
  
+ ### 결과물

<div align="center">
  <h1>C4 - 동의대 가이드(GUIDEU)</h1>
  <img src="https://user-images.githubusercontent.com/90823418/213092662-85ea3eb6-eb00-461f-b673-2a0ad73fcd2f.png" />
  <p>파일 구조</p>
  <br />
  <img src="https://user-images.githubusercontent.com/90823418/213090022-7a8706ac-6993-43c0-acdb-9b09c84a53d0.png" />
  첫 페이지
  <br />
  <br />
  <img src="https://user-images.githubusercontent.com/90823418/213091464-43819d7d-7a61-47ee-b8ad-531539d62f87.png" />
  메인 페이지 (번호 클릭 시 해당 건물 위도,경도,건물을 보기위한 초기 각도, 건물이름을 넘겨줌)
  
  </div>
  
  
  ###  CampusMap.js
  
   ```
   
   ...
   
  const goLoadmap = (lat, lon, rot, b_name) => { //lat=위도, lon=경도, rot=건물을 보기위한 초기 각도설정, b_name=건물이름
    navigate("/loadmap", {
      state: { lat: lat, lon: lon, rot: rot, b_name: b_name },
    });
  };
  
  ...
  
  ```
  
  <br />
  <br />
  <div align="center">
  <img src="https://user-images.githubusercontent.com/90823418/213091899-3b0e5381-d75c-4e40-bae7-95bf0d11229a.png" />
  26번(정보공학관) 클릭 시 로드뷰로 이동 (넘겨받은 state를 이용하여 해당 로드뷰로 이동, 로드뷰에서 건물 입장하기 클릭 시 건물 이름 넘김)
  </div>
  
  ### Loadmap.js
  
  ```
  
  ...
  
  const goInto = (b_name) => { // 건물 입장하기 버튼 클릭 시 건물 이름 넘김
    navigate("/deu_building", { state: { b_name: b_name } });
  };
  
  ...
  
 useEffect(() => {
    if (state.lat !== 1 && state.lat !== 2) {//위도가 필요없는 로드뷰가 아닌경우
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
        //커스텀 오버레이를 로드뷰 위에 올립니다.
        new kakao.maps.CustomOverlay({
          map: rv,
          position: new kakao.maps.Viewpoint(state.rot, 0, -3),
          content: btn,
        });
      });
    }
  });
  
  ...
  
  <div id="roadview" style={{width: "100%",height: "1000px", }}></div>
  
  ...
  
  ```
  
  <br />
  <br />
  
  <div align="center">
  <img src="https://user-images.githubusercontent.com/90823418/213092198-23629c6e-c98d-4273-8428-2d4d5f409322.png" />
  입장하기 클릭 시 건물 내부로 이동
  <br />
  (입장시 1층 중앙 사진 화살표 클릭 시 해당 방향으로 이동 및 화살표가 두개인 것을 클릭 시 아랫층 또는 위층으로 이동 <br />
  또한 오른쪽의 층 클릭 시 해당 층수로 이동)
  
  
  <img src="https://user-images.githubusercontent.com/90823418/213103254-c34dd475-2fbd-4f6c-b730-7b13e17ba7a2.png" />
  <p>왼쪽 화살표 클릭 </p>
  
  
  <img src="https://user-images.githubusercontent.com/90823418/213103542-aba67257-632a-479b-8ef1-b621fcd1740b.png" />
  <p>4층 클릭</p>
  </div>
  
   + ### 보완해야할 점 및 아쉬운 
      + 건물 내부사진을 일반 로드뷰와 마찬가지로 360도 사진을 활용하여 만들지 못했음
      + 정보공학관을 제외하고 건물 내부사진이 없음
    
   <div align="center">
    <img src="https://user-images.githubusercontent.com/90823418/213103813-7a4ed1f7-321c-4886-a32c-b0360083f552.png" />
    <img src="https://user-images.githubusercontent.com/90823418/213103853-6859b006-3912-4db8-bfd6-7d3bfd910893.png" />
   </div>
   
   링크 : https://c4-guideu.netlify.app/
   

 
