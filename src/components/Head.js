import React from "react";
import { useNavigate } from "react-router";

const Head = ({ title }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goMain = () => {
    navigate("/main");
  };
  return (
    <header>
      <img
        className="deu_logo"
        src="../images/logo.png"
        alt="로고"
        onClick={goHome}
      ></img>
      {title === " - GuiDEU 2.0 -" ? (
        <h1 onClick={goMain} style={{ cursor: "pointer" }}>
          {title}
        </h1>
      ) : title !== "동의대학교" ? (
        <h1>{title}</h1>
      ) : null}
    </header>
  );
};

export default Head;
