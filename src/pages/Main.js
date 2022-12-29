import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Main = () => {
  const navigate = useNavigate();
  const goLoadmap = (lat, lon, p_id) => {
    navigate("/loadmap", { state: { lat: lat, lon: lon, p_id: p_id } });
  };
  return (
    <div>
      <Head />
      <div className="main_img_box">
        <button
          className="building num1"
          onClick={() => goLoadmap(35.139785, 129.033457, 1023295953)}
        >
          <p className="build_num">1</p>
          <p className="build_name">대학본관</p>
        </button>
        <button className="building num2">
          <p className="build_num">2</p>
          <p className="build_name">법정관</p>
        </button>
        <button className="building num3">
          <p className="build_num">3</p>
          <p className="build_name">상경관</p>
        </button>
        <button className="building num5">
          <p className="build_num">5</p>
          <p className="build_name">국제관</p>
        </button>
        <button className="building num6">
          <p className="build_num">6</p>
          <p className="build_name">동의스포츠센터</p>
        </button>
        <button className="building num7">
          <p className="build_num">7</p>
          <p className="build_name">상영관</p>
        </button>
        <button className="building num8">
          <p className="build_num">8</p>
          <p className="build_name">수덕전</p>
        </button>
        <button className="building num9">
          <p className="build_num">9</p>
          <p className="build_name">제1인문관</p>
        </button>
        <button className="building num10">
          <p className="build_num">10</p>
          <p className="build_name">제2인문관</p>
        </button>
        <button className="building num11">
          <p className="build_num">11</p>
          <p className="build_name">효민체육관</p>
        </button>
        <button className="building num12">
          <p className="build_num">12</p>
          <p className="build_name">중앙도서관</p>
        </button>
        <button className="building num13">
          <p className="build_num">13</p>
          <p className="build_name">여대생커리어 개발관</p>
        </button>
        <button className="building num14">
          <p className="build_num">14</p>
          <p className="build_name">제2효민생관관</p>
        </button>
        <button className="building num15">
          <p className="build_num">15</p>
          <p className="build_name">의료보건관</p>
        </button>
        <button className="building num16">
          <p className="build_num">16</p>
          <p className="build_name">생활과학관</p>
        </button>
        <button className="building num17">
          <p className="build_num">17</p>
          <p className="build_name">음악관</p>
        </button>
        <button className="building num18">
          <p className="build_num">18</p>
          <p className="build_name">창의관</p>
        </button>
        <button className="building num19">
          <p className="build_num">19</p>
          <p className="build_name">지천관</p>
        </button>
        <button className="building num20">
          <p className="build_num">20</p>
          <p className="build_name">산학협력관</p>
        </button>
        <button className="building num21">
          <p className="build_num">21</p>
          <p className="build_name">건윤관</p>
        </button>
        <button className="building num22">
          <p className="build_num">22</p>
          <p className="build_name">공학관</p>
        </button>
        <button className="building num23">
          <p className="build_num">23</p>
          <p className="build_name">정보공학관</p>
        </button>
        <button className="building num24">
          <p className="build_num">24</p>
          <p className="build_name">제1효민생활관</p>
        </button>
        <button className="building num25">
          <p className="build_num">25</p>
          <p className="build_name">학생군사교육단</p>
        </button>
        <button className="building num26">
          <p className="build_num">26</p>
          <p className="build_name">행복기숙사</p>
        </button>
        <button className="area numA">
          <p className="area_num">A</p>
          <p className="area_name">효민야구장</p>
        </button>
        <button className="area numB">
          <p className="area_num">B</p>
          <p className="area_name">효민축구장</p>
        </button>
        <button className="area numC">
          <p className="area_num">C</p>
          <p className="area_name">효민원</p>
        </button>
        <button className="area numD">
          <p className="area_num">D</p>
          <p className="area_name">혜안지</p>
        </button>
        <button className="area numE">
          <p className="area_num">E</p>
          <p className="area_name">정심정</p>
        </button>
        <button className="area numF">
          <p className="area_num">F</p>
          <p className="area_name">야외음악당</p>
        </button>
        <button className="area numG">
          <p className="area_num">G</p>
          <p className="area_name">테니스장</p>
        </button>
        <button className="area numH">
          <p className="area_num">H</p>
          <p className="area_name">건학이념비</p>
        </button>
        <button className="area numI">
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
      <Footer />
    </div>
  );
};

export default Main;
