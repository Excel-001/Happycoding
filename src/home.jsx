import waterlines from "./assets/waterline.svg";
import bigimg from "./assets/bigimg.svg";
import coaching from "./assets/coaching.svg";
import gcs from "./assets/gcs.svg";
import frame2 from "./assets/frame2.svg";
import jane from "./assets/jane.svg";
import yellowstar from "./assets/yellowstar.svg";
import star from "./assets/star.svg";
import jane2 from "./assets/jane2.svg";
import imgeone from "./assets/imge0ne.svg";
import bh from "./assets/bh.svg";
import cameragirl from "./assets/cameragirl.svg";
import bimg from "./assets/blueimg.svg";
import catherine from "./assets/Catherine.svg";
import booknowimg from "./assets/booknow.svg";
import { NavLink } from "react-router-dom";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Home() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <>
      <div className="bg-milk mb-5 ">
        <section className="d-flex  position-relative col-12  flex-column flex-lg-row py-4 container justify-content-md-between align-items-md-center justify-content-start  align-items-start">
          <div className="col-lg-6 col-12">
            <img
              src={waterlines}
              className=" position-absolute  left-25 d-none d-lg-block"
              alt=""
            />
            <p className="text-navyblue">
              Proven strategies backed by science for success.
            </p>
            <motion.h1
              initial={{
                x: -300,
              }}
              whileInView={{
                x: 0,

                transition: {
                  type: "tween",
                  duration: 0.8,
                },
              }}
              className="text-navyblue fw-bolder  display-2"
            >
              Live life at the full potential
            </motion.h1>
            <p className="text-navyblue">
              I help people to discover their true potential and live a
              fulfilling life... Discover the simple 3 steps that I discovered
              to hack productivity. It just works and it is begin using backed
              by science. Wanna transform your life?
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ y: 250 }}
              whileInView={{ y: 0, transition: { duration: 1 } }}
              type="button"
              class="btn bg-lightgreen rounded text-white  "
            >
              Book a session with us
            </motion.button>
          </div>
          <picture className="col-lg-6 col-12 m-auot position-relative">
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
              src={bigimg}
              className=" position-relative bottom-10 col-12  "
              alt=""
            />
          </picture>
        </section>
      </div>

      <section className=" col-12 tetx-navyblue  d-flex flex-column flex-lg-row justify-content-start col-gap-2  gap-md-5 px-4 sp">
        <div className="col-md-9  col-lg-5 col-12  ">
          <img src={waterlines} alt="" />
          <motion.h2
            initial={{ x: -300 }}
            whileInView={{ x: 0, transition: { type: "tween", duration: 0.8 } }}
            className="text-navyblue fs-1  fw-bolder"
          >
            I can help you in these particular areas.
          </motion.h2>
        </div>
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0, transition: { type: "tween", duration: 0.8 } }}
          className="text-navyblue col-md-9 col-lg-4 col-12"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </motion.div>
      </section>
      <section className="  px-4 py-5 text-navyblue  flex-wrap d-flex justify-content-lg-between">
        <motion.div
          ref={ref}
          initial={{ y: 300 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className=" col-12 m-auto  col-md-3 text-start  "
        >
          <div>
            <img src={coaching} alt="" />
          </div>
          <b className="fs-4 ">1:1 Coaching</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" col-12 m-auto col-md-3 text-start  "
        >
          <div>
            <img src={frame2} alt="" />
          </div>
          <b className="fs-4 ">Consultation </b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" col-12 m-auto col-md-3 text-start  "
        >
          <div>
            <img src={gcs} alt="" />
          </div>
          <b className="fs-4 ">Group Coaching Sessions</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </motion.div>
      </section>
      <div className="bg-milk p-4">
        <motion.h2
          initial={{
            y: -50,
          }}
          whileInView={{
            y: 0,

            transition: {
              type: "tween",
              duration: 1.5,
            },
          }}
          className="text-navyblue fw-bold   col-sm-7 col-md-5 col-lg-4"
        >
          Hear out what my clients say about me.
        </motion.h2>

        <div className="text-navyblue py-md-5 gap-3 col-12 d-flex flex-column flex-md-row justify-content-between m-auto">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white col-lg-3 col-12 col-md-4 p-3 m-auto m-md-0 rounded"
          >
            <p>
              "I gained so much <b>confidence</b> in my ability to connect and
              deepen my relationships with people. "
            </p>
            <p>
              <b>Jane</b>
            </p>
            <img src={jane} alt="" />
            <div>
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white col-lg-3 col-12 col-md-4 p-3 m-auto m-md-0 rounded"
          >
            <p>
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <p>
              <b>Catherine</b>
            </p>
            <img src={catherine} alt="" />
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white col-lg-3 col-md-4 col-12 p-3 m-auto m-md-0 rounded"
          >
            <p>
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <p>
              <b>Jane</b>
            </p>
            <img src={jane2} alt="" />
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
      <section className="text-navyblue p-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" fs-1  fw-bolder col-md-5 m-auto text-center"
        >
          Stay Motivated, read the weekly blog articles.
        </motion.h2>

        <div className="d-flex justify-content-between gap-3 my-4  flex-column flex-md-row">
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-9 col-md-3 m-auto "
          >
            <img src={imgeone} className="w-100" alt="" />
            <p className="my-3 fs-5">
              <b> Balancing your love and work life. </b>
            </p>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-9 col-md-3 m-auto"
          >
            <img src={bh} className="w-100" alt="" />
            <p className="my-3 fs-5">
              <b>A short break from Social Media is important. </b>
            </p>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="col-9 col-md-3 m-auto"
          >
            <img src={cameragirl} className="w-100" alt="" />
            <p className="my-3 fs-5">
              <b>How to be 1% Better Every Day</b>
            </p>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </motion.div>
        </div>
        <div className="d-flex ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="button"
            class="btn col-6 col-md-3 bg-lightgreen rounded text-white m-auto "
          >
            Read more blogs
          </motion.button>
        </div>
      </section>

      <section className=" my-5 text-navyblue container gap-5  d-flex flex-column flex-md-row  align-items-center">
        <div>
          <motion.h2
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,

              transition: {
                type: "tween",
                duration: 0.8,
              },
            }}
            className="fs-1  fw-bolder col-lg-7"
          >
            Don’t miss out on my ‘Live life at the full potential’ free guide
          </motion.h2>
          <p className="col-lg-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p className="col-lg-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <motion.button
            initial={{
              y: 250,
            }}
            whileInView={{ y: 0, transition: { duration: 1 } }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="button"
            class="btn bg-lightgreen rounded text-white "
          >
            Book a session with us
          </motion.button>
        </div>
        <div className="col-md-5">
          <img src={bimg} alt="" className="w-100" />
        </div>
      </section>
      <section className="px-4 py-5">
        <div className="bg-milk ps-4 rounded-4 d-flex flex-column flex-md-row text-navyblue align-items-center ">
          <div>
            <motion.h2
              initial={{
                x: 300,
              }}
              whileInView={{
                x: 0,

                transition: {
                  type: "tween",
                  duration: 0.8,
                },
              }}
              className="fs-1  fw-bolder col-lg-10  "
            >
              Get 15-Minutes Complimentary online session.
            </motion.h2>
            <p>Limited Period Offer. Claim Now.</p>
            <NavLink to="../service">
              <motion.button
                initial={{ y: 250 }}
                whileInView={{ y: 0, transition: { duration: 1 } }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="button"
                class="btn bg-lightgreen rounded text-white col-lg-4 "
              >
                Book now
              </motion.button>
            </NavLink>
          </div>
          <div className="z-3">
            <img
              src={booknowimg}
              className="mt-5 w-100  rounded-end-4  rounded-top-0"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
