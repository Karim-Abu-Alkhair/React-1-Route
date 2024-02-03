import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ starColor, lineColor }) {
  const starStyle = {
    color: `${starColor}`,
  };

  const lineStyle = {
    backgroundColor: `${lineColor}`,
    width: "8rem",
    height: "0.5rem",
  };

  return (
    <div className="star mb-3 d-flex justify-content-center align-items-center gap-4">
      <div style={lineStyle}></div>
      <FontAwesomeIcon icon={faStar} className=" fs-3" style={starStyle} />
      <div style={lineStyle}></div>
    </div>
  );
}

export default Star;
