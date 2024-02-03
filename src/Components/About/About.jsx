import styles from "./About.module.css";
import Star from "../Star/Star";
function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <h1 className="mt-5 mb-3 text-center">ABOUT COMPONENT</h1>
        <Star lineColor={"#fff"} />
        <div className="row text-center justify-content-center mt-3 gy-5">
          <div className="col-md-5">
            <p className="text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-5">
            <p className="text-start">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
