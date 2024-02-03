import { useState } from "react";
import Star from "../Star/Star";
import styles from "./Contact.module.css";

function Contact() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleTyping(e, setFunction) {
    setFunction(e.target.value);
  }

  return (
    <section className={styles.contact}>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="mt-5 mb-3 ">CONATCT SECTION</h1>
        <Star starColor={"#2C3E50"} lineColor={"#2C3E50"} />

        <div className="row  w-75 my-3 gy-5">
          <div className="mb-3 ">
            <label
              htmlFor="name"
              className={`form-label ${username ? "input-active" : ""}`}
            >
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="userName"
              value={username}
              onChange={(e) => handleTyping(e, setUsername)}
            />
          </div>

          <div className="mb-3 ">
            <label
              htmlFor="age"
              className={`form-label ${age ? "input-active" : ""}`}
            >
              User Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              className="form-control"
              placeholder="userAge"
              value={age}
              onChange={(e) => handleTyping(e, setAge)}
            />
          </div>

          <div className="mb-3 ">
            <label
              htmlFor="email"
              className={`form-label ${email ? "input-active" : ""}`}
            >
              User Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="userEmail"
              value={email}
              onChange={(e) => handleTyping(e, setEmail)}
            />
          </div>

          <div className="mb-3 ">
            <label
              htmlFor="password"
              className={`form-label ${password ? "input-active" : ""}`}
            >
              User Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="userPassword"
              value={password}
              onChange={(e) => handleTyping(e, setPassword)}
            />
          </div>
          <button className="btn btn-info btn-lg text-white fs-3 w-auto ">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
