import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoBox = () => {
  const navigate = useNavigate();
  const goCampusmap = () => {
    navigate("/main");
  };

  return (
    <div className="logobox">
      <div className="sub_logo_box">
        <img className="mini_logo mini_main" src="../images/main.jpg"></img>
        <button
          className="go_btn"
          onClick={() => (window.location.href = "https://www.deu.ac.kr/www")}
        >
          동의대학교 메인페이지 이동
        </button>
      </div>
      <div className="sub_logo_box">
        <img
          className="mini_logo mini_guideu"
          src="../images/guideu_logo.png"
        ></img>
        <button className="go_btn" onClick={goCampusmap}>
          동의대학교 가이드(GuiDEU)로 이동
        </button>
      </div>
      <div className="sub_logo_box">
        <img className="mini_logo mini_door" src="../images/door.png"></img>
        <button
          className="go_btn"
          onClick={() =>
            (window.location.href = "https://door.deu.ac.kr/Account/index")
          }
        >
          동의대학교 door로 이동
        </button>
      </div>
      <div className="sub_logo_box">
        <img className="mini_logo mini_dap" src="../images/dappage.png"></img>
        <button
          className="go_btn"
          onClick={() =>
            (window.location.href = "https://dap.deu.ac.kr/sso/login.aspx")
          }
        >
          동의대학교 dap으로 이동
        </button>
      </div>
    </div>
  );
};

export default LogoBox;
