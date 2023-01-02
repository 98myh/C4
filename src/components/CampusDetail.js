import React from "react";

const CampusDetail = ({ c_num, c_name }) => {
  return (
    <div className="c_line">
      <div className="c_detail">
        <p className="c_num_box">{c_num} </p>
        <p>{c_name}</p>
      </div>
    </div>
  );
};

export default CampusDetail;
