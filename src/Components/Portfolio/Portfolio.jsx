import Star from "../Star/Star";
import home from "../../assets/imgs/poert1.png";
import cake from "../../assets/imgs/port2.png";
import tent from "../../assets/imgs/port3.png";
import styles from "./Portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Portfolio() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function handleClick(image) {
    setSelectedImage(image);
    setIsClicked(true);
  }

  return (
    <section className={styles.portfolio}>
      <div className="container">
        <h1 className={styles.heading}>PORTFOLIO COMPONENT</h1>
        <Star starColor={"#2C3E50"} lineColor={"#2C3E50"} />
        <div className="row mt-3 g-5">
          {[
            { id: 1, img: home },
            { id: 2, img: cake },
            { id: 3, img: tent },
            { id: 4, img: home },
            { id: 5, img: cake },
            { id: 6, img: tent },
          ].map((card) => (
            <div className="col-md-4" key={card.id}>
              <div
                className={`${styles.portfolio_img} position-relative`}
                onClick={() => handleClick(card.img)}
              >
                <img src={card.img} alt="home" className="w-100 rounded-3" />
                <div
                  className={`${styles.overlay} rounded-3 d-flex align-items-center justify-content-center `}
                >
                  <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isClicked && selectedImage && (
        <div
          className={`${styles.enlarged_image} position-fixed top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100`}
        >
          <div
            className="enlarged-overlay position-absolute w-100 h-100 top-0 end-0 bg-info bg-opacity-25"
            onClick={() => setIsClicked(false)}
          ></div>

          <img src={selectedImage} alt="enlarged" />
        </div>
      )}
    </section>
  );
}

export default Portfolio;
