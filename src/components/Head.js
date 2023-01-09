import React from "react";
import { useNavigate } from "react-router";

const Head = ({ title }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <header>
      <img
        className="deu_logo"
        src="../images/logo.png"
        alt="로고"
        onClick={goHome}
      ></img>
      {title !== "동의대학교" ? <h1>{title}</h1> : null}
    </header>
  );
};

export default Head;
