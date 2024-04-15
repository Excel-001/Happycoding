
import waterlines from './assets/waterline.svg';
import bigimg from './assets/bigimg.svg';
import coaching from "./assets/coaching.svg";
import gcs from './assets/gcs.svg';
import frame2 from './assets/frame2.svg';
import jane from './assets/jane.svg';
import yellowstar from './assets/yellowstar.svg';
import star from './assets/star.svg';
import jane2 from "./assets/jane2.svg";
import imgeone from './assets/imge0ne.svg';
import bh from './assets/bh.svg';
import cameragirl from './assets/cameragirl.svg';
import bimg from './assets/blueimg.svg';
import catherine from './assets/Catherine.svg'
import booknowimg from './assets/booknow.svg';
import { NavLink } from "react-router-dom";
import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
 function Home(){
    return(
      <>
      <div className="bg-milk mb-5 ">
<section className="d-flex  position-relative col-12  flex-column flex-lg-row py-4 container justify-content-md-between align-items-md-center justify-content-start  align-items-start">
<div className="col-lg-6 col-12">
  <img src={waterlines} className=" position-absolute  left-25 d-none d-lg-block" alt="" />
<p className="text-navyblue">Proven strategies backed by science for success.</p>
<h1 className="text-navyblue fw-bolder  display-2">Live life at the full potential</h1>
<p className="text-navyblue">I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
<button type="button"  class="btn bg-lightgreen rounded text-white ">Book a session with us</button>
                   
</div>
<picture className="col-lg-6 col-12 m-auot position-relative">
    <img src={bigimg} className=" position-relative bottom-10 col-12  " alt="" />
</picture>


   </section>
      </div>

      <section className=" col-12  tetx-navyblue  d-flex flex-column flex-lg-row justify-content-start col-gap-2  gap-md-5 p-4">
      <div className="col-md-9  col-lg-5 col-12  ">
<img src={waterlines} alt="" />
<h2 className="text-navyblue fs-1  fw-bolder">
I can help you in these particular areas.
</h2>

      </div>
      <div className="text-navyblue col-md-9 col-lg-4 col-12">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
</p>
<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
      </div>
      </section>
 <section className="px-4 py-5 text-navyblue flex-wrap d-flex justify-content-lg-between">
  <div className=" col-12 m-auto  col-md-3 text-start  ">
    
    <div>
      <img src={coaching} alt="" />
    </div>
    <b className="fs-4 ">1:1 Coaching</b>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
    </p>
  </div>
  <div className=" col-12 m-auto col-md-3 text-start  ">
    
    <div>
      <img src={frame2} alt="" />
    </div>
    <b className="fs-4 ">Consultation </b>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
    </p>
  </div>
  <div className=" col-12 m-auto col-md-3 text-start  ">
    
    <div>
      <img src={gcs} alt="" />
    </div>
    <b className="fs-4 ">Group Coaching Sessions</b>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
    </p>
  </div>
 </section>
 <div className="bg-milk p-4">
  
    <h2 className="text-navyblue fw-bold   col-sm-7 col-md-5 col-lg-4">
  Hear out what my clients say about me.
  </h2>

  <div className="text-navyblue py-md-5 gap-3 col-12 d-flex flex-column flex-md-row justify-content-between m-auto">
    <div className="bg-white col-lg-3 col-12 col-md-4 p-3 m-auto m-md-0 rounded">
      <p>"I gained so much <b>confidence</b>  in my ability to connect and deepen my relationships with people. "</p>
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
    </div>
    <div className="bg-white col-lg-3 col-12 col-md-4 p-3 m-auto m-md-0 rounded">
      <p>
      "I gained so much confidence in my ability to connect and deepen my relationships with people. "
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
    </div>
    <div className="bg-white col-lg-3 col-md-4 col-12 p-3 m-auto m-md-0 rounded">
      <p>
      "I gained so much confidence in my ability to connect and deepen my relationships with people. "
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
    </div>
  </div>
  <div>
    
  </div>
 </div>
 <section className="text-navyblue p-4">
  <h2 className=" fs-1  fw-bolder col-md-5 m-auto text-center">
  Stay Motivated, read the weekly blog articles.
  </h2> 
  
  <div className="d-flex justify-content-between gap-3 my-4  flex-column flex-md-row">
    <div className="col-9 col-md-3 m-auto ">
      <img src={imgeone} className="w-100" alt="" />
      <p className="my-3 fs-5"><b> Balancing your love and work life.  </b></p>
      <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

      </p>

    </div>
    <div className="col-9 col-md-3 m-auto">
      <img src={bh} className="w-100" alt="" />
      <p className="my-3 fs-5"><b>A short break from Social Media is important. </b></p>
      <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

      </p>

    </div>
    <div className="col-9 col-md-3 m-auto">
      <img src={cameragirl} className="w-100" alt="" />
      <p className="my-3 fs-5"><b>How to be 1% Better Every Day</b></p>
      <p className="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

      </p>

    </div>
  </div>
 <div className="d-flex ">
      <button type="button"  class="btn col-6 col-md-3 bg-lightgreen rounded text-white m-auto ">Read more blogs</button>
 
  </div>

 </section>

  <section className=" my-5 text-navyblue container gap-5  d-flex flex-column flex-md-row  align-items-center">
  <div>
    <h2 className="fs-1  fw-bolder col-lg-7">
    Don’t miss out on my ‘Live life at the full potential’ free guide
    </h2>
    <p className="col-lg-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
    </p>
    <p className="col-lg-8">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    <button type="button"  class="btn bg-lightgreen rounded text-white ">Book a session with us</button>
                 
  </div>
  <div className="col-md-5">
    <img src={bimg} alt="" className="w-100" />
  </div>

    </section> 
<section className="px-4 py-5">
 <div className="bg-milk ps-4 rounded-4 d-flex flex-column flex-md-row text-navyblue align-items-center ">
<div>
  <h2 className="fs-1  fw-bolder col-lg-10  ">
  Get 15-Minutes Complimentary online session.
  </h2>
  <p>Limited Period Offer. Claim Now.</p>
  <NavLink to='../service'>
    <button type="button"  class="btn bg-lightgreen rounded text-white col-lg-4 ">Book now</button>
  </NavLink>
  
                    
</div>
<div>
  <img src={booknowimg} className="mt-5 w-100  rounded-end-4  rounded-top-0" alt="" />
</div>
 </div>
</section>
      </>
   
    )
  };
  export default Home