import React from "react";
import { useNavigate } from "react-router-dom";
import CampusInfo from "../components/CampusInfo";
import Footer from "../components/Footer";
import Head from "../components/Head";

const CampusMap = () => {
  const navigate = useNavigate();
  const goLoadmap = (lat, lon, rot, b_name) => {
    navigate("/loadmap", {
      state: { lat: lat, lon: lon, rot: rot, b_name: b_name },
    });
  };
  return (
    <div>
      <Head title=" - GuiDEU 2.0 -" />
      <div className="main_img_box">
        <button
          className="building num1"
          onClick={() => goLoadmap(35.139785, 129.033457, 190, "대학본관")}
        >
          <p className="build_num">1</p>
          <p className="build_name">대학본관</p>
        </button>
        <button
          className="building num2"
          onClick={() => goLoadmap(35.139849, 129.033941, 180, "법정관")}
        >
          <p className="build_num">2</p>
          <p className="build_name">법정관</p>
        </button>
        <button
          className="building num3"
          onClick={() => goLoadmap(35.139933, 129.032858, 190, "상경관")}
        >
          <p className="build_num">3</p>
          <p className="build_name">상경관</p>
        </button>
        <button
          className="building num5"
          onClick={() => goLoadmap(35.140985, 129.032744, -100, "국제관")}
        >
          <p className="build_num">5</p>
          <p className="build_name">국제관</p>
        </button>
        <button
          className="building num6"
          onClick={() =>
            goLoadmap(35.140425, 129.034247, 180, "동의스포츠센터")
          }
        >
          <p className="build_num">6</p>
          <p className="build_name">동의스포츠센터</p>
        </button>
        <button
          className="building num7"
          onClick={() => goLoadmap(35.140666, 129.034373, -80, "상영관")}
        >
          <p className="build_num">7</p>
          <p className="build_name">상영관</p>
        </button>
        <button
          className="building num8"
          onClick={() => goLoadmap(35.141344, 129.034204, 95, "수덕전")}
        >
          <p className="build_num">8</p>
          <p className="build_name">수덕전</p>
        </button>
        <button
          className="building num9"
          onClick={() => goLoadmap(35.141211, 129.034957, 125, "제1인문관")}
        >
          <p className="build_num">9</p>
          <p className="build_name">제1인문관</p>
        </button>
        <button
          className="building num10"
          onClick={() => goLoadmap(35.14191, 129.035366, 110, "제2인문관")}
        >
          <p className="build_num">10</p>
          <p className="build_name">제2인문관</p>
        </button>
        <button
          className="building num11"
          onClick={() => goLoadmap(35.142186, 129.035634, 80, "효민체육관")}
        >
          <p className="build_num">11</p>
          <p className="build_name">효민체육관</p>
        </button>
        <button
          className="building num12"
          onClick={() => goLoadmap(35.142263, 129.034563, 50, "중앙도서관")}
        >
          <p className="build_num">12</p>
          <p className="build_name">중앙도서관</p>
        </button>
        <button
          className="building num13"
          onClick={() =>
            goLoadmap(35.142257, 129.034078, -85, "여대생커리어 개발관")
          }
        >
          <p className="build_num">13</p>
          <p className="build_name">여대생커리어 개발관</p>
        </button>
        <button
          className="building num14"
          onClick={() => goLoadmap(35.142589, 129.03286, -5, "제2효민생활관")}
        >
          <p className="build_num">14</p>
          <p className="build_name">제2효민생활관</p>
        </button>
        <button
          className="building num15"
          onClick={() => goLoadmap(35.143002, 129.034175, -90, "의료보건관")}
        >
          <p className="build_num">15</p>
          <p className="build_name">의료보건관</p>
        </button>
        <button
          className="building num16"
          onClick={() => goLoadmap(35.143654, 129.033923, -110, "생활과학관")}
        >
          <p className="build_num">16</p>
          <p className="build_name">생활과학관</p>
        </button>
        <button
          className="building num17"
          onClick={() => goLoadmap(35.144529, 129.03404, -137, "음악관")}
        >
          <p className="build_num">17</p>
          <p className="build_name">음악관</p>
        </button>
        <button
          className="building num18"
          onClick={() => goLoadmap(35.143969, 129.035279, 200, "창의관")}
        >
          <p className="build_num">18</p>
          <p className="build_name">창의관</p>
        </button>
        <button
          className="building num19"
          onClick={() => goLoadmap(35.144127, 129.035005, 0, "지천관")}
        >
          <p className="build_num">19</p>
          <p className="build_name">지천관</p>
        </button>
        <button
          className="building num20"
          onClick={() => goLoadmap(35.14477, 129.036098, -95, "산학협력관")}
        >
          <p className="build_num">20</p>
          <p className="build_name">산학협력관</p>
        </button>
        <button
          className="building num21"
          onClick={() => goLoadmap(35.145344, 129.035773, 110, "건윤관")}
        >
          <p className="build_num">21</p>
          <p className="build_name">건윤관</p>
        </button>
        <button
          className="building num22"
          onClick={() => goLoadmap(35.144551, 129.036037, 160, "공학관")}
        >
          <p className="build_num">22</p>
          <p className="build_name">공학관</p>
        </button>
        <button
          className="building num23"
          onClick={() => goLoadmap(35.145742, 129.036002, 105, "정보공학관")}
        >
          <p className="build_num">23</p>
          <p className="build_name">정보공학관</p>
        </button>
        <button
          className="building num24"
          onClick={() => goLoadmap(35.143408, 129.03791, 20, "제1효민생활관")}
        >
          <p className="build_num">24</p>
          <p className="build_name">제1효민생활관</p>
        </button>
        <button
          className="building num25"
          onClick={() =>
            goLoadmap(35.142273, 129.036705, 103, "학생군사교육단")
          }
        >
          <p className="build_num">25</p>
          <p className="build_name">학생군사교육단</p>
        </button>
        <button
          className="building num26"
          onClick={() => goLoadmap(35.141339, 129.033516, "행복기숙사")}
        >
          <p className="build_num">26</p>
          <p className="build_name">행복기숙사</p>
        </button>
        <button
          className="area numA"
          onClick={() => goLoadmap(35.138879, 129.034119, "효민야구장")}
        >
          <p className="area_num">A</p>
          <p className="area_name">효민야구장</p>
        </button>
        <button
          className="area numB"
          onClick={() => goLoadmap(35.142481, 129.036661, 0, "효민축구장")}
        >
          <p className="area_num">B</p>
          <p className="area_name">효민축구장</p>
        </button>
        <button
          className="area numC"
          onClick={() => goLoadmap(1, 1, 0, "효민원")}
        >
          <p className="area_num">C</p>
          <p className="area_name">효민원</p>
        </button>
        <button
          className="area numD"
          onClick={() => goLoadmap(2, 2, 0, "혜안지")}
        >
          <p className="area_num">D</p>
          <p className="area_name">혜안지</p>
        </button>
        <button
          className="area numE"
          onClick={() => goLoadmap(35.140579, 129.034439, 0, "정심정")}
        >
          <p className="area_num">E</p>
          <p className="area_name">정심정</p>
        </button>
        <button
          className="area numF"
          onClick={() => goLoadmap(35.14187, 129.032414, 0, "야외음악당")}
        >
          <p className="area_num">F</p>
          <p className="area_name">야외음악당</p>
        </button>
        <button
          className="area numG"
          onClick={() => goLoadmap(35.143384, 129.037745, 0, "테니스장")}
        >
          <p className="area_num">G</p>
          <p className="area_name">테니스장</p>
        </button>
        <button
          className="area numH"
          onClick={() => goLoadmap(35.145154, 129.034311, 0, "건학이념비")}
        >
          <p className="area_num">H</p>
          <p className="area_name">건학이념비</p>
        </button>
        <button
          className="area numI"
          onClick={() => goLoadmap(35.145855, 129.034364, 0, "정문")}
        >
          <p className="area_num">I</p>
          <p className="area_name">정문</p>
        </button>
        <button
          className="check_point"
          id="check1"
          onClick={() => goLoadmap(35.143985, 129.034286)}
        ></button>
        <button className="check_point" id="check2"></button>
        <button className="check_point" id="check3"></button>
      </div>
      <CampusInfo />
      <Footer />
    </div>
  );
};

export default CampusMap;
