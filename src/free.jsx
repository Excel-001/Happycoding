import bimg from "./assets/blueimg.svg";
import jane from "./assets/jane.svg";
import three from "./assets/three.svg";
import four from "./assets/four.svg";
import vid from "./assets/VID.mp4";
import yellowstar from "./assets/yellowstar.svg";
import smallone from "./assets/smallone.svg";
import smalltwo from "./assets/smalltwo.svg";
import smallthree from "./assets/smallthree.svg";
import smallfour from "./assets/smallfour.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Free() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    setMessage("");
    setEmail("");
  };
  return (
    <>
      <section className="col-12 d-flex flex-column flex-md-row text-navyblue">
        <div className="col-lg-6 px-4 d-flex flex-column  gap-3  justify-content-lg-center py-3 ">
          <h2 className="text-navyblue fs-1 col-lg-8 fw-bolder">
            {" "}
            Results that speak for themselves
          </h2>
          <p className="col-lg-8 col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <div className="d-flex flex-column gap-2 col-lg-6 col-10 ">
            <input
              type="text"
              name="message"
              placeholder="Name"
              value={message}
              id="message"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleEmail}
            />
          </div>
          <p>
            {" "}
            We care about your data in our <a href="">privacy policy</a>
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
            type="submit"
            onClick={handleClick}
            class="btn bg-lightgreen rounded text-white col-lg-4 col-5 "
          >
            Get free guide
          </motion.button>
        </div>
        <div className=" col-lg-6 col-12 bg-milk d-flex justify-content-center align-items-center p-4 ">
          <motion.img
           initial={{ x: 300 }}
           whileInView={{
             x: 0,
             transition: {
               type: "spring",
               bounce: 0.4,
               duration: 2,
               delay: 0,
             },
           }}
           src={bimg} alt="" />
        </div>
      </section>

      <section className="text-navyblue d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 gap-lg-0 p-4">
        <div>
          <p className="m-0">Testimonials</p>
          <h2 className="fw-bolder  display-6 m-0">
            Results that speak for themselves
          </h2>
        </div>
        <div className=" col-lg-2 col-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
            type="motion.button"
            class="btn bg-lightgreen rounded text-white col-12  "
          >
            Get started
          </motion.button>
        </div>
      </section>

      <section className=" container my-5 text-navyblue text-center col-12 d-flex flex-lg-row flex-wrap gap-5 justify-content-center flex-column">
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div>
            <img src={jane} alt="" />
          </div>
          <p>
            <b>Naam</b>
          </p>
          <p>Bedrijf</p>
          <div>
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div>
            <img src={jane} alt="" />
          </div>
          <p>
            <b>Naam</b>
          </p>
          <p>Bedrijf</p>
          <div>
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div>
            <img src={jane} alt="" />
          </div>
          <p>
            <b>Naam</b>
          </p>
          <p>Bedrijf</p>
          <div>
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div>
            <img src={jane} alt="" />
          </div>
          <p>
            <b>Naam</b>
          </p>
          <p>Bedrijf</p>
          <div>
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
            <img src={yellowstar} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-milk p-4 text-navyblue position-relative">
        <div className="d-flex flex-column my-5 flex-lg-row">
          <div>
            <p>How does it work?</p>
            <h2 className="display-6  fw-bolder col-lg-8">
              Are you ready to transform your life?
            </h2>
            <p className="col-lg-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-column gap-4">
            <section className="d-flex align-items-start gap-2">
              <img src={three} alt="" />
              <div>
                <b>Online consultation</b>
                <p className="col-lg-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </section>
            <section className="d-flex align-items-start gap-2">
              <img src={four} alt="" />
              <div>
                <b>Ready to start? Let’s talk!</b>
                <p className="col-lg-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className=" d-flex justify-content-center col-lg-4 col-11 m-auto  position-relative bottom10">
        <video
          src={vid}
          muted
          autoPlay
          controls
          className="m-auto w-100 position-relative"
        ></video>
      </div>

      <section className=" mb-3 position-relative px-4  text-center text-navyblue d-flex flex-column gap-4 ">
        <h2 className="display-6 m-auto  fw-bolder col-lg-6">
          Don’t miss out on my{" "}
          <span className="text-lightgreen">
            ‘Live life at the full potential’
          </span>{" "}
          free guide{" "}
        </h2>
        <p className="m-auto col-lg-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          initial={{ y: 50 }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
          type="motion.button"
          class="btn bg-lightgreen rounded text-white col-lg-3 m-auto  "
        >
          Book a session with us
        </motion.button>
        <div className=" d-none d-lg-block position-absolute start-10 ">
          <motion.img
            whileInView={{
              scale: [0.5, 0.9, 0.9, 0.4, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            src={smallone}
            alt=""
          />{" "}
        </div>
        <div className=" d-none d-lg-block position-absolute end-10 ">
          <motion.img
            whileInView={{
              scale: [0.5, 0.9, 0.9, 0.4, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
           src={jane} alt="" />{" "}
        </div>
        <div className=" d-none d-lg-block position-absolute top-50 ">
          <motion.img 
            whileInView={{
              scale: [0.5, 0.9, 0.9, 0.4, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          src={smallthree} alt="" />{" "}
        </div>
        <div className=" d-none d-lg-block position-absolute top-50 end-0">
          <motion.img
            whileInView={{
              scale: [0.5, 0.9, 0.9, 0.4, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
           src={smalltwo} alt="" />{" "}
        </div>
        <div className=" d-none d-lg-flex position-relative    justify-content-end container ">
          <motion.img
            whileInView={{
              scale: [0.5, 0.9, 0.9, 0.4, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
           src={smallfour} alt="" />{" "}
        </div>

        <div>
          <p className="m-0">More than 100+ 5 star reviews</p>
          <img src={yellowstar} alt="" />
          <img src={yellowstar} alt="" />
          <img src={yellowstar} alt="" />
          <img src={yellowstar} alt="" />
          <img src={yellowstar} alt="" />
        </div>
      </section>
    </>
  );
}
export default Free;
