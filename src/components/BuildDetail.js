import react from "react";

const BuildDetail = ({ b_detail, f }) => {
  return (
    <div>
      {b_detail.map((floor) => {
        return (
          <div key={floor.id} id={floor.id} className={"floor"}>
            <h4>{floor.id}층</h4>
            <p className="floor_info">{floor.floorInfo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuildDetail;
