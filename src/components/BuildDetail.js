import react from "react";

const BuildDetail = ({ b_detail }) => {
  return (
    <div>
      {b_detail.map((floor) => {
        return (
          <div key={floor.id}>
            <h4>{floor.id}층</h4>
            <p>{floor.floorInfo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuildDetail;
