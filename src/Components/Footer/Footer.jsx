import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-white footer-container">
        <div className="row d-flex justify-content-between gy-5 ">
          <div className="col-md-4  text-center ">
            <h2 className="fs-1">LOCATION</h2>
            <p className="fs-4">2215 John Daniel Drive</p>
            <p className="fs-4">Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center ">
            <h2 className="fs-1">AROUND THE WEB</h2>
            <ul className="list-unstyled d-flex gap-3 justify-content-center ">
              <li className={styles.footer_icon}>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className={styles.footer_icon}>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className={styles.footer_icon}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li className={styles.footer_icon}>
                <FontAwesomeIcon icon={faGlobe} />
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h2 className="fs-1">ABOUT FREELANCER</h2>
            <p className="fs-4">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p className="fs-4 p-4">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
