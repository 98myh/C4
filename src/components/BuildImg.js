import React from "react";

const BuildImg = ({ b_name }) => {
  return (
    <div className="build_info_left">
      <img src={"../images/" + b_name + ".jpg"}></img>
    </div>
  );
};

export default BuildImg;
