import react from "react";

const BuildDetail = ({ b_detail }) => {
  return (
    <div>
      {b_detail.map((floor) => {
        return (
          <div>
            <p>{floor.id}층</p>
            <p>{floor.floorInfo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuildDetail;
