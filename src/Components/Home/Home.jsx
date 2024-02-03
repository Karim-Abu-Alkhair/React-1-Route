import home from "../../assets/imgs/avataaars.svg";
import Star from "../Star/Star";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className="text-center">
        <img src={home} alt="home-images" className={styles.img} />
        <h1 className="mb-3 header">START FRAMEWORK</h1>
        <Star lineColor={"#fff"} starColor={"#fff"} />
        <p className="m-0 fs-4">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}

export default Home;
