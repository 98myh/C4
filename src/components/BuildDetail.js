import react, { useEffect, useState } from "react";

const BuildDetail = ({ b_detail, f, bdf }) => {
  const [fsty, setFsty] = useState(f);
  useEffect(() => {
    if (document.getElementById(fsty) !== null && f !== null) {
      if (parseInt(f) === parseInt(document.getElementById(fsty).id)) {
        document.getElementById(fsty).style.backgroundColor = "#3f51b5";
        document.getElementById(fsty).style.color = "white";
      } else if (parseInt(f) !== parseInt(document.getElementById(fsty).id)) {
        document.getElementById(fsty).style.backgroundColor = "white";
        document.getElementById(fsty).style.color = "black";
        setFsty(f);
        document.getElementById(f).style.backgroundColor = "#3f51b5";
        document.getElementById(f).style.color = "white";
      }
    }
  }, [f]);

  const ClickTest = (id) => {
    bdf(id);
  };

  return (
    <div>
      {b_detail.map((floor) => {
        return (
          <div
            key={floor.id}
            id={floor.id}
            className="floor"
            onClick={() => ClickTest(floor.id)}
          >
            <h4>{floor.id}층</h4>
            <p className="floor_info">{floor.floorInfo}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BuildDetail;
